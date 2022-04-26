
export class ByteArray {
    constructor(size) {
        this.next_bit = 7;
        this.next_byte = 0;
        this.bytes = new Uint8Array(size)
    }

    bits_written() {
        return (this.next_byte * 8) + (7 - this.next_bit);
    }

    write_bit(bit) {
        this.bytes[this.next_byte] |= bit << this.next_bit;
        this.next_bit--;
        if (this.next_bit < 0) {
            this.next_bit = 7;
            this.next_byte++;
        }
    }

    write_bits(bits, n) {
        for (let i = n - 1; i >= 0; i--) {
            this.write_bit((bits >>> i) & 1);
        }
    }

    get_bytes() {
        return this.bytes;
    }
}