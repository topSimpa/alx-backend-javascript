/**
* @file 0-calcul: Calculate Number Module
* @author Simpa
*/

function calculateNumber(type, a, b) {
  if (['SUM', 'SUBTRACT', 'DIVIDE'].includes(type)) {
    a = Math.round(a);
    b = Math.round(b);
    if (type === 'SUM') {
      return a + b;
    } if (type === 'SUBTRACT') {
      return a - b;
    } if (type === 'DIVIDE' && b !== 0) {
      return a / b;
    }
  }
  return ('Error');
}

// console.log(calculateNumber(5, 2));

module.exports = calculateNumber;
