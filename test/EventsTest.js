/// <reference path="../typings/mocha/mocha.d.ts" />
var Events = require('../lib/Events');
describe('Events', function () {
    var subject;
    beforeEach(function () {
        subject = new Events.Event();
    });
    describe('Event', function () {
        it('should invoke function added to subject when triggered', function () {
            subject.add(function (message) { console.log(message); });
            subject.trigger('trigger');
        });
    });
});
