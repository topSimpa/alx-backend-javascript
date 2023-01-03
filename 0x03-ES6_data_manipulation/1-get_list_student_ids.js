/**
 * getListStudentIds -  returns an array of ids from a list of object
 *
 * @param {array} - array of object
 * @return {array} - array of object id
 */

export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((x) => x.id);
  }
  return [];
}
