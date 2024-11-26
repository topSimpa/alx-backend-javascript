/**
* @file Reading a file synchronously with Node JS
* @author Simpa
*/

const { readFileSync } = require('fs');

function countStudents(path) {
/**
* attempts to read the file in path synchronously
* @param {string} path - address of file to be read
* @return {Null}
*/

  try {
    let count = 0;
    const courseCount = {};
    const file = readFileSync(path, { encoding: 'utf-8', flag: 'r' }).split('\n');
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
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      console.log(error);
    }
  }
}

module.exports = countStudents;
