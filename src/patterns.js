import { data_lengths, error_correction_length, alignment_pattern_positions, next_position } from "./constants.js";

export const FINDER = 1;
export const SEPARATOR = 2;
export const ALIGNMENT = 3;
export const TIMING = 4;
export const FORMAT = 5;
export const VERSION = 6;
export const BLACK_SQUARE = 7;
export const DATA = 8;
export const ERROR_CORRECTION = 9;
export const EXTRA_WHITE = 10;

export function qr_patterns(version, mode) {
    const dim = version * 4 + 17;
    const modules = new Array(dim);
    for (let i = 0; i < dim; i++) {
        const row = new Uint8Array(dim);
        row.fill(0);
        modules[i] = row;
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            modules[i][j] = SEPARATOR;
            modules[i][dim - 1 - j] = SEPARATOR;
            modules[dim - 1 - i][j] = SEPARATOR;
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            modules[i][j] = FINDER;
            modules[i][dim - 1 - j] = FINDER;
            modules[dim - 1 - i][j] = FINDER;
        }
    }

    for (let i = 0; i < 8; i++) {
        modules[i][8] = FORMAT;
        modules[8][i] = FORMAT;
        modules[dim - 1 - i][8] = FORMAT;
        modules[8][dim - 1 - i] = FORMAT;
    }
    modules[8][8] = FORMAT;

    if (version >= 7) {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 3; j++) {
                modules[i][dim - 9 - j] = VERSION;
                modules[dim - 9 - j][i] = VERSION;
            }
        }
    }

    for (let i = 8; i < dim - 8; i++) {
        modules[i][6] = TIMING;
        modules[6][i] = TIMING;
    }

    modules[8][dim - 8] = BLACK_SQUARE;

    const alignments = alignment_pattern_positions(version);
    for (let i = 0; i < alignments.length; i++) {
        const x = alignments[i][0];
        const y = alignments[i][1];
        for (let dx = -2; dx < 3; dx++) {
            for (let dy = -2; dy < 3; dy++) {
                modules[x + dx][y + dy] = ALIGNMENT;
            }
        }
    }

    const data_positions = [];
    const ecc_positions = [];

    const lengths = data_lengths(version, mode);
    let data_length = 0;
    for (let i = 0; i < lengths.length; i++) {
        data_length += lengths[i];
    }
    const ec_length = error_correction_length(version, mode) * lengths.length;

    let [x, y] = [dim - 1, dim - 1];
    for (let i = 0; i < data_length; i++) {
        for (let j = 0; j < 8; j++) {
            while (modules[x][y] !== 0) {
                [x, y] = next_position(dim, x, y);
            }
            modules[x][y] = DATA;
            data_positions.push([x, y]);
            [x, y] = next_position(dim, x, y);
        }
    }

    for (let i = 0; i < ec_length; i++) {
        for (let j = 0; j < 8; j++) {
            while (modules[x][y] !== 0) {
                [x, y] = next_position(dim, x, y);
            }
            modules[x][y] = ERROR_CORRECTION;
            ecc_positions.push([x, y]);
            [x, y] = next_position(dim, x, y);
        }
    }

    while (x >= 0) {
        if (modules[x][y] === 0) {
            modules[x][y] = EXTRA_WHITE;
        }
        [x, y] = next_position(dim, x, y);
    }

    return [modules, data_positions, ecc_positions];
}