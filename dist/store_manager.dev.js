"use strict";

// import * as readLine from 'node:readline';
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  var increase = parseInt(rl.question('geef een rond getal ', answer), 10);
  var prices = [98.99, 15.2, 20, 1026]; //your code goes here

  return prices + increase;
}

main();