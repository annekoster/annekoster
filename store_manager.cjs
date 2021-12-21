// import * as readLine from 'node:readline';

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
let answer = rl.question();


function main() {
    var increase = parseInt(rl.question('geef een rond getal ',(answer)),10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    return prices + increase;
}

main();

