/**
* @file Using process stdin
* @author Simpa
*/

process.stdin.setEncoding('utf-8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
if (process.stdin.isTTY) {
  process.stdin.on('readable', () => {
    const name = process.stdin.read();
    process.stdout.write(`Your name is: ${name}`);
  });
} else {
  process.stdin.on('data', (chunk) => {
    process.stdout.write(`Your name is: ${chunk}`);
  });
}

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
