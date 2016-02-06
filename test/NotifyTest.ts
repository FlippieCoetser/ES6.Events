/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Notify from '../lib/Notify';

describe('Notification', () => {
    var callback: (message:string) => void = (message) => {console.log(message)};
    var subject: Notify.messageNotification = new Notify.MessageNotification(callback);
        
    it('Should Invoke function past into constructor', () => {
        subject.trigger('');
    });
})