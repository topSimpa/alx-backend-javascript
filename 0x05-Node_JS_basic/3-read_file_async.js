const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        const er = new Error('Cannot load the database');
        reject(er);
      } else {
        const csStudent = [];
        const sweStudent = [];
        const dat = data.trim().split('\n');
        const students = dat.slice(1);

        for (const student of students) {
          const values = student.split(',');
          if (values[3] === 'CS') {
            csStudent.push(values[0]);
          } else {
            sweStudent.push(values[0]);
          }
        }

        console.log(`Number of students: ${students.length}`);
        console.log(`Number of students in CS: ${csStudent.length}. List: ${csStudent.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudent.length}. List: ${sweStudent.join(', ')}`);
        resolve();
      }
    });
  });
}

module.exports = countStudents;
