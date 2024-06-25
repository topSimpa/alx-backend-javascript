const fs = require('fs');

function readDatabase(filePath) {
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
        csStudent.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        sweStudent.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
        const studentData = { CS: csStudent, SWE: sweStudent };

        resolve(studentData);
      }
    });
  });
}

module.exports = readDatabase;
