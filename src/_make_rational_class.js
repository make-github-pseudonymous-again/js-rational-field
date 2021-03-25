import _make_methods from './_make_methods.js';

import {ZeroDivisionError} from '@aureooms/js-integer';

export default function _make_rational_class(domain, default_display_base) {
	const {
		add,
		sub,
		mul,
		div,
		pow,
		cmp,
		simplify,
		stringify_fixed_point,
		stringify_fraction,
		parse_fraction,
		parse_fixed_point,
	} = _make_methods(domain);

	class Rational {
		constructor(n, d) {
			this.n = n;
			this.d = d;
		}

		add(other) {
			const [a, b] = add(this.n, this.d, other.n, other.d);
			const [c, d] = simplify(a, b);
			return new Rational(c, d);
		}

		sub(other) {
			const [a, b] = sub(this.n, this.d, other.n, other.d);
			const [c, d] = simplify(a, b);
			return new Rational(c, d);
		}

		mul(other) {
			const [a, b] = mul(this.n, this.d, other.n, other.d);
			const [c, d] = simplify(a, b);
			return new Rational(c, d);
		}

		div(other) {
			if (other.isZero()) throw new ZeroDivisionError('Rational.div');
			const [a, b] = div(this.n, this.d, other.n, other.d);
			const [c, d] = simplify(a, b);
			return new Rational(c, d);
		}

		neg() {
			return new Rational(domain.neg(this.n), this.d);
		}

		isZero() {
			return domain.jz(this.n);
		}

		sign() {
			return domain.sgn(this.n);
		}

		inv() {
			if (domain.jz(this.n)) throw new ZeroDivisionError('Rational.inv');
			if (domain.sign(this.n) > 0) return new Rational(this.d, this.n);
			if (domain.sign(this.n) < 0)
				return new Rational(domain.neg(this.d), domain.neg(this.n));
		}

		pow(n) {
			if (!Number.isInteger(n))
				throw new Error('Rational.pow only accepts integer argument.');
			const [a, b] = pow(this.n, this.d, n);
			return new Rational(a, b);
		}

		cmp(other) {
			return cmp(this.n, this.d, other.n, other.d);
		}

		eq(other) {
			return this.cmp(other) === 0;
		}

		ne(other) {
			return this.cmp(other) !== 0;
		}

		gt(other) {
			return this.cmp(other) > 0;
		}

		lt(other) {
			return this.cmp(other) < 0;
		}

		ge(other) {
			return this.cmp(other) >= 0;
		}

		le(other) {
			return this.cmp(other) <= 0;
		}

		toString(base = default_display_base) {
			return stringify_fraction(this.n, this.d, base);
		}

		toNumber() {
			throw new Error('Rational.toNumber not implemented.');
		}

		toFixed(decimals = undefined, base = default_display_base) {
			const s = stringify_fixed_point(this.n, this.d, base);
			if (decimals === undefined) return s;

			const [left, right] = (s + '.').split('.');
			const [transient, repetend] = (right + '|0').split('|');

			const _right = (
				transient +
				new Array(Math.ceil(decimals / repetend.length) + 1).join(repetend)
			).slice(0, decimals);

			return left + '.' + _right.slice(0, decimals);
		}
	}

	Rational._parse_fraction = parse_fraction;
	Rational._parse_fixed_point = parse_fixed_point;
	Rational._simplify = simplify;

	return Rational;
}
