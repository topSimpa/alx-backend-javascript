/**
* @file 0-calcul.test.js: Test for 0-calcul function
* @author Simpa
*/

import  assert from 'assert';
import calculateNumber from './0-calcul';

assert.equal(calculateNumber(2, 3), 5);
assert.equal(calculateNumber(2.4, 5.2), 7);
assert.equal(calculateNumber(2.3, 5.7), 8);
assert.equal(calculateNumber(2.7, 8.5), 12);
assert.equal(calculateNumber(3, 2.3), 5);
assert.equal(calculateNumber(3, 4.7), 8);
