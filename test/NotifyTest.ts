/// <reference path="../typings/mocha/mocha.d.ts" />
import * as Notify from '../lib/Notify';

describe('Notification', () => {
    var Output: Notify.notification = new Notify.Notification();
    var Callback: Notify.callback;

            
    it('Should Invoke Callback when Triggered', (done) => {
        Callback = (Message) => {
            if(!Message){
                console.log('Callback Triggered')
                done();
            }
        }
        Output.bind(Callback);
        Output.trigger();
    });
    
    it('Should Invole Callback with Message', (done) => {
       Callback = (Message) => {
            if(Message){
                console.log('Callback Triggered + Paremter: ' + Message);
                done();
            }
        }
       Output.bind(Callback);
       Output.trigger('Message'); 
    })
})