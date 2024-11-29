/**
* @file 1-calcul.test.js: Test for 2-calcul calculateNumber function using chai
* @author Simpa
*/

const calculateNumber = require('./2-calcul');
const {expect} = require('chai')

describe('rounding of a number', () => {
  const op = 'SUM';
  it('correct output-no decimal', () => {
    expect(calculateNumber(op, 5, 6)).to.equal(11)
  });

  it('correct output-decimal at 5', () => {
    expect(calculateNumber(op, 5.5, 5.5)).to.equal(12);
  });

  it('correct output-decimal below 5', () => {
    expect(calculateNumber(op, 5.2, 5.4)).to.equal(10);
  });

  it('correct output-decimal above and below', () => {
    expect(calculateNumber(op, 5.7, 5.1)).to.equal(11);
  });
});

describe('subtraction Operation', () => {
  const op = 'SUBTRACT';
  it('subtract two wholenumber', () => {
    expect((calculateNumber(op, 3, 2))).to.equal(1);
  });

  it('subtract a whole number, from round down', () => {
    expect(calculateNumber(op, 3.3, 1)).to.equal(2);
  });

  it('subtract a whole number from roundup', () => {
    expect(calculateNumber(op, 5.7, 2)).to.equal(4);
  });

  it('subtract two rounddown', () => {
    expect(calculateNumber(op, 5.2, 2.3)).to.equal(3);
  });

  it('subtract two roundup', () => {
    expect(calculateNumber(op, 7.5, 2.5)).to.equal(5);
  });

  it('subtract a rounddown from roundUp', () => {
    expect(calculateNumber(op, 7.5, 2.3)).to.equal(6);
  });
});

describe('division Operation', () => {
  const op = 'DIVIDE';
  it('dIVIDE two wholenumber', () => {
    expect(calculateNumber(op, 3, 2), 1.5);
  });

  it('dIVIDE a whole number, from round down', () => {
    expect(calculateNumber(op, 3.3, 1)).to.equal(3);
  });

  it('dIVIDE a whole number from roundup', () => {
    expect(calculateNumber(op, 5.7, 2)).to.equal(3);
  });

  it('dIVIDE two rounddown', () => {
    expect(calculateNumber(op, 5.2, 2.3)).to.equal(2.5);
  });

  it('dIVIDE two roundup', () => {
    expect(calculateNumber(op, 7.5, 2.5)).to.equal(8 / 3);
  });

  it('dIVIDE rounddown by roundUp', () => {
    expect(calculateNumber(op, 7.5, 2.3)).to.equal(4);
  });

  it('zerro Division Error', () => {
    expect(calculateNumber(op, 2, 0.3)).to.equals('Error');
  });
});

describe('wrong type test', () => {
  it('error because type is wrong', () => {
    expect(calculateNumber('SUBT', 4, 2)).to.equals('Error');
  });
});
