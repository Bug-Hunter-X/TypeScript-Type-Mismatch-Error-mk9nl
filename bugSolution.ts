function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    b = parseInt(b, 10);
    if(isNaN(b)){
        throw new Error('Invalid input, b must be a number or parseable string');
    }
  }
  return a + b;
}

let result = addSafe(1, "2"); // corrected, uses parseInt to convert string to a number
console.log(result); // Output: 3
let result2 = addSafe(1, 2); // correct usage
console.log(result2); // Output: 3
let result3 = addSafe(1, "a"); // throws an error
console.log(result3); 