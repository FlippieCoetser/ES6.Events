/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Events from '../lib/Events';

describe('Events', () => {
    var subject: Events.messageEvent;
    var callback: (message:string) => void;
    
    beforeEach(function(){
        callback= (message) => {console.log(message)};
        subject = new Events.MessageEvent(callback);
    });
    
    describe('Event', () => {
        it('should invoke function added to subject when triggered', () => {
            subject.trigger('trigger');
        })
    });
})