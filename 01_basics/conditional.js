const age =17;

if(age >= 18){
    console.log("you are eligible");
    
} else {
    console.log("you are not eligible");
    
}

const score = 75;

if(score > 60){
    console.log("grade A");
} else if (score > 75){
    console.log("grade B");
}
else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


let Age = 25;
let haslicense = true

if(Age && haslicense){
    console.log("you can drive");
} 

let hasCard = false;
if(hasCard || haslicense){
    console.log("You have ID");
    
}

if(!haslicense){
    console.log("you can't not drive");
    
}

// Breaking and Continuing

// Break - exit loop early
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);  // 1, 2, 3, 4
}


//while loop

let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// Continue - skip this iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);  // 1, 2, 4, 5
}

// Array Methods

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);      // Apple
console.log(fruits.length);  // 3

// Add to end
fruits.push("Mango");

// Remove from end
fruits.pop();

// Check if includes
console.log(fruits.includes("Banana"));  // true

//  Destructuring

// Array destructuring
let [first, second] = [10, 20];
console.log(first);   // 10
console.log(second);  // 20

// Object destructuring
let person = {name: "Ali", age: 25};
let {name1, age1} = person;
console.log(name1);    // Ali
console.log(age1);     // 25


//Arrow Functions (Modern Way)

// Regular function
function multiply(a, b) {
  return a * b;
}

// Arrow function (does the same thing)
const multiply2 = (a, b) => {
  return a * b;
};

// Shorthand arrow function
const multiply3 = (a, b) => a * b;

console.log(multiply3(4, 5));  // 20