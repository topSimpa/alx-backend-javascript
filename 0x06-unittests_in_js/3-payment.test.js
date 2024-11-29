/**
* @file 3-payments testing
* @author Simpa
*/


const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')
//const utils = new Utils();

const sinon = require('sinon');
const {expect} = require('chai')
let spy;


describe('sendPaymentRequestToApi', function() {
    before(function () {
        spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
    })

    after( function () {
        spy.restore();
    })
    
    it("test if calculateNumber was called", function() {    
        expect(spy.calledOnce).to.be.true;
    })
    
    it("test what parameters calculateNumber was called with", function() {
        expect(spy.calledWith("SUM", 100, 20)).to.be.true;
    })
     
    
})