/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Events from '../lib/Events';

describe('Events', () => {
    var subject: Events.IMessageEvent;
    
    beforeEach(function(){
        subject = new Events.Event();
    });
    
    describe('Event', () => {
        it('should invoke function added to subject when triggered', () => {
            subject.add((message) => {console.log(message)});
            subject.trigger('trigger');
        })
    });
})