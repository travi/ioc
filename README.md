# ioc

extremely simple container that loosely aligns to IOC

<!--status-badges start -->

[![Node CI Workflow Status][github-actions-ci-badge]][github-actions-ci-link]
![SLSA Level 2][slsa-badge]

<!--status-badges end -->

<!--contribution-badges start -->

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Renovate][renovate-badge]][renovate-link]
[![semantic-release: angular][semantic-release-badge]][semantic-release-link]

<!--contribution-badges end -->

## Usage

<!--consumer-badges start -->

[![license](https://img.shields.io/github/license/travi/ioc.svg)](LICENSE)
[![npm][npm-badge]][npm-link]

<!--consumer-badges end -->

### Installation

```sh
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

[renovate-link]: https://renovatebot.com

[renovate-badge]: https://img.shields.io/badge/renovate-enabled-brightgreen.svg?logo=renovatebot

[github-actions-ci-link]: https://github.com/travi/ioc/actions?query=workflow%3A%22Node.js+CI%22+branch%3Amaster

[github-actions-ci-badge]: https://github.com/travi/ioc/workflows/Node.js%20CI/badge.svg

[semantic-release-link]: https://github.com/semantic-release/semantic-release

[semantic-release-badge]: https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release

[slsa-badge]: https://slsa.dev/images/gh-badge-level2.svg

[npm-link]: https://www.npmjs.com/package/@travi/ioc

[npm-badge]: https://img.shields.io/npm/v/@travi/ioc?logo=npm
