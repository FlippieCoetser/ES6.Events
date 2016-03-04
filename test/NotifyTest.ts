/// <reference path="../typings/mocha/mocha.d.ts" />
import chai = require('chai');
let should = chai.should();

import * as Notify from '../lib/Notify';

describe('Notification', () => {
    var Output: Notify.notification = new Notify.Notification();
    var Callback: Notify.callback;

            
    it('Should Invoke Callback when .emit', (done) => {
        Callback = (Message) => {
            if(!Message){
                console.log('Callback Invoked')
                done();
            }
        }
        Output.on('Test1', Callback);
        Output.emit('Test1');
    });
    
    it('Should Invoke Callback with Message when .emit', (done) => {
       Callback = (Message) => {
            if(Message){
                console.log('Callback Invoked with Parameter: ' + Message);
                done();
            }
        }
       Output.on('Test2', Callback);
       Output.emit('Test2','Message'); 
    })
    
    it('Should not Invoke Callback when .emit and listerner name not match', (done) => {
       Callback = (Message) => {
            if(!Message){
                throw new Error('Callback Invoked');
            }
        }
       Output.on('Test3', Callback);
       Output.emit('Test4');
       console.log('Callback NOT Invoked');
       done()
    })
})