/**
 * getStudentIdsSum -  returns an array of ids from a list of object
 *
 * @param {array} - array of object
 * @return {Number} - array of object id
 */

export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((sum, x) => sum + x.id, 0);
  }
  return 0;
}
