# ioc

extremely simple container that loosely aligns to IOC

[![Build Status](https://img.shields.io/travis/travi/ioc.svg?style=flat)](https://travis-ci.org/travi/ioc)

[![npm](https://img.shields.io/npm/v/@travi/ioc.svg?maxAge=2592000)](https://www.npmjs.com/package/@travi/ioc)
[![license](https://img.shields.io/github/license/travi/ioc.svg)](LICENSE)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Installation

```
$ npm install @travi/ioc -S
```

## Usage

### Making an instance available through the container

```js
import {add} from '@travi/ioc';

const instance = factory();

add('instance-name', instance);
```

### Getting an instance from the container

```js
import {use} from '@travi/ioc';

const instance = use('instance-name');
```
