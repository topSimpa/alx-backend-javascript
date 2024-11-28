/**
* @file 0-calcul.test.js: Test for 0-calcul function
* @author Simpa
*/

import assert from 'assert';
import calculateNumber from './0-calcul';

describe('rounding of a number', () => {
  it('correct output-no decimal', () => {
    assert.equal(calculateNumber(5, 6), 11);
  });

  it('correct output-decimal at 5', () => {
    assert.equal(calculateNumber(5.5, 5.5), 12);
  });

  it('correct output-decimal below 5', () => {
    assert.equal(calculateNumber(5.2, 5.4), 10);
  });

  it('correct output-decimal above and below', () => {
    assert.equal(calculateNumber(5.7, 5.1), 11);
  });
});
