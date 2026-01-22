const userName = "uttam";
console.log(userName);

const repoNumber = 56

console.log(userName+repoNumber+"value");

console.log(`hello my Name is ${userName} and repo number: ${repoNumber}  `);

const gameName = new String('uttam-hc-com');
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

// length 
console.log(gameName.length);

//toupperCase
console.log(gameName.toUpperCase());

//concat
console.log(gameName.concat("Ram"));

//charAt
console.log(gameName.charAt(7));

console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = " Uttam "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/uttam-sharma786/%20"

console.log(url.replace('%20','_'));

console.log(url.includes('uttsunder'));








