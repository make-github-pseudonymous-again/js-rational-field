:woman_farmer: [@aureooms/js-rational-field](https://aureooms.github.io/js-rational-field)
==

<p align="center">
<a href="https://commons.wikimedia.org/wiki/File:Number-systems.svg">
<img alt="Number systems" src="https://upload.wikimedia.org/wikipedia/commons/1/17/Number-systems.svg" width="600">
</a><br/>
<a href="https://commons.wikimedia.org/w/index.php?title=User:Mortalmoth">
User:Mortalmoth
</a>
/
<a href="https://en.wikipedia.org/wiki/Public_domain">Public Domain</a>
</p>

Rational field for JavaScript (ℚ).
Based on
[@aureooms/js-rational](https://aureooms.github.io/js-rational)
and
[@aureooms/js-integer](https://aureooms.github.io/js-integer).
See [docs](https://aureooms.github.io/js-rational-field).
Parent is [@aureooms/js-algorithms](https://github.com/aureooms/js-algorithms).

> [Try it on RunKit](https://runkit.com/aureooms/js-rational-field)!

> :warning: The code needs a ES2015+ polyfill to run (`regeneratorRuntime`),
> for instance [@babel/polyfill](https://babeljs.io/docs/usage/polyfill).

```js
QQ.from('0.1').add(QQ.from('0.2')).toFixed(); // 0.3
QQ.from(355,113).toFixed(); // 3.|1415929203539823008849557522123893805309734513274336283185840707964601769911504424778761061946902654867256637168
```

[![License](https://img.shields.io/github/license/aureooms/js-rational-field.svg)](https://raw.githubusercontent.com/aureooms/js-rational-field/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-rational-field.svg)](https://www.npmjs.org/package/@aureooms/js-rational-field)
[![Build](https://img.shields.io/travis/aureooms/js-rational-field/main.svg)](https://travis-ci.com/aureooms/js-rational-field/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-rational-field.svg)](https://david-dm.org/aureooms/js-rational-field)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-rational-field.svg)](https://david-dm.org/aureooms/js-rational-field?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-rational-field.svg)](https://github.com/aureooms/js-rational-field/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-rational-field.svg)](https://www.npmjs.org/package/@aureooms/js-rational-field)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-rational-field.svg)](https://codeclimate.com/github/aureooms/js-rational-field/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-rational-field.svg)](https://codeclimate.com/github/aureooms/js-rational-field/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-rational-field/main.svg)](https://codecov.io/gh/aureooms/js-rational-field)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-rational-field.svg)](https://codeclimate.com/github/aureooms/js-rational-field/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-rational-field/badge.svg)](https://aureooms.github.io/js-rational-field/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-rational-field)](https://bundlephobia.com/result?p=@aureooms/js-rational-field)
