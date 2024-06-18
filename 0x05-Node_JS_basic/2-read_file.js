const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const studentNumber = data.split('\n').length - 2;

    console.log(`Number of students: ${studentNumber}`);
  } catch (err) {
    console.error('Cannot load the database');
  }
}
countStudents('database.csv');
