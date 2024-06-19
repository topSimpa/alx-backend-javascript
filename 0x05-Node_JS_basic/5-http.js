const http = require('http');
const fs = require('fs').promises;

function studentsInfo(filepath) {
  return fs.readFile(filepath, 'utf8')
    .then((data) => {
      const students = data.trim().split('\n').slice(1);
      console.log(students);
      const csStudent = [];
      const sweStudent = [];

      for (const student of students) {
        const values = student.split(',');
        if (values[3] === 'CS') {
          csStudent.push(values[0]);
        } else {
          sweStudent.push(values[0]);
        }
      }
      return { totNum: students.length, cs: csStudent, swe: sweStudent };
    })
    .catch((error) => {
      throw new Error(`Error reading file: ${error.message}`);
    });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    studentsInfo(process.argv[2])
      .then((info) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${info.totNum}\n`);
        res.write(`Number of students in CS: ${info.cs.length}. List: ${info.cs.join(', ')}\n`);
        res.write(`Number of students in SWE: ${info.swe.length}. List: ${info.swe.join(', ')}`);
        res.end();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}).listen(1245);

module.exports = app;
