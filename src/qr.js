import { alignment_pattern_positions, get_mask } from './constants.js';
import { encode_format, encode_version, encode_message } from './encoder.js';

export const BLACK = 1;
export const WHITE = 2;
export const EMPTY = 0;

function bit_color(bit) {
    return bit ? BLACK : WHITE;
}

function place_square(modules, x, y, size, value) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            modules[x + i][y + j] = value;
        }
    }
}

function place_finder_pattern(modules, x, y) {
    place_square(modules, x, y, 7, BLACK);
    place_square(modules, x+1, y+1, 5, WHITE);
    place_square(modules, x+2, y+2, 3, BLACK);
}

function place_version_patterns(modules, encoded_version) {
    const dim = modules.length;
    let n = 17;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
            modules[5 - i][dim - 9 - j] = bit_color((encoded_version >> n) & 1);
            modules[dim - 9 - j][5 - i] = bit_color((encoded_version >> n) & 1);
            n -= 1;
        }
    }
}

function place_format_patterns(modules, encoded_format) {
    const dim = modules.length;
    for (let k = 0; k < 6; k++) {
        modules[k][8] = bit_color((encoded_format >> (14 - k)) & 1);
    }
    for (let k = 0; k < 2; k++) {
        modules[7 + k][8] = bit_color((encoded_format >> (8 - k)) & 1);
    }
    modules[8][7] = bit_color((encoded_format >> 6) & 1);
    for (let k = 0; k < 6; k++) {
        modules[8][5 - k] = bit_color((encoded_format >> (5 - k)) & 1);
    }

    for (let k = 0; k < 7; k++) {
        modules[8][dim - 1 - k] = bit_color((encoded_format >> (14 - k)) & 1);
    }

    for (let k = 0; k < 8; k++) {
        modules[dim - 8 + k][8] = bit_color((encoded_format >> (7 - k)) & 1);
    }
}

export function create_qr_template(version, mode, mask) {
    const dim = version * 4 + 17;
    const modules = [];
    for (let i = 0; i < dim; i++) {
        const row = new Uint8Array(dim);
        row.fill(EMPTY);
        modules.push(row);
    }

    // Place the quiet zones
    place_square(modules, 0, 0, 8, WHITE);
    place_square(modules, dim - 8, 0, 8, WHITE);
    place_square(modules, 0, dim - 8, 8, WHITE);

    // Place the finder patterns
    place_finder_pattern(modules, 0, 0);
    place_finder_pattern(modules, dim - 7, 0);
    place_finder_pattern(modules, 0, dim - 7);

    // Place the timing patterns
    for (let i = 8; i < dim - 8; i++) {
        const value = (i % 2 == 0) ? BLACK : WHITE;
        modules[i][6] = value;
        modules[6][i] = value;
    }

    // Place the alignment patterns
    const alignments = alignment_pattern_positions(version);
    for (let i = 0; i < alignments.length; i++) {
        const [x, y] = alignments[i];
        place_square(modules, x - 2, y - 2, 5, BLACK);
        place_square(modules, x - 1, y - 1, 3, WHITE);
        modules[x][y] = BLACK;
    }

    // Place the version patterns
    if (version >= 7) {
        const encoded_version = encode_version(version);
        place_version_patterns(modules, encoded_version);
    }

    // Place the format patterns
    const encoded_format = encode_format(mode, mask);
    place_format_patterns(modules, encoded_format);

    // Place the black module.
    modules[8][dim - 8] = BLACK;

    return modules;
}

function next_position(dim, x, y) {
    const isRight = (x < 6 ? x : x - 1) % 2 === 1;
    if (isRight) {
        return [x - 1, y];
    }

    const column = Math.floor((x < 6 ? x : x - 1) / 2);
    const evenColumn = column % 2 === 0;
    
    if (evenColumn) {
        // Going down
        if (y === dim - 1) {
            return [x - 1, y];
        }
        else {
            return [x + 1, y + 1];
        }
    }
    else {
        // Going up
        if (y === 0) {
            return [x === 7 ? 5 : x - 1, y];
        }
        else {
            return [x + 1, y - 1];
        }
    }
}

function place_message(modules, encoded_message, mask) {
    const dim = modules.length;
    const mask_fun = get_mask(mask);
    let [x, y] = [dim - 1, dim - 1];
    for (let i = 0; i < encoded_message.length; i++) {
        for (let j = 0; j < 8; j++) {
            while (modules[x][y] !== EMPTY) {
                [x, y] = next_position(dim, x, y);
            }
            let bit = (encoded_message[i] >> (7 - j)) & 1;
            modules[x][y] = bit_color(mask_fun(x, y, bit));
            [x, y] = next_position(dim, x, y);
        }
    }
    while (x >= 0) {
        if (modules[x][y] === EMPTY) {
            modules[x][y] = bit_color(mask_fun(x, y, 0));
        }
        [x, y] = next_position(dim, x, y);
    }
}

export function create_qr_code(version, mode, mask, message) {
    const modules = create_qr_template(version, mode, mask);
    const encoded_message = encode_message(message, version, mode, 2);
    place_message(modules, encoded_message, mask);
    return modules;
}