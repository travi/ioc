import {add, use} from '../../src/container.js';
import {assert} from 'chai';
import any from '@travi/any';

suite('ioc container', () => {
    it('should store dependency instances', () => {
        const
            dependency = any.simpleObject(),
            name = any.string();

        add(name, dependency);

        assert.equal(use(name), dependency);
    });
});
