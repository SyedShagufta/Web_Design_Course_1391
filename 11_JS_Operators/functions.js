// Default and nom-parameterized functions

// prints name
function printName() {
  console.log("My name is shagufta");
}

printName();

// returns the name
function getName() {
  return "Shagufta";
}

myName = getName();
console.log("Hey, my name is " + myName);

// Parameterized functions
function add(num1, num2) {
  return num1 + num2;
}

console.log("Addition of 1 and 51 is " + add(1, 51));
