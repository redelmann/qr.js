export const MAX_VERSION = 40;

export const MODE_M = 0;
export const MODE_L = 1;
export const MODE_H = 2;
export const MODE_Q = 3;

const DATA_LENGTHS = [
    [   // Version 1
        [16, 1, 0, 10],
        [19, 1, 0, 7],
        [9, 1, 0, 17],
        [13, 1, 0, 13],
    ],
    [   // Version 2
        [28, 1, 0, 16],
        [34, 1, 0, 10],
        [16, 1, 0, 28],
        [22, 1, 0, 22],
    ],
    [   // Version 3
        [44, 1, 0, 26],
        [55, 1, 0, 15],
        [13, 2, 0, 22],
        [17, 2, 0, 18],
    ],
    [   // Version 4
        [32, 2, 0, 18],
        [80, 1, 0, 20],
        [9, 4, 0, 16],
        [24, 2, 0, 26],
    ],
    [   // Version 5
        [43, 2, 0, 24],
        [108, 1, 0, 26],
        [11, 2, 2, 22],
        [15, 2, 2, 18],
    ],
    [   // Version 6
        [27, 4, 0, 16],
        [68, 2, 0, 18],
        [15, 4, 0, 28],
        [19, 4, 0, 24],
    ],
    [   // Version 7
        [31, 4, 0, 18],
        [78, 2, 0, 20],
        [13, 4, 1, 26],
        [14, 2, 4, 18],
    ],
    [   // Version 8
        [38, 2, 2, 22],
        [97, 2, 0, 24],
        [14, 4, 2, 26],
        [18, 4, 2, 22],
    ],
    [   // Version 9
        [36, 3, 2, 22],
        [116, 2, 0, 30],
        [12, 4, 4, 24],
        [16, 4, 4, 20],
    ],
    [   // Version 10
        [43, 4, 1, 26],
        [68, 2, 2, 18],
        [15, 6, 2, 28],
        [19, 6, 2, 24],
    ],
    [   // Version 11
        [50, 1, 4, 30],
        [81, 4, 0, 20],
        [12, 3, 8, 24],
        [22, 4, 4, 28],
    ],
    [   // Version 12
        [36, 6, 2, 22],
        [92, 2, 2, 24],
        [14, 7, 4, 28],
        [20, 4, 6, 26],
    ],
    [   // Version 13
        [37, 8, 1, 22],
        [107, 4, 0, 26],
        [11, 12, 4, 22],
        [20, 8, 4, 24],
    ],
    [   // Version 14
        [40, 4, 5, 24],
        [115, 3, 1, 30],
        [12, 11, 5, 24],
        [16, 11, 5, 20],
    ],
    [   // Version 15
        [41, 5, 5, 24],
        [87, 5, 1, 22],
        [12, 11, 7, 24],
        [24, 5, 7, 30],
    ],
    [   // Version 16
        [45, 7, 3, 28],
        [98, 5, 1, 24],
        [15, 3, 13, 30],
        [19, 15, 2, 24],
    ],
    [   // Version 17
        [46, 10, 1, 28],
        [107, 1, 5, 28],
        [14, 2, 17, 28],
        [22, 1, 15, 28],
    ],
    [   // Version 18
        [43, 9, 4, 26],
        [120, 5, 1, 30],
        [14, 2, 19, 28],
        [22, 17, 1, 28],
    ],
    [   // Version 19
        [44, 3, 11, 26],
        [113, 3, 4, 28],
        [13, 9, 16, 26],
        [21, 17, 4, 26],
    ],
    [   // Version 20
        [41, 3, 13, 26],
        [107, 3, 5, 28],
        [15, 15, 10, 28],
        [24, 15, 5, 30],
    ],
    [   // Version 21
        [42, 17, 0, 26],
        [116, 4, 4, 28],
        [16, 19, 6, 30],
        [22, 17, 6, 28],
    ],
    [   // Version 22
        [46, 17, 0, 28],
        [111, 2, 7, 28],
        [13, 34, 0, 24],
        [24, 7, 16, 30],
    ],
    [   // Version 23
        [47, 4, 14, 28],
        [121, 4, 5, 30],
        [15, 16, 14, 30],
        [24, 11, 14, 30],
    ],
    [   // Version 24
        [45, 6, 14, 28],
        [117, 6, 4, 30],
        [16, 30, 2, 30],
        [24, 11, 16, 30],
    ],
    [   // Version 25
        [47, 8, 13, 28],
        [106, 8, 4, 26],
        [15, 22, 13, 30],
        [24, 7, 22, 30],
    ],
    [   // Version 26
        [46, 19, 4, 28],
        [114, 10, 2, 28],
        [16, 33, 4, 30],
        [22, 28, 6, 28],
    ],
    [   // Version 27
        [45, 22, 3, 28],
        [122, 8, 4, 30],
        [15, 12, 28, 30],
        [23, 8, 26, 30],
    ],
    [   // Version 28
        [45, 3, 23, 28],
        [117, 3, 10, 30],
        [15, 11, 31, 30],
        [24, 4, 31, 30],
    ],
    [   // Version 29
        [45, 21, 7, 28],
        [116, 7, 7, 30],
        [15, 19, 26, 30],
        [23, 1, 37, 30],
    ],
    [   // Version 30
        [47, 19, 10, 28],
        [115, 5, 10, 30],
        [15, 23, 25, 30],
        [24, 15, 25, 30],
    ],
    [   // Version 31
        [46, 2, 29, 28],
        [115, 13, 3, 30],
        [15, 23, 28, 30],
        [24, 42, 1, 30],
    ],
    [   // Version 32
        [46, 10, 23, 28],
        [115, 17, 0, 30],
        [15, 19, 35, 30],
        [24, 10, 35, 30],
    ],
    [   // Version 33
        [46, 14, 21, 28],
        [115, 17, 1, 30],
        [15, 11, 46, 30],
        [24, 29, 19, 30],
    ],
    [   // Version 34
        [46, 14, 23, 28],
        [115, 13, 6, 30],
        [16, 59, 1, 30],
        [24, 44, 7, 30],
    ],
    [   // Version 35
        [47, 12, 26, 28],
        [121, 12, 7, 30],
        [15, 22, 41, 30],
        [24, 39, 14, 30],
    ],
    [   // Version 36
        [47, 6, 34, 28],
        [121, 6, 14, 30],
        [15, 2, 64, 30],
        [24, 46, 10, 30],
    ],
    [   // Version 37
        [46, 29, 14, 28],
        [122, 17, 4, 30],
        [15, 24, 46, 30],
        [24, 49, 10, 30],
    ],
    [   // Version 38
        [46, 13, 32, 28],
        [122, 4, 18, 30],
        [15, 42, 32, 30],
        [24, 48, 14, 30],
    ],
    [   // Version 39
        [47, 40, 7, 28],
        [117, 20, 4, 30],
        [15, 10, 67, 30],
        [24, 43, 22, 30],
    ],
    [   // Version 40
        [47, 18, 31, 28],
        [118, 19, 6, 30],
        [15, 20, 61, 30],
        [24, 34, 34, 30],
    ],
];

export function data_lengths(version, mode) {
    const raw_data_lengths = DATA_LENGTHS[version - 1][mode];

    const data_lengths = [];
    const base_length = raw_data_lengths[0];
    const base_number = raw_data_lengths[1];
    const extra_number = raw_data_lengths[2];
    for (let i = 0; i < base_number; i++) {
        data_lengths.push(base_length);
    }
    for (let i = 0; i < extra_number; i++) {
        data_lengths.push(base_length + 1);
    }
    return data_lengths;
}

export function error_correction_length(version, mode) {
    const raw_error_correction_length = DATA_LENGTHS[version - 1][mode];

    return raw_error_correction_length[3];
}

const ALIGNMENTS = [
    [6],    // Version 1
    [6, 18],  // Version 2
    [6, 22],  // Version 3
    [6, 26],  // Version 4
    [6, 30],  // Version 5
    [6, 34],  // Version 6
    [6, 22, 38],  // Version 7
    [6, 24, 42],  // Version 8
    [6, 26, 46],  // Version 9
    [6, 28, 50],  // Version 10
    [6, 30, 54],  // Version 11
    [6, 32, 58],  // Version 12
    [6, 34, 62],  // Version 13
    [6, 26, 46, 66],  // Version 14
    [6, 26, 48, 70],  // Version 15
    [6, 26, 50, 74],  // Version 16
    [6, 30, 54, 78],  // Version 17
    [6, 30, 56, 82],  // Version 18
    [6, 30, 58, 86],  // Version 19
    [6, 34, 62, 90],  // Version 20
    [6, 28, 50, 72, 94],   // Version 21
    [6, 26, 50, 74, 98],   // Version 22
    [6, 30, 54, 78, 102],  // Version 23
    [6, 28, 54, 80, 106],  // Version 24
    [6, 32, 58, 84, 110],  // Version 25
    [6, 30, 58, 86, 114],  // Version 26
    [6, 34, 62, 90, 118],  // Version 27
    [6, 26, 50, 74, 98, 122],   // Version 28
    [6, 30, 54, 78, 102, 126],  // Version 29
    [6, 26, 52, 78, 104, 130],  // Version 30
    [6, 30, 56, 82, 108, 134],  // Version 31
    [6, 34, 60, 86, 112, 138],  // Version 32
    [6, 30, 58, 86, 114, 142],  // Version 33
    [6, 34, 62, 90, 118, 146],  // Version 34
    [6, 30, 54, 78, 102, 126, 150],  // Version 35
    [6, 24, 50, 76, 102, 128, 154],  // Version 36
    [6, 28, 54, 80, 106, 132, 158],  // Version 37
    [6, 32, 58, 84, 110, 136, 162],  // Version 38
    [6, 26, 54, 82, 110, 138, 166],  // Version 39
    [6, 30, 58, 86, 114, 142, 170],  // Version 40
];

export function alignment_pattern_positions(version) {
    const raw_alignments = ALIGNMENTS[version - 1];

    const alignments = [];
    const last_index = raw_alignments.length - 1;
    for (let i = 0; i < raw_alignments.length; i++) {
        for (let j = 0; j < raw_alignments.length; j++) {
            if (i == 0 && j == 0) {
                continue;
            }
            if (i == last_index && j == 0) {
                continue;
            }
            if (i == 0 && j == last_index) {
                continue;
            }
            alignments.push([raw_alignments[i], raw_alignments[j]]);
        }
    }
    return alignments;
}

const MASKS = [
    function(i, j) { return (i + j) % 2; },
    function(i, j) { return j % 2; },
    function(i, j) { return i % 3; },
    function(i, j) { return (i + j) % 3; },
    function(i, j) { return (Math.floor(j / 2) + Math.floor(i / 3)) % 2; },
    function(i, j) { return ((i * j) % 2) + ((i * j) % 3); },
    function(i, j) { return ((i * j) % 3 + i * j) % 2; },
    function(i, j) { return ((i * j) % 3 + i + j) % 2; },
];

export function get_mask(mask) {
    const mask_fun = MASKS[mask];
    return function(i, j, bit) {
        return (mask_fun(i, j) > 0 ? 0 : 1) ^ bit;
    }
}

export const ENC_CODE = [
    0b0001,
    0b0010,
    0b0100,
    0b1000,
]

export function enc_length_bits(version, enc) {
    let lengths;
    if (version < 10) {
        lengths = [
            10,
            9,
            8,
            8,
        ];
    }
    else if (version < 27) {
        lengths = [
            12,
            11,
            16,
            10,
        ];
    }
    else {
        lengths = [
            14,
            13,
            16,
            12,
        ];
    }

    return lengths[enc];
}
