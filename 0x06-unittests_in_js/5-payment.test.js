/**
* @file 5-payment.js testing
* @author Simpa
*/


const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment')
//const utils = new Utils();

const sinon = require('sinon');
const {expect} = require('chai')



describe('sendPaymentRequestToApi', function() {
    let spy;
    let spyConsole;

    this.beforeEach(function () {
        spy = sinon.spy(Utils, 'calculateNumber')
        spyConsole = sinon.spy(console, 'log')
        
    });

    this.afterEach( function () {
        spy.restore();
        spyConsole.restore()
    })
    
    it("test functionalities is correct (100, 20)", function() { 
        sendPaymentRequestToApi(100, 20)
        expect(spy.calledOnce).to.be.true   
        expect(spyConsole.calledWith("The total is: 120")).to.be.true;
    })
    
    it("test functionalities correctness (10, 10)", function() {
        sendPaymentRequestToApi(10, 10)
        expect(spy.calledOnce).to.be.true
        expect(spyConsole.calledWith("The total is: 20"))
    })
     
    
})
