const arr1 = [1,2,3,4,5,6]

const indainHero = ["Gandhi","subhash","sukadevi"]

const arr2 = (arr1.push(3));


console.log(arr1);

console.log(indainHero.push("ravi"));
console.log(indainHero);

console.log(indainHero.pop("subhash"));
console.log(indainHero);

console.log(indainHero.shift());
console.log(indainHero);
console.log(indainHero.unshift("Gandhi"));
console.log(indainHero);


console.log(indainHero.join(" -"));
console.log(indainHero.concat(arr1));

console.log(indainHero.at(2));

console.log(indainHero.indexOf("d"));

console.log(indainHero.sort());
// console.log(indainHero.lastIndexOf("sub"));

console.log(indainHero.slice(0));

console.log(Array.of(1,2,34,5));
console.log(Array.from("uttam"));


const check_Test = Array.from("uttam").join("ravi"," ","raju").trim(" ");
console.log(check_Test);


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






















