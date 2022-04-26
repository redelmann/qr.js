import { ByteArray } from './bytearray.js';
import * as constants from './constants.js';
import { bch_encode, ReedSolomonEncoder } from './error_correction.js';

export function encode_version(version) {
    return bch_encode(version, 0b1111100100101);
}

export function encode_format(mode, mask) {
    const encoded = bch_encode((mode << 3) ^ mask, 0b10100110111);
    return encoded ^ 0b101010000010010;
}

function append_bits(bits_array, number, size) {
    for (let i = size - 1; i >= 0; i--) {
        bits_array.push((number >> i) & 1);
    }
}

function encode_numeric(data_array, message) {}

function encode_alphanumeric(data_array, message) {}

function encode_bytes(data_array, message) {
    for (let i = 0; i < message.length; i++) {
        const code = message.charCodeAt(i);
        if (code > 0xff) {
            throw new Error('Invalid character');
        }
        data_array.write_bits(code, 8);
    }
}

function encode_kanji(data_array, message) {}

const ENC_FONCTIONS = [
    encode_numeric,
    encode_alphanumeric,
    encode_bytes,
    encode_kanji,
];

export function encode_message(message, version, mode, enc) {

    // Get the required number of bits for the message
    const lengths = constants.data_lengths(version, mode);
    let max_length = lengths[lengths.length - 1];
    let required_size = 0;
    for (let i = 0; i < lengths.length; i++) {
        required_size += lengths[i];
    }
    let data_array = new ByteArray(required_size);

    const required_size_bits = required_size * 8;

    // Add the encoding mode indicator
    data_array.write_bits(constants.ENC_CODE[enc], 4);

    // Add the length of the message
    const length_size = constants.enc_length_bits(version, enc);
    data_array.write_bits(message.length, length_size);

    // Add the message
    const enc_fun = ENC_FONCTIONS[enc];
    enc_fun(data_array, message);


    let bits_len = data_array.bits_written();
    if (bits_len > required_size_bits) {
        throw new Error('Message is too long');
    }

    const pad_number = Math.min(4, required_size_bits - bits_len);
    data_array.write_bits(0, pad_number);

    const extra = (bits_len + pad_number) % 8;
    if (extra > 0) {
        data_array.write_bits(0, 8 - extra);
    }

    bits_len = data_array.bits_written();
    let even = true;
    for (let i = bits_len; i < required_size_bits; i += 8) {
        if (even) {
            data_array.write_bits(236, 8);
        }
        else {
            data_array.write_bits(17, 8);
        }
        even = !even;
    }

    const data_blocks = [];
    const ecc_blocks = [];
    const ecc_length = constants.error_correction_length(version, mode);

    const reed_solomon_encoder = new ReedSolomonEncoder(ecc_length);

    let s = 0;
    const data_bytes = data_array.get_bytes();
    for (let i = 0; i < lengths.length; i++) {
        const length = lengths[i];
        const data_block = data_bytes.slice(s, s + length);
        data_blocks.push(data_block);
        ecc_blocks.push(reed_solomon_encoder.encode(data_block));
        s += length;
    }

    const bytes = new Uint8Array(required_size + ecc_length * ecc_blocks.length);
    let k = 0;
    for (let i = 0; i < max_length; i++) {
        for (let j = 0; j < data_blocks.length; j++) {
            if (i < data_blocks[j].length) {
                bytes[k] = data_blocks[j][i];
                k += 1;
            }
        }
    }

    for (let i = 0; i < ecc_length; i++) {
        for (let j = 0; j < ecc_blocks.length; j++) {
            bytes[k] = ecc_blocks[j][i];
            k += 1;
        }
    }

    return bytes;
}