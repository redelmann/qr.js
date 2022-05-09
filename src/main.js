import * as QR from './qr.js';
import * as Patterns from './patterns.js';
import { min_version } from './constants.js';
import { renderQR } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
    const message_input = document.getElementById('qr-message');
    const version_input = document.getElementById('qr-version');
    const mode_input = document.getElementById('qr-mode');
    const mask_input = document.getElementById('qr-mask');
    const display_input = document.getElementById('qr-display');
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
    const zigzag_input = document.getElementById('qr-zigzag');
    const data_groups_input = document.getElementById('qr-data-groups');

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

        try {
            if (!cache_modules) {
                cache_modules = QR.create_qr_code(version, mode, mask, message, false);
            }
        } catch (e) {
            const size = 400;
            const factor = window.devicePixelRatio ?? 1;
            canvas.setAttribute("width", String(size * factor));
            canvas.setAttribute("height", String(size * factor));
            canvas.style.setProperty("width", size + "px");
            canvas.style.setProperty("height", size + "px");
            const baseTransform = new DOMMatrix(`scale(${factor})`);
            ctx.setTransform(baseTransform);
            
            ctx.clearRect(0, 0, size, size);
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 4, 0, 2 * Math.PI);
            ctx.fill();

            // Draw error message
            ctx.fillStyle = 'black';
            ctx.font = '24px sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(e.message, size / 2, size - 60);
            // Draw error symbol
            ctx.beginPath();
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 20;
            ctx.moveTo(size / 2 - 60, size / 2 - 60);
            ctx.lineTo(size / 2 + 60, size / 2 + 60);
            ctx.moveTo(size / 2 + 60, size / 2 - 60);
            ctx.lineTo(size / 2 - 60, size / 2 + 60);
            ctx.stroke();
            return;
        }
        
        const show_patterns = {};
        for (let i = 1; i < 11; i++) {
            show_patterns[i] = pattern_inputs[i].checked;
        }

        const options = {
            show_path: data_path_input.checked,
            show_group: data_groups_input.checked,
            show_zigzag: zigzag_input.checked,
            display_mode: parseInt(display_input.value),
            show_patterns: show_patterns,
        }

        if (!cache_patterns) {
            cache_patterns = Patterns.qr_patterns(version, mode);
        }

        renderQR(canvas, cache_modules, cache_patterns, options);
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
    display_input.addEventListener('input', function() {
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
    zigzag_input.addEventListener('change', refresh_canvas);
    data_groups_input.addEventListener('change', refresh_canvas);

    refresh_canvas();
});