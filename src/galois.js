export function degree(p) {
    let d = -1;
    while (p != 0) {
        d++;
        p = p >>> 1;
    }
    return d;
}

export function modulo(a, b) {
    let degree_a = degree(a);
    const degree_b = degree(b);
    while (degree_a >= degree_b) {
        a = a ^ (b << (degree_a - degree_b));
        degree_a = degree(a);
    }
    return a;
}

export function multiply(a, b) {
    while (b > 0) {
        if ((b & 1) == 1) {
            a = a ^ 1;
        }
        b = b >>> 1;
        a = a << 1;
    }
}

export class GaloisField {
    constructor(irreducible) {
        let cardinality = 1 << degree(irreducible);
        this.modulus = cardinality - 1;
        this.exps = new Array(this.modulus);
        this.logs = new Array(this.modulus + 1);

        let a = 1;
        // Initialize the lookup tables
        for (let i = 0; i < this.modulus; i++) {
            this.exps[i] = a;
            this.logs[a] = i;
            a = a << 1;
            if (a & cardinality) {
                a = a ^ irreducible;
            }
        }
    }

    add(a, b) {
        return a ^ b;
    }

    subtract(a, b) {
        return a ^ b;
    }

    mult(a, b) {
        return this.exps[(this.logs[a] + this.logs[b]) % this.modulus];
    }

    inverse(a) {
        return this.exps[this.modulus - this.logs[a]];
    }

    divide(a, b) {
        return this.exps[(this.logs[a] + this.modulus - this.logs[b]) % this.modulus];
    }

    power(a, n) {
        let l = this.logs[a];
        if (n < 0) {
            l -= this.modulus;
        }
        return this.exps[(l * n) % this.modulus];
    }
}

export const gf256 = new GaloisField(0b100011101);

export class PolynomialRing {
    constructor(field) {
        this.field = field;
    }

    mult(a, b) {
        const res = new Array(a.length + b.length - 1);
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                res[i + j] = this.field.add(res[i + j], this.field.mult(a[i], b[j]));
            }
        }
        return res;
    }

    remainder(a, b) {
        if (b.length == 0) {
            throw new Error("Division by zero");
        }
        let n = 0;
        const target_n = a.length - b.length + 1;
        while (n < target_n) {
            let d = this.field.divide(a[n], b[0]);
            for (let i = 1; i < b.length; i++) {
                a[n + i] = this.field.subtract(a[n + i], this.field.mult(b[i], d));
            }
            n += 1;
        }

        return a.slice(target_n);
    }

    generator(n) {
        let res = [1];
        for (let i = 0; i < n; i++) {
            res = this.mult(
                res,
                [1, this.field.power(2, i)]);
        }
        return res;
    }
}