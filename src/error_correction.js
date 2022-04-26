import { gf256, PolynomialRing, modulo, degree } from './galois.js';

export function bch_encode(data_bits, generator) {
    data_bits <<= degree(generator);
    let ecc_bits = modulo(data_bits, generator);
    return data_bits ^ ecc_bits;
}

export class ReedSolomonEncoder {
    constructor(extra_symbols) {
        this.extra_symbols = extra_symbols;
        this.ring = new PolynomialRing(gf256);
        this.generator = this.ring.generator(extra_symbols);
    }

    encode(data) {
        let res = new Uint8Array(data.length + this.extra_symbols);
        for (let i = 0; i < data.length; i++) {
            res[i] = data[i];
        }
        for (let i = 0; i < this.extra_symbols; i++) {
            res[data.length + i] = 0;
        }
        return this.ring.remainder(res, this.generator);
    }
}