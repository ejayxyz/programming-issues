/* let readline = require('readline-sync');
let name = readline.question('What\'s your name?');
console.log('Hello ', name, '!');

while (true) {
  let key = readline.keyIn('Press a key, \'q\' to exit!');
  console.log('You pressed', key);
  if (key === 'q') {
    break;
  }
}
*/
let stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', (key) => {
  console.log('You pressed', key);
  if (key === 'q') {
    process.exit();
  }
});
