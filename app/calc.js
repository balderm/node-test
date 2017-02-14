//app/calc.js

exports.sum = function sum (arr) {
 return arr.reduce(function(a, b) {
   return a+b
 }, 0)
}

exports.isBiggerThanTwo = function isBiggerThanTwo (num) {
  return num > 2
}

//module.exports.sum =  sum
