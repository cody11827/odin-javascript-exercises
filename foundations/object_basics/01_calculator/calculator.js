const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(numbers) {
	return numbers.reduce((total,current) => total+current,0)
};

const multiply = function(numbers) {
	return numbers.reduce((total,current) => total*current)
};

const power = function(a,b) {
	return a^b;
};

const factorial = function(number) {
	if (number <= 2){
    return number;
  }
  let total = 1;
  for(let current = 2; current < number;current++ ){
    total *=current;
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
