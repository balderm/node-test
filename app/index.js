//app\index.js

const calc = require('./calc')
//const readline = require('readline')

//console.log(calc)
const numbersToAdd = [3, 4, 10, 2]
//
// var numbersToAdd = []
//
// const rl = readline.createInterface({
//   input:process.stdin,
//   output:process.stdout
// })
//
// console.log("Give me 4 numbers")
//
// for (i = 0; i < 4; i++) {
//
//   rl.question("give me the " +i+1+ " number: ", (answer) => {
//     numbersToAdd.push(answer)
//   })
// }
//
// rl.close();

const result = calc.sum(numbersToAdd)
const filteredResult = numbersToAdd.filter(calc.isBiggerThanTwo)
console.log(`The result is: ${result}`)

var filteredResultString = ""
filteredResult.forEach(function(entry) {
  filteredResultString += entry + " "
})

console.log(`The filtered result is: ${filteredResultString}`)
