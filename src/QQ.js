// Import ZZ from '@aureooms/js-integer-ring' ;
import {_chr} from '@aureooms/js-integer-big-endian';
import {ZZ, DEFAULT_DISPLAY_BASE} from '@aureooms/js-integer';
import RationalField from './RationalField';

const domain = {
	name: 'ZZ',
	add: (a, b) => a.add(b),
	sub: (a, b) => a.sub(b),
	mul: (a, b) => a.mul(b),
	muln: (a, b) => a.muln(b),
	div: (a, b) => a.div(b),
	reg: (x, base) => ZZ.from(x, base),
	from: (x, base) => ZZ.from(x, base),
	str: (x, base) => x.toString(base),
	jz: (x) => x.iszero(),
	eq1: (x) => x.isone(),
	lt0: (x) => x.sign() < 0,
	gt1: (x) => x.gtn(1),
	cmp: (a, b) => a.cmp(b),
	eq: (a, b) => a.eq(b),
	sgn: (x) => x.sign(),
	abs: (x) => x.abs(),
	neg: (x) => x.opposite(),
	divmod: (a, b) => a.divmod(b),
	divmodn: (a, b) => a.divmodn(b),
	egcd: (a, b) => {
		const {u, v} = a.egcd(b);
		return {
			u: u.iabs(),
			v: v.iabs()
		};
	},
	pown: (x, n) => x.pown(n),
	_chr,
	has: (...args) => ZZ.has(...args)
};

export default new RationalField(
	'Rational Field',
	domain,
	DEFAULT_DISPLAY_BASE
);
