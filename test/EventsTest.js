/// <reference path="../typings/mocha/mocha.d.ts" />
var Events = require('../lib/Events');
describe('Events', function () {
    var subject;
    var callback;
    beforeEach(function () {
        callback = function (message) { console.log(message); };
        subject = new Events.MessageEvent(callback);
    });
    describe('Event', function () {
        it('should invoke function added to subject when triggered', function () {
            subject.trigger('trigger');
        });
    });
});
