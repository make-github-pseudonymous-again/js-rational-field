import test from 'ava';

import {ZZ} from '@aureooms/js-integer';
// Import ZZ from '@aureooms/js-integer-ring' ;
import QQ from '../../src';

test('1 ∈ ℚ', (t) => {
	t.true(QQ.has(1));
});
// Test( '-123^53 ∈ ℚ' , t => t.true(QQ.has(ZZ.from('-123').pown(53))) ) ;
test('-123^53 ∈ ℚ', (t) => {
	t.true(QQ.has(ZZ.from('-123').pown(53)));
});
test('2 / -4 = -1/2', (t) => {
	t.is('-1/2', QQ.from([2, -4]).toString());
});
test('3 / -12 = -1/4', (t) => {
	const x = QQ.from('-819238192381', '382972173981729381');
	t.is(
		'-1/4',
		x
			.mul(QQ.from(3))
			.div(x.mul(QQ.from(-12)))
			.toString()
	);
});

test('1/2 = 0.5', (t) => {
	t.is(QQ.from(1, 2).toFixed(), '0.5');
});
test('1/2 = 0.500...', (t) => {
	t.is(QQ.from(1, 2).toFixed(3), '0.500');
});
test('1/6 = 0.1|6', (t) => {
	t.is(QQ.from(1, 6).toFixed(), '0.1|6');
});
test('1/7 = 0.|142857', (t) => {
	t.is(QQ.from(1, 7).toFixed(), '0.|142857');
});
test('1/7 = 0.142...', (t) => {
	t.is(QQ.from(1, 7).toFixed(3), '0.142');
});
test('1/7 = 0.1428571428...', (t) => {
	t.is(QQ.from(1, 7).toFixed(10), '0.1428571428');
});
test('22/7 - 1/791 = 355/113', (t) => {
	t.is(QQ.from(22, 7).sub(QQ.from(1, 791)).toString(), '355/113');
});
test('0.|142857 = 1/7', (t) => {
	t.is(QQ.from('0.|142857').toString(), '1/7');
});
test('0.|1 = 1/9', (t) => {
	t.is(QQ.from('0.|1').toString(), '1/9');
});
test('0.|9 = 1', (t) => {
	t.is(QQ.from('0.|9').toString(), '1');
});
test('0.|1 (2) = 1 (10)', (t) => {
	t.is(QQ.from('0.|1', 2).toString(), '1');
});
test('0.|6 (7) = 1 (10)', (t) => {
	t.is(QQ.from('0.|6', 7).toString(), '1');
});
test('13.5|6 (7) = 136/7 (10)', (t) => {
	t.is(QQ.from('13.5|6', 7).toString(), '76/7');
});
test('13.|6 (7) = 11 (10)', (t) => {
	t.is(QQ.from('13.|6', 7).toString(), '11');
});
test('1/10 (2) = 1/2 (10)', (t) => {
	t.is(QQ.from('1/10', 2).toString(), '1/2');
});
