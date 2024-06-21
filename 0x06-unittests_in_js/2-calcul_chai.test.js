const calcul = require('./2-calcul_chai');
var expect;

describe('rounding of a number', function () {

   before (async function() {
       const Chai = await import('chai');
       expect = Chai.expect;
    });

    describe('SUM', function () {
        it('correct output-no decimal', function () {
            expect(calcul('SUM', 5, 6)).to.equal(11)
        });

        it('correct output-decimal at 5', function () {
            expect(calcul('SUM', 5.5, 5.5)).to.equal(12)
        });

        it('correct output-decimal below 5', function () {
            expect(calcul('SUM', 5.2, 5.4)).to.equal(10)
        });

        it('correct output-decimal above and below', function () {
            expect(calcul('SUM', 5.7, 5.1)).to.equal(11)
        });
    });

    describe('SUBTRACT', function () {
        it('correct output-no decimal', function () {
            expect(calcul('SUBTRACT', 5, 6)).to.equal(-1)
        });

        it('correct output-decimal at 5', function () {
            expect(calcul('SUBTRACT', 5.5, 5.5)).to.equal(0)
        });

        it('correct output-decimal below 5', function () {
            expect(calcul('SUBTRACT', 5.2, 5.4)).to.equal(0)
        });

        it('correct output-decimal above and below', function () {
            expect(calcul('SUBTRACT', 5.7, 5.1)).to.equal(1)
        });
    });

    describe('DIVIDE', function () {
        it('correct output-no decimal', function () {
            expect(calcul('DIVIDE', 5, 6)).to.equal(5/6)
        });

        it('correct output-decimal at 5', function () {
            expect(calcul('DIVIDE', 5.5, 5.5)).to.equal(1)
        });

        it('correct output-decimal below 5', function () {
            expect(calcul('DIVIDE', 5.2, 5.4)).to.equal(1)
        });

        it('correct output-decimal above and below', function () {
            expect(calcul('DIVIDE', 5.7, 5.1)).to.equal(6/5)
        });

        it('correct output-b approximately zero', function () {
            expect(calcul('DIVIDE', 2.4, 0)).to.equal('Error')
        })
    });

    describe('Incorrect Type', function () {
        it('no-output', function () {
            expect(calcul('incorrect', 2.0, 2)).to.equal(undefined)
        });
    });
});
