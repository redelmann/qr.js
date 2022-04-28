import * as QR from './qr.js';
import * as Patterns from './patterns.js';
import { min_version } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    const message_input = document.getElementById('qr-message');
    const version_input = document.getElementById('qr-version');
    const mode_input = document.getElementById('qr-mode');
    const mask_input = document.getElementById('qr-mask');
    const canvas = document.getElementById('qr-canvas');
    const ctx = canvas.getContext('2d');
    const download_button = document.getElementById('qr-download');

    const pattern_inputs = new Array(11);
    pattern_inputs[Patterns.FINDER] = document.getElementById('qr-position-patterns');
    pattern_inputs[Patterns.SEPARATOR] = document.getElementById('qr-separator-patterns');
    pattern_inputs[Patterns.ALIGNMENT] = document.getElementById('qr-alignment-patterns');
    pattern_inputs[Patterns.TIMING] = document.getElementById('qr-timing-patterns');
    pattern_inputs[Patterns.FORMAT] = document.getElementById('qr-format-patterns');
    pattern_inputs[Patterns.VERSION] = document.getElementById('qr-version-patterns');
    pattern_inputs[Patterns.BLACK_SQUARE] = document.getElementById('qr-black-square-patterns');
    pattern_inputs[Patterns.DATA] = document.getElementById('qr-data-patterns');
    pattern_inputs[Patterns.ERROR_CORRECTION] = document.getElementById('qr-error-patterns');
    pattern_inputs[Patterns.EXTRA_WHITE] = document.getElementById('qr-extra-white-patterns');

    const show_all_patterns_button = document.getElementById('qr-patterns-show');
    const hide_all_patterns_button = document.getElementById('qr-patterns-hide');

    const data_path_input = document.getElementById('qr-data-path');

    const colors = [
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
        'white',
    ]

    let cache_modules = null;
    let cache_patterns = null;

    function download_qr_code() {
        const data = canvas.toDataURL('image/png');
        this.download = 'qr.png';
        this.href = data;
    }

    let previous_min = null;

    function refresh_canvas() {

        const message = message_input.value;
        const mode = [1, 0, 3, 2][parseInt(mode_input.value)];
        let version = parseInt(version_input.value);
        if (version === 0) {
            version = min_version(message.length, mode, 2);
            if (previous_min !== version) {
                cache_patterns = null;
                previous_min = version;
            }
        }
        const mask = parseInt(mask_input.value);
        let showColors = data_path_input.checked;
        const showPatterns = {};
        for (let i = 1; i < 11; i++) {
            showPatterns[i] = pattern_inputs[i].checked;
            if (showPatterns[i]) {
                showColors = true;
            }
        }
        let qr;        
        try {
            qr = cache_modules !== null ? cache_modules : QR.create_qr_code(version, mode, mask, message);
            cache_modules = qr;
        } catch (e) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 4, 0, 2 * Math.PI);
            ctx.fill();

            // Draw error message
            ctx.fillStyle = 'black';
            ctx.font = '24px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(e.message, canvas.width / 2, canvas.height - 60);
            // Draw error symbol
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 20;
            ctx.moveTo(canvas.width / 2 - 60, canvas.height / 2 - 60);
            ctx.lineTo(canvas.width / 2 + 60, canvas.height / 2 + 60);
            ctx.moveTo(canvas.width / 2 + 60, canvas.height / 2 - 60);
            ctx.lineTo(canvas.width / 2 - 60, canvas.height / 2 + 60);
            ctx.stroke();
            return;
        }
        const dim = qr.length;
        const scale = Math.min(Math.floor(720 / dim), 15);

        canvas.width = dim * scale + 80;
        canvas.height = dim * scale + 80;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';

        for (let i = 0; i < dim; i++) {
            for (let j = 0; j < dim; j++) {
                if (qr[i][j] === QR.BLACK) {
                    ctx.fillRect(40 + i * scale, 40 + j * scale, scale, scale);
                }                
            }
        }
        if (showColors) {
            const patterns = cache_patterns !== null ? cache_patterns : Patterns.qr_patterns(version, mode);
            cache_patterns = patterns;
            const modules = patterns[0];

            ctx.globalAlpha = 0.5;
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    const kind = modules[i][j];
                    if (showPatterns[kind]) {
                        ctx.fillStyle = colors[kind];
                        ctx.fillRect(40 + i * scale, 40 + j * scale, scale, scale);
                    }
                }
            }
            ctx.globalAlpha = 1;

            if (data_path_input.checked) {

                let last_x = null;
                let last_y = null;
                for (const [x, y] of patterns[1]) {
                    if (last_x !== null) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'red';
                        ctx.lineWidth = 2;
                        ctx.moveTo(40 + last_x * scale + scale / 2, 40 + last_y * scale + scale / 2);
                        ctx.lineTo(40 + x * scale + scale / 2, 40 + y * scale + scale / 2);
                        ctx.stroke();
                    }
                    last_x = x;
                    last_y = y;
                }

                for (const [x, y] of patterns[2]) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'red';
                    ctx.lineWidth = 2;
                    ctx.moveTo(40 + last_x * scale + scale / 2, 40 + last_y * scale + scale / 2);
                    ctx.lineTo(40 + x * scale + scale / 2, 40 + y * scale + scale / 2);
                    ctx.stroke();
                    last_x = x;
                    last_y = y;
                }
            }
        }
    }

    message_input.addEventListener('input', function() {
        cache_modules = null;
        refresh_canvas();
    });
    version_input.addEventListener('input', function() {
        cache_modules = null;
        cache_patterns = null;
        let label = this.value;
        if (label === '0') {
            label = 'Min';
        }
        this.nextElementSibling.value = label;
        refresh_canvas();
    });
    mode_input.addEventListener('input', function() {
        cache_modules = null;
        cache_patterns = null;
        this.nextElementSibling.value = ["L", "M", "Q", "H"][parseInt(this.value)];
        refresh_canvas();
    });
    mask_input.addEventListener('input', function() {
        cache_modules = null;
        this.nextElementSibling.value = this.value;
        refresh_canvas();
    });

    download_button.addEventListener('click', download_qr_code, false);

    show_all_patterns_button.addEventListener('click', function(event) {
        const inputs = document.getElementById('patterns-controls').getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            inputs.item(i).checked = true;
        }
        refresh_canvas();
        event.preventDefault();
        return false;
    }, false);

    hide_all_patterns_button.addEventListener('click', function(event) {
        const inputs = document.getElementById('patterns-controls').getElementsByTagName('input')
        for (let i = 0; i < inputs.length; i++) {
            inputs.item(i).checked = false;
        }
        refresh_canvas();
        event.preventDefault();
        return false;
    }, false);

    for (let i = 1; i < pattern_inputs.length; i++) {
        pattern_inputs[i].addEventListener('change', refresh_canvas);
    }

    data_path_input.addEventListener('change', refresh_canvas);

    refresh_canvas();
});