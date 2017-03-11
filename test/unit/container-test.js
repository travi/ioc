import {assert} from 'chai';
import any from '@travi/any';
import {register, use} from '../../src/container';

suite('ioc container', () => {
  it('should store dependency instances', () => {
    const dependency = any.simpleObject();
    const name = any.string();

    register(name, dependency);

    assert.equal(use(name), dependency);
  });
});
