/**
* @file 3-payment: a payment test function
* @author Simpa
*/


const Utils = require('./utils');


function sendPaymentRequestToApi(totalAmount, totalShipping) {
 console.log(`The toal is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`)   
}

module.exports = sendPaymentRequestToApi