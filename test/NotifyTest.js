/// <reference path="../typings/mocha/mocha.d.ts" />
var Notify = require('../lib/Notify');
describe('Notification', function () {
    var Output = new Notify.Notification();
    var Callback;
    it('Should Invoke Callback when .emit', function (done) {
        Callback = function (Message) {
            if (!Message) {
                console.log('Callback Invoked');
                done();
            }
        };
        Output.on('Test1', Callback);
        Output.emit('Test1');
    });
    it('Should Invoke Callback with Message when .emit', function (done) {
        Callback = function (Message) {
            if (Message) {
                console.log('Callback Invoked with Parameter: ' + Message);
                done();
            }
        };
        Output.on('Test2', Callback);
        Output.emit('Test2', 'Message');
    });
    it('Should not Invoke Callback when .emit and listerner name not match', function (done) {
        Callback = function (Message) {
            if (!Message) {
                throw new Error('Callback Invoked');
            }
        };
        Output.on('Test3', Callback);
        Output.emit('Test4');
        console.log('Callback NOT Invoked');
        done();
    });
});
