const fs = require('fs');

function countStudents(filePath) {
  try {
    let data = fs.readFileSync(filePath, 'utf8');
    const csStudent = [];
    const sweStudent = [];
    data = data.trim().split('\n');
    const students = data.slice(1);

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
  } catch (err) {
    throw new Error('Cannot Load the database');
  }
}

module.exports = countStudents;
