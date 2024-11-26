/**
* @file 4-http.js: Create a small HTTP server using Node http module
* @author Simpa <optionalEmail@example.com>
*/

const { createServer } = require('http');

const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
