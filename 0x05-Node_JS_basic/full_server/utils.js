/**
* @file Server Utilities
* @author Simpa
*/

import { readFile } from 'fs';

export default function readDatabase(path) {
  /**
    * read database for students firstnames
    * @param {string} path - path to the database file
    * @return {Object} object containing field as key and list of students
    */

  const courseCount = {};
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('Cannot load the database'));
        } else {
          console.log(err);
        }
      } else if (data) {
        const file = data.split('\n');
        file.forEach((line, ind) => {
          if (line !== '' && ind !== 0) {
            const linePart = line.split(',');
            if (linePart[3] in courseCount) {
              courseCount[linePart[3]].push(` ${linePart[0]}`);
            } else {
              courseCount[linePart[3]] = [linePart[0]];
            }
          }
        });
        resolve(courseCount);
      }
    });
  });
}
