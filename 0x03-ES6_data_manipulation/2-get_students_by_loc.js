/**
 * getStudentsByLocation -  returns an array of ids from a list of object
 *
 * @param {array} - array of object
 * @param {string} - city to match
 * @return {array} - array of object id
 */

export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((x) => x.location === city);
  }
  return [];
}
