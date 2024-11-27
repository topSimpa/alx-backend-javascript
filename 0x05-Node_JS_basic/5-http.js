/**
* @file Creates a more complex HTTP server using Node's http module
* @author Simpa
*/

const { readFile } = require('fs');
const { createServer } = require('http');

const database = process.argv[2];

async function countStudents() {
  /**
    * attempts to read the file in path synchronously
    * @param {string} path - address of file to be read
    * @return {Null}
    */

  let count = 0;
  const courseCount = {};
  return new Promise((resolve, reject) => {
    readFile(database, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
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
        resolve([courseCount, count]);
      }
    });
  });
}

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents()
      .then(([courseCount, count]) => {
        res.write('This is the list of our students');
        res.write(`\nNumber of students: ${count}`);
        // eslint-disable-next-line guard-for-in
        for (const field in courseCount) {
          res.write(`\nNumber of students in ${field}: ${courseCount[field].count}. List: ${courseCount[field].names}`);
        }
        res.end();
      }).catch((err) => {
        res.end(err.message);
      });
  }
});

app.listen(1245);

module.exports = app;
