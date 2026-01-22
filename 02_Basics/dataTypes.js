
/*
Number -> Number
BigInt
String
Boolean,
undefined
Null
symbol

*/


// Number Ex

const Number = 45;
console.log(Number);

// String ex
const str = "Uttam";
console.log(str);

// Boolean  ex

const isLoggedIn = true
console.log(isLoggedIn);

// BigInt ex


const x = BigInt(Number.MAX_SAFE_INTEGER  === 9007199254740991)
console.log("x",x);

// undefined => indicates the absence of a value
// A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
let y = undefined;
console.log(y);

y = 45;
console.log(y);

// Null

const Name = null;
console.log(typeof Name);
console.log(Name);

// symbol => unique and immutable primitive value

let userName = Symbol("uttam")
console.log(userName);

userName = Symbol("ravi");
console.log(userName);




console.log(1==1);
console.log("ravi" == "ravi");

console.log(typeof("1" == 1));
console.log( typeof ("1" === 1));















