const add = function(a = 0, b = 0) {
  return a + b;
};

const subtract = function(a = 0, b = 0) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, e) => sum + e, 0);
};

const multiply = function(array) {
  return array.reduce((current, previous) => current * previous);
};

const power = function(base, pow) {
  return Math.pow(base,pow);
};

const factorial = function(num) {
  if(num === 0) return 1;
  let total = 1;
  for(let i = num; i > 0; i--){
    total *= i;
  }
  return total;
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
