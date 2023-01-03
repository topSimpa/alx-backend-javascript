/**
 * hasValuesFromArray - returns a boolean if all the elements in the array exist within the set
 *
 * @param {set} - set, set object
 * @param {array} - arr, the array
 * @returns {boolean}
 */

export default function (set, arr) {
  let count = 0;
  for (const el of arr) {
    if (set.has(el)) {
      count += 1;
    }
  }
  return (count === arr.length);
}
