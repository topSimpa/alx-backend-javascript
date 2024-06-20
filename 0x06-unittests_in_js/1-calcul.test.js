const assert = require('assert');
const calcul = require('./1-calcul');

describe('rounding of a number', function () {
    describe('SUM', function () {
        it('correct output-no decimal', function () {
            assert.equal(calcul('SUM', 5, 6), 11)
        });

        it('correct output-decimal at 5', function () {
            assert.equal(calcul('SUM', 5.5, 5.5), 12)
        });

        it('correct output-decimal below 5', function () {
            assert.equal(calcul('SUM', 5.2, 5.4), 10)
        });

        it('correct output-decimal above and below', function () {
            assert.equal(calcul('SUM', 5.7, 5.1), 11)
        });
    });

    describe('SUBTRACT', function () {
        it('correct output-no decimal', function () {
            assert.equal(calcul('SUBTRACT', 5, 6), -1)
        });

        it('correct output-decimal at 5', function () {
            assert.equal(calcul('SUBTRACT', 5.5, 5.5), 0)
        });

        it('correct output-decimal below 5', function () {
            assert.equal(calcul('SUBTRACT', 5.2, 5.4), 0)
        });

        it('correct output-decimal above and below', function () {
            assert.equal(calcul('SUBTRACT', 5.7, 5.1), 1)
        });
    });

    describe('DIVIDE', function () {
        it('correct output-no decimal', function () {
            assert.equal(calcul('DIVIDE', 5, 6), 5/6)
        });

        it('correct output-decimal at 5', function () {
            assert.equal(calcul('DIVIDE', 5.5, 5.5), 1)
        });

        it('correct output-decimal below 5', function () {
            assert.equal(calcul('DIVIDE', 5.2, 5.4), 1)
        });

        it('correct output-decimal above and below', function () {
            assert.equal(calcul('DIVIDE', 5.7, 5.1), 6/5)
        });

        it('correct output-b approximately zero', function () {
            assert.equal(calcul('DIVIDE', 2.4, 0), 'Error')
        })
    });

    describe('Incorrect Type', function () {
        it('no-output', function () {
            assert.equal(calcul('incorrect', 2.0, 2), undefined)
        });
    });
});
