import * as QR from './qr.js';
import { qr_patterns } from './patterns.js';

document.addEventListener('DOMContentLoaded', () => {
    const message_input = document.getElementById('qr-message');
    const version_input = document.getElementById('qr-version');
    const mode_input = document.getElementById('qr-mode');
    const mask_input = document.getElementById('qr-mask');
    const color_input = document.getElementById('qr-color');
    const canvas = document.getElementById('qr-canvas');
    const ctx = canvas.getContext('2d');
    const download_button = document.getElementById('qr-download');

    const colors = [
        'white',
        'blue',
        'cyan',
        'purple',
        'teal',
        'yellow',
        'orange',
        'black',
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

    function refresh_canvas() {

        const message = message_input.value;
        const version = parseInt(version_input.value);
        const mode = [1, 0, 3, 2][parseInt(mode_input.value)];
        const mask = parseInt(mask_input.value);
        const showColors = parseInt(color_input.value) > 0;

        let qr;        
        try {
            qr = cache_modules !== null ? cache_modules : QR.create_qr_code(version, mode, mask, message);
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
        const scale = Math.floor(420 / dim);

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
            const patterns = cache_patterns !== null ? cache_patterns : qr_patterns(version, mode);

            ctx.globalAlpha = 0.5;
            for (let i = 0; i < dim; i++) {
                for (let j = 0; j < dim; j++) {
                    ctx.fillStyle = colors[patterns[i][j]];
                    ctx.fillRect(40 + i * scale, 40 + j * scale, scale, scale);
                }
            }
            ctx.globalAlpha = 1;
        }
    }

    message_input.addEventListener('input', function() {
        cache_modules = null;
        refresh_canvas();
    });
    version_input.addEventListener('input', function() {
        cache_modules = null;
        cache_patterns = null;
        this.nextElementSibling.value = this.value;
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
    color_input.addEventListener('input', function() {
        this.nextElementSibling.value = ["No", "Yes"][parseInt(this.value)];
        refresh_canvas();
    });

    download_button.addEventListener('click', download_qr_code, false);

    refresh_canvas();
});