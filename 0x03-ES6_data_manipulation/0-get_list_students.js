/**
 * getListStudents - returns an array of objects
 *
 * @param {void}
 * @returns {array} containig three objects
 */

export default function getListStudents() {
  const list = [{
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  },
  {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  },
  {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco',
  }];

  return list;
}
