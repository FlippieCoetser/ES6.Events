/// <reference path="../typings/main.d.ts" />
import Greeter = require('../src/Node');

describe('Sayings Greeter', () => {
    it('should greet', () => {
        var greeter = new Greeter('John');
        console.log(greeter.greet());
    });
});