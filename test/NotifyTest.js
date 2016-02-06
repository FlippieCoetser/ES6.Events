/// <reference path="../typings/mocha/mocha.d.ts" />
var Notify = require('../lib/Notivy');
describe('Notify', function () {
    var subject;
    var callback;
    beforeEach(function () {
        callback = function (message) { console.log(message); };
        subject = new Notify.MessageEvent(callback);
    });
    describe('Notification', function () {
        it('should invoke function added to subject when triggered', function () {
            subject.trigger('trigger');
        });
    });
});
