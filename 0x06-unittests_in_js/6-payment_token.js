/**
* @file 6-payment_token: holds the getPaymentTokenFromAPI
* @author Simpa
*/


function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({data: 'Successful response from the API'})
        } else {
            reject()
        }
    })
}

module.exports = getPaymentTokenFromAPI;