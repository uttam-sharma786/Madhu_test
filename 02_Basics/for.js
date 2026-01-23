// Baisc For 

for(let i=0;i<5;i++){
    console.log(i); 
}

// for loop with array

let superHeros = ["Batman","IconMan","CapticalIndia","SuperAsia"];

for(let i=0;i<2;i++){
    console.log(superHeros[i]);   
}

// looping with backwards


for(let i=5;i>0;i--){
    console.log(i);
    
}

console.log("\n");


// for loop with stp

for(let i=0;i<=5;i+=5){
    console.log(i);
    
}

// Map -> return new array
const palyers = [2,4,6];
const totalPlayers = palyers.map(num => num*3);
console.log(totalPlayers);


const number = [1,2,3,4]
number.map(num => num*2)

// filter

const even = [2,5,6,8]
const filterRes = number.filter(num => num%2 ===0);
console.log(filterRes);


// reduce

const sum = [1,2,3]
const res = sum.reduce((acc,num) => acc+num)
console.log(res);

//some

const hasenve = [1,3,5,7]
const check = hasenve.some(num => num%2 ===0)
console.log(check);


// break

for(let i=0;i<5;i++){
    if(i==2)
        break; // exits code 
    console.log(i);
    
}

console.log("\n");


//continue

for(let i=0;i<5;i++){
    if(i==2) continue;// skip this iteration
    console.log(i);
    
}


// loop with array and method chaining

const result = [1,2,3,4,5]
const chaining = result.map(num => num+2).filter(num => num%2 ===0).reduce((acc,num) => acc+num)
console.log(chaining);
