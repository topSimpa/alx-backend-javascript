/**
* @file Reading a file synchronously with Node JS
* @author Simpa
*/

const { readFile } = require('fs');

async function countStudents(path) {
/**
* attempts to read the file in path synchronously
* @param {string} path - address of file to be read
* @return {Null}
*/

  let count = 0;
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
            count += 1;
            const linePart = line.split(',');
            if (linePart[3] in courseCount) {
              courseCount[linePart[3]].count += 1;
              courseCount[linePart[3]].names.push(` ${linePart[0]}`);
            } else {
              courseCount[linePart[3]] = {};
              courseCount[linePart[3]].count = 1;
              courseCount[linePart[3]].names = [linePart[0]];
            }
          }
        });
        console.log(`Number of students: ${count}`);
        // eslint-disable-next-line guard-for-in
        for (const field in courseCount) {
          console.log(`Number of students in ${field}: ${courseCount[field].count}. List: ${courseCount[field].names}`);
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
