/**
 * cleanSet - These returns a string
 *
 * @param {set} - set, to use
 * @param {String} - startString, the string to match
 * @returns {String}
 */

export default function (set, startString) {
  const len = startString.length;
  let str = '';
  for (let el of set) {
    if (startString === el.slice(0, len) && len > 0) {
      str += `${el.slice(len)}-`;
    }
  }
  str = str.slice(0, str.length - 1);
  return (str);
}
