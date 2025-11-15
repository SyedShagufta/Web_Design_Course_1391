const char = 'N';

// Get ASCII value using charCodeAt()
const asciiValue = char.charCodeAt(0);

console.log(`The ASCII value of '${char}' is: ${asciiValue}`);

// convert the ascii value to character
const VALUE_N = String.fromCharCode(asciiValue)
console.log(VALUE_N)

console.log(`PRINTING BA${VALUE_N}A${VALUE_N}A`);