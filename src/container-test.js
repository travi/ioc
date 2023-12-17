import {assert} from 'chai';
import any from '@travi/any';

import {register, use} from './container.js';

suite('ioc container', () => {
  test('that dependencies are stored and are retrievable by name', () => {
    const dependency = any.simpleObject();
    const name = any.string();

    register(name, dependency);

    assert.equal(use(name), dependency);
  });

  test('that an error is throw when attemting to retrieve a dependency that has not been registered', () => {
    assert.throws(() => use(any.word()), 'Attempted to use a dependency that has not been registered');
  });
});
