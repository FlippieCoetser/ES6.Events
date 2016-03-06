/// <reference path="../typings/tsd.d.ts" />
import {Notification, notification} from "../lib/Notify";

import chai = require('chai');
import sinon = require('sinon');
import sinonChai = require('sinon-chai');
let should = chai.should();
chai.use(sinonChai);

describe('Notification', () => {
    let Output: notification = new Notification();
             
    it('Should Invoke Callback when .emit', () => {       
        var callback = sinon.spy();
        var event:string = 'name';
        Output.on(event, callback);
        Output.emit(event);
        callback.should.have.been.called;
    });
    
    it('Should Invoke Callback with Message when .emit', () => {
       var callback = sinon.spy();
       var event:string = 'name';
       Output.on(event, callback);
       Output.emit(event,'Message');
       callback.should.have.been.calledWith('Message'); 
    })
    
    it('Should not Invoke Callback when .emit and listerner name not match', () => {
       var callback = sinon.spy();
       var event:string = 'name';
       Output.on(event, callback);
       Output.emit(event + '2');
       callback.should.not.have.been.called;
    })
})