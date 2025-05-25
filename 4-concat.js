const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first word: ', (first) => {
  rl.question('Enter the second word: ', (second) => {
    console.log(`${first} is ${second}`);
    rl.close();
  });
});
