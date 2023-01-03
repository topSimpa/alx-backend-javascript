/* eslint no-param-reassign: "error" */
/**
 * updateStudentGradeByCity -  returns an array of ids from a list of object
 *
 * @param {array} - arr array of object
 * @param {string} - city
 * @param {array} - newGrades grades obj of student
 * @return {array} - array of object id
 */

export default function updateStudentGradeByCity(arr, city, grades) {
  let upArr = [];
  if (Array.isArray(arr)) {
    const newArr = arr.filter((x) => x.location === city);
    upArr = newArr.map((x) => {
      const sameId = grades.filter((g) => g.studentId === x.id);
      if (sameId.length === 0) {
        x.grade = 'N/A';
      } else {
        x.grade = sameId[0].grade;
      }
      return x;
    });
  }
  return upArr;
}
