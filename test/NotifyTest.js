/// <reference path="../typings/mocha/mocha.d.ts" />
var Notify = require('../lib/Notify');
describe('Notification', function () {
    var callback = function (message) { console.log(message); };
    var subject = new Notify.MessageNotification(callback);
    it('Should Invoke function past into constructor', function () {
        subject.trigger('');
    });
});
