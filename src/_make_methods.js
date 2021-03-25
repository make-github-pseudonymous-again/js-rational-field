import {__factorize__} from '@aureooms/js-prime';
import {$2, iadd1, eq0, gt1, divmod} from '@aureooms/js-number';
import {
	_add,
	_sub,
	_mul,
	_div,
	_pow,
	_cmp_no_bounds,
	_simplify,
	_digits,
	_stringify_digits,
	_parse_fraction,
	_parse_fixed_point,
} from '@aureooms/js-rational';

export default function _make_methods(domain) {
	const primefactors = new Map();
	const factorize = __factorize__($2, iadd1, eq0, gt1, divmod);
	const ufactors = (n) => {
		if (!primefactors.has(n)) primefactors.set(n, new Set(factorize(n)));
		return primefactors.get(n);
	};

	const add = _add(domain);
	const sub = _sub(domain);
	const mul = _mul(domain);
	const div = _div(domain);
	const pow = _pow(domain);
	const cmp = _cmp_no_bounds(domain);
	const simplify = _simplify(domain);

	const stringify_fraction = (x, d, b) =>
		domain.eq1(d)
			? domain.str(x, b)
			: `${domain.str(x, b)}/${domain.str(d, b)}`;

	const digits = _digits(domain);
	const stringify_digits = _stringify_digits(domain);
	const stringify_fixed_point = (x, d, b) =>
		stringify_digits(b, digits(b, ufactors(b), x, d));

	const parse_fraction = _parse_fraction(domain);
	const parse_fixed_point = _parse_fixed_point(domain);

	return {
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
	};
}
