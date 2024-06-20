const assert = require('assert');
const calcul = require('./0-calcul');

describe('rounding of a number', function () {
    it('correct output-no decimal', function () {
        assert.equal(calcul(5, 6), 11)
    });

    it('correct output-decimal at 5', function () {
        assert.equal(calcul(5.5, 5.5), 12)
    });

    it('correct output-decimal below 5', function () {
        assert.equal(calcul(5.2, 5.4), 10)
    });

    it('correct output-decimal above and below', function () {
        assert.equal(calcul(5.7, 5.1), 11)
    });
});

