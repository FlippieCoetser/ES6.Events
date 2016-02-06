/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Notify from '../lib/Notivy';

describe('Notify', () => {
    var subject: Nofity.messageNotification;
    var callback: (message:string) => void;
    
    beforeEach(function(){
        callback= (message) => {console.log(message)};
        subject = new Notify.MessageEvent(callback);
    });
    
    describe('Notification', () => {
        it('should invoke function added to subject when triggered', () => {
            subject.trigger('trigger');
        })
    });
})