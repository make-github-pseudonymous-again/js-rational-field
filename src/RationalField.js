import {ValueError} from '@aureooms/js-error';
import {ZeroDivisionError} from '@aureooms/js-integer';
import _make_rational_class from './_make_rational_class';

export default class RationalField {
	constructor(name, domain, base) {
		this.name = name;
		this.domain = domain;
		this.base = base;
		this.element = _make_rational_class(domain, base);
	}

	from(n, d = undefined, base = undefined) {
		// Always returns a rational object.
		const Element = this.element;
		if (n.constructor.prototype === Array.prototype) {
			base = d;
			[n, d] = n;
		} else if (d === undefined) d = '1';

		if (n.constructor.prototype === String.prototype) {
			if (n.match('[\\.\\|]') !== null) {
				let [_n, _d] = Element._parse_fixed_point(base || this.base, n);
				[_n, _d] = Element._simplify(_n, _d);
				return new Element(_n, _d);
			}

			if (n.match('/') !== null) {
				let [_n, _d] = Element._parse_fraction(base || this.base, n);
				[_n, _d] = Element._simplify(_n, _d);
				return new Element(_n, _d);
			}

			if (Number.isInteger(d)) {
				base = d;
				d = '1';
			}
		}

		if (base !== undefined) {
			if (Number.isInteger(n) || Number.isInteger(d)) {
				throw new ValueError(
					'RationalField#from: using the base parameter does not make sense when passing a Integers.'
				);
			} else {
				base = this.base;
			}
		}

		let _n = this.domain.from(n, base);
		let _d = this.domain.from(d, base);
		const s = this.domain.sgn(_d);
		if (s === 0) throw new ZeroDivisionError('RationalField#from');
		if (s < 0) {
			_n = this.domain.neg(_n);
			_d = this.domain.neg(_d);
		}

		[_n, _d] = Element._simplify(_n, _d);
		return new Element(_n, _d);
	}

	get(...key) {
		// Returns Rational, Integer, BigInt, Number, depending...
		if (this.domain.has(...key)) return true;

		return this.from(...key);
	}

	has(...key) {
		if (key.length === 1) {
			const x = key[0];
			if (x instanceof this.element) return true;
		}

		if (this.domain.has(...key)) return true;

		try {
			this.get(...key);
			return true;
		} catch {
			return false;
		}
	}
}
