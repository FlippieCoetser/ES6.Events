/// <reference path="../typings/mocha/mocha.d.ts" />
var Notify = require('../lib/Notify');
describe('Notification', function () {
    var Output = new Notify.Notification();
    var Callback;
    it('Should Invoke Callback when Triggered', function (done) {
        Callback = function (Message) {
            if (!Message) {
                console.log('Callback Triggered');
                done();
            }
        };
        Output.bind(Callback);
        Output.trigger();
    });
    it('Should Invole Callback with Message', function (done) {
        Callback = function (Message) {
            if (Message) {
                console.log('Callback Triggered + Paremter: ' + Message);
                done();
            }
        };
        Output.bind(Callback);
        Output.trigger('Message');
    });
});
