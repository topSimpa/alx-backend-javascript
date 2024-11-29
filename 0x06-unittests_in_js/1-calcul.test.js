/**
* @file 1-calcul.test.js: Test for 1-calcul calculateNumber function
* @author Simpa
*/

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('rounding of a number', () => {
  const op = 'SUM';
  it('correct output-no decimal', () => {
    assert.equal(calculateNumber(op, 5, 6), 11);
  });

  it('correct output-decimal at 5', () => {
    assert.equal(calculateNumber(op, 5.5, 5.5), 12);
  });

  it('correct output-decimal below 5', () => {
    assert.equal(calculateNumber(op, 5.2, 5.4), 10);
  });

  it('correct output-decimal above and below', () => {
    assert.equal(calculateNumber(op, 5.7, 5.1), 11);
  });
});

describe('subtraction Operation', () => {
  const op = 'SUBTRACT';
  it('subtract two wholenumber', () => {
    assert.equal(calculateNumber(op, 3, 2), 1);
  });

  it('subtract a whole number, from round down', () => {
    assert.equal(calculateNumber(op, 3.3, 1), 2);
  });

  it('subtract a whole number from roundup', () => {
    assert.equal(calculateNumber(op, 5.7, 2), 4);
  });

  it('subtract two rounddown', () => {
    assert.equal(calculateNumber(op, 5.2, 2.3), 3);
  });

  it('subtract two roundup', () => {
    assert.equal(calculateNumber(op, 7.5, 2.5), 5);
  });

  it('subtract a rounddown from roundUp', () => {
    assert.equal(calculateNumber(op, 7.5, 2.3), 6);
  });
});

describe('division Operation', () => {
  const op = 'DIVIDE';
  it('dIVIDE two wholenumber', () => {
    assert.equal(calculateNumber(op, 3, 2), 1.5);
  });

  it('dIVIDE a whole number, from round down', () => {
    assert.equal(calculateNumber(op, 3.3, 1), 3);
  });

  it('dIVIDE a whole number from roundup', () => {
    assert.equal(calculateNumber(op, 5.7, 2), 3);
  });

  it('dIVIDE two rounddown', () => {
    assert.equal(calculateNumber(op, 5.2, 2.3), 2.5);
  });

  it('dIVIDE two roundup', () => {
    assert.equal(calculateNumber(op, 7.5, 2.5), 8 / 3);
  });

  it('dIVIDE rounddown by roundUp', () => {
    assert.equal(calculateNumber(op, 7.5, 2.3), 4);
  });

  it('zerro Division Error', () => {
    assert.equal(calculateNumber(op, 2, 0.3), 'Error');
  });
});

describe('wrong type test', () => {
  it('error because type is wrong', () => {
    assert.equal(calculateNumber('SUBT', 4, 2), 'Error');
  });
});
