const readline = require('readline');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log('Welcome to Holberton School, what is your name?');
r.question('', (name) => {
  console.log(`Your name is: ${name}`);
  r.close();
});
