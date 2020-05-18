# ioc

extremely simple container that loosely aligns to IOC

<!--status-badges start -->

[![Build Status](https://img.shields.io/travis/com/travi/ioc.svg?style=flat)](https://travis-ci.com/travi/ioc)

<!--status-badges end -->

<!--contribution-badges start -->

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Greenkeeper badge](https://badges.greenkeeper.io/travi/ioc.svg)](https://greenkeeper.io/)

<!--contribution-badges end -->

## Usage

<!--consumer-badges start -->

[![npm](https://img.shields.io/npm/v/@travi/ioc.svg?maxAge=2592000)](https://www.npmjs.com/package/@travi/ioc)
[![license](https://img.shields.io/github/license/travi/ioc.svg)](LICENSE)

<!--consumer-badges end -->

### Installation

```
$ npm install @travi/ioc -S
```

### Making an instance available through the container

```js
import {register} from '@travi/ioc';

const instance = factory();

add('instance-name', instance);
```

### Getting an instance from the container

```js
import {use} from '@travi/ioc';

const instance = use('instance-name');
```
