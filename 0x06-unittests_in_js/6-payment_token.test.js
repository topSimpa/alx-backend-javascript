/**
* @file getPaymentTokenFromAPI testing
* @author Simpa
*/

const getPaymentTokenFromAPI = require('./6-payment_token');
const {expect} = require('chai');
const sinon = require('sinon');


describe("getPaymentTokenFromAPI", function () {

    it("testing the happy promise", function (done) {
        getPaymentTokenFromAPI(true).then((data) => {
            expect(data).to.have.property('data', 'Successful response from the API')
            done();
        }).catch(() => {
            done(new Error('it should have been resolved'))
        })  
       
    });

    it ("testing the reject promise", function (done) {
        getPaymentTokenFromAPI(false).then((data) => {
            expect(data).to.be.null;
            done(new Error('it should have been rejected'))
        }).catch(() => {
            done();
        })
    })
   
});