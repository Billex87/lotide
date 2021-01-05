const args2 = process.argv.slice(2);
let string = '';

for (let i = 0; i < args2.length; i++) {
  for (let j = (args2[i].length - 1); j >= 0; j--) {
    string += args2[i][j];
  }
  string += args2[i][0] + 'ay';
}

console.log(string.trim());