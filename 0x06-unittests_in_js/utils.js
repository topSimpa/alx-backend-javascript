/**
* @file Utility Module
* @author Simpa
*/


class Utils {
    static calculateNumber(type, a, b) {
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
}

module.exports = Utils;