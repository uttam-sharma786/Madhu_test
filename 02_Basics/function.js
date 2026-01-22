// regular function

function sayHello(){
    console.log('U');
    console.log('T');
    console.log('T');
    console.log('A');
    console.log('M');
}
sayHello()


function sumTwoNumber(num1,num2){
    return num1-num2
};

// function subtwoNumber(x,y){
//     return subtwoNumber (x-y)
// }
console.log(sumTwoNumber(4,10));
// console.log(subtwoNumber(5,10));

// conditional 

const age = 5

if(age>=18){
    console.log("you can vote");
    
} else {
    console.log("you can not vote");
    
}

// if , else
//if , elseif ,elseif, else

const Score = 86;

if(Score<=60){
    console.log("grade A");
} else if (Score <= 75) {
    console.log("Grade B");
} else if (Score <= 90) {
    console.log("Grade C");
    
} else{
    console.log("Great");
    
}