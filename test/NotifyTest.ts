/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Notify from '../lib/Notify';

describe('Notify', () => {
    var subject: Notify.messageNotification;
    var callback: (message:string) => void;
    
    beforeEach(function(){
        callback= (message) => {console.log(message)};
        subject = new Notify.MessageNotification(callback);
    });
    
    describe('Notification', () => {
        it('Invoke function past into constructor of Notify', () => {
            subject.trigger('Notifaction Executed');
        })
    });
})