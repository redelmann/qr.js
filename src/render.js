import * as QR from './qr.js';
import { next_position } from './constants.js';

export const SQUARE = 0;
export const ROUND = 1;
export const ROUNDED_SQUARE = 2;

const COLORS = [
    'white',
    'blue',
    'cyan',
    'purple',
    'teal',
    'yellow',
    'orange',
    'gray',
    'red',
    'brown',
    'pink',
]

export function renderQR(canvas, qr, patterns, options) {
    const max_qr_size = options.max_qr_size || 720;
    const margin_size = options.margin || 40;
    const max_module_size = options.max_module_size || 15;
    const display_mode = options.display_mode || SQUARE;

    const dim = qr.length;
    const scale = Math.min(Math.floor(max_qr_size / dim), max_module_size);

    const ctx = canvas.getContext('2d');
    const size = dim * scale + margin_size * 2;

    const factor = window.devicePixelRatio ?? 1;
    canvas.setAttribute("width", String(size * factor));
    canvas.setAttribute("height", String(size * factor));
    canvas.style.setProperty("width", size + "px");
    canvas.style.setProperty("height", size + "px");
    const baseTransform = new DOMMatrix(`scale(${factor})`);
    ctx.setTransform(baseTransform);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    // Display modules as squares
    if (display_mode === SQUARE) {
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                if (qr[i][j] === QR.BLACK) {
                    ctx.fillRect(margin_size + i * scale, margin_size + j * scale, scale, scale);
                }                
            }
        }
    }
    else {
        // Display modules as circles or rounded squares
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                if (qr[i][j] === QR.BLACK) {
                    ctx.beginPath();
                    ctx.arc(i * scale + margin_size + scale/2, j * scale + margin_size + scale/2, scale / 2, 0, 2 * Math.PI);
                    ctx.fill();
                    // Adding corners in case of rounded squares
                    if (display_mode === ROUNDED_SQUARE) {
                        for (let k = 0; k < 2; k++) {
                            for (let l = 0; l < 2; l++) {
                                const di = k * 2 - 1;
                                const dj = l * 2 - 1;
                                
                                let has_black_neighbor = i + di >= 0 && i + di < dim && qr[i + di][j] === QR.BLACK;
                                has_black_neighbor = has_black_neighbor || j + dj >= 0 && j + dj < dim && qr[i][j + dj] === QR.BLACK;
                                has_black_neighbor = has_black_neighbor || (i + j) % 2 === 0 && i + di >= 0 && i + di < dim && j + dj >= 0 && j + dj < dim && qr[i + di][j + dj] === QR.BLACK;
                                if (has_black_neighbor) {
                                    ctx.fillRect(i * scale + margin_size + k * scale / 2, j * scale + margin_size + l * scale / 2, scale / 2, scale / 2);
                                }
                            }
                        }
                    }
                }
                else if (display_mode === ROUNDED_SQUARE) {
                    // Adding corners of white modules 
                    // in case of rounded squares
                    for (let k = 0; k < 2; k++) {
                        for (let l = 0; l < 2; l++) {
                            const di = k * 2 - 1;
                            const dj = l * 2 - 1;
                            
                            let has_black_neighbor = i + di >= 0 && i + di < dim && qr[i + di][j] === QR.BLACK;
                            has_black_neighbor = has_black_neighbor && j + dj >= 0 && j + dj < dim && qr[i][j + dj] === QR.BLACK;
                            if ((i + j) % 2 === 0) {
                                has_black_neighbor = has_black_neighbor && qr[i + di][j + dj] === QR.BLACK;
                            }
                            if (has_black_neighbor) {
                                ctx.fillRect(i * scale + margin_size + k * scale / 2, j * scale + margin_size + l * scale / 2, scale / 2, scale / 2);
                            }
                        }
                    }
                    // Display white circle
                    ctx.fillStyle = 'white';
                    ctx.beginPath();
                    ctx.arc(i * scale + margin_size + scale/2, j * scale + margin_size + scale/2, scale / 2, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.fillStyle = 'black';
                }
            }
        }
    }

    // Display patterns

    const show_group = options.show_group || false;
    const show_zigzag = options.show_zigzag || false;
    const show_path = options.show_path || false;

    let show_colors = false;
    const show_patterns = {};
    for (let i = 1; i < 11; i++) {
        show_patterns[i] = options.show_patterns && options.show_patterns[i] || false;
        show_colors = show_colors || show_patterns[i];
    }

    if (show_colors) {
        const modules = patterns[0];
        ctx.globalAlpha = 0.5;
        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                const kind = modules[i][j];
                if (show_patterns[kind]) {
                    ctx.fillStyle = COLORS[kind];
                    ctx.fillRect(margin_size + i * scale, margin_size + j * scale, scale, scale);
                }
            }
        }
        ctx.globalAlpha = 1;
    }

    if (show_zigzag) {
        let last_x = dim - 1;
        let last_y = dim - 1;
        let [x, y] = next_position(dim, last_x, last_y);
        while (x >= 0) {
            ctx.beginPath();
            ctx.strokeStyle = 'gray';
            ctx.lineWidth = 2;
            ctx.moveTo(margin_size + last_x * scale + scale / 2, margin_size + last_y * scale + scale / 2);
            ctx.lineTo(margin_size + x * scale + scale / 2, margin_size + y * scale + scale / 2);
            ctx.stroke();
            last_x = x;
            last_y = y;
            [x, y] = next_position(dim, last_x, last_y);
        }
    }

    if (show_path) {
        let last_x = null;
        let last_y = null;
        for (const octet of patterns[1]) {
            for (const [x, y] of octet) {
                if (last_x !== null) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'red';
                    ctx.lineWidth = 2;
                    ctx.moveTo(margin_size + last_x * scale + scale / 2, margin_size + last_y * scale + scale / 2);
                    ctx.lineTo(margin_size + x * scale + scale / 2, margin_size + y * scale + scale / 2);
                    ctx.stroke();
                }
                last_x = x;
                last_y = y;
            }
        }

        for (const octet of patterns[2]) {
            for (const [x, y] of octet) {
                ctx.beginPath();
                ctx.strokeStyle = 'red';
                ctx.lineWidth = 2;
                ctx.moveTo(margin_size + last_x * scale + scale / 2, margin_size + last_y * scale + scale / 2);
                ctx.lineTo(margin_size + x * scale + scale / 2, margin_size + y * scale + scale / 2);
                ctx.stroke();
                last_x = x;
                last_y = y;
            }
        }
    }

    if (show_group) {
        const dx_start = [0, 0, 1, 0];
        const dx_end = [1, 1, 1, 0];
        const dy_start = [1, 0, 0, 0];
        const dy_end = [1, 0, 1, 1];

        for (let k = 1; k <= 2; k++) {
            for (const octet of patterns[k]) {
                for (let i = 0; i < octet.length; i++) {
                    const [x1, y1] = octet[i];
                    const sides = [true, true, true, true];
                    for (let j = 0; j < octet.length; j++) {
                        const [x2, y2] = octet[j];
                        if (x1 === x2) {
                            if (y1 === y2 - 1) {
                                sides[0] = false;
                            } else if (y1 === y2 + 1) {
                                sides[1] = false;
                            }
                        } else if (y1 === y2) {
                            if (x1 === x2 - 1) {
                                sides[2] = false;
                            } else if (x1 === x2 + 1) {
                                sides[3] = false;
                            }
                        }
                    }
                    for (let i = 0; i < 4; i++) {
                        if (sides[i]) {
                            ctx.beginPath();
                            ctx.strokeStyle = 'red';
                            ctx.lineWidth = 2;
                            ctx.moveTo(40 + (x1 + dx_start[i]) * scale, 40 + (y1 + dy_start[i]) * scale);
                            ctx.lineTo(40 + (x1 + dx_end[i]) * scale, 40 + (y1 + dy_end[i]) * scale);
                            ctx.stroke();
                        }
                    }
                }
            }
        }
    }
}