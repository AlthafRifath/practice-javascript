// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;

let age = 21;

let firstName = "Althaf"
let lastName = "Rifath"

let online = true;


console.log(typeof age);
console.log(`I'm ${age} years old`);

console.log(typeof firstName);
console.log(`Your Full name is ${firstName} ${lastName}`);

console.log(typeof online);
console.log(`Althaf is online: ${online}`);

document.getElementById("p1").textContent = `My name is ${firstName}`;
document.getElementById("p2").textContent = `I'm ${age} years old`;
document.getElementById("p3").textContent = `Am I online ${online}`;