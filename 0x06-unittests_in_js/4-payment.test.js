/**
* @file 3-payments testing
* @author Simpa
*/


const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment')
//const utils = new Utils();

const sinon = require('sinon');
const {expect} = require('chai')
let spy, spyConsole;


describe('sendPaymentRequestToApi', function() {
    before(function () {
        spy = sinon.stub(Utils, 'calculateNumber').callsFake(() => {
            return 10;
        })
        spyConsole = sinon.spy(console, 'log')
        sendPaymentRequestToApi(100, 20);
        
    });

    after( function () {
        spy.restore();
    })
    
    it("test if console.log was called", function() {    
        expect(spyConsole.calledWith("The total is: 10")).to.be.true;
    })
    
    it("test what parameters calculateNumber was called with", function() {
        expect(spy.calledWith("SUM", 100, 20)).to.be.true;
    })
     
    
})