function saymyName(){
    console.log('U');
    console.log('T');
    console.log('T');
    console.log('A');
    console.log('M');
    

}
saymyName()

// function addtwoNumber(number1, number2){
//     console.log(number1+number2);
    
// }

// addtwoNumber(4,6)

function addtwoNumber(num1,num2){
    let result = num1+num2
    return result
}

const result = addtwoNumber(3,6)
console.log("result",result);


function loginUserMessage(username = "Uttam"){
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("ram"));

function calculateCartPrice(var1,var2,...num){
    return num
}

console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Uttam",
    age: 28
}

function objectHandler(anyobject){
    console.log(
     `${anyobject.username} and ${anyobject.age}`);
    
}

// objectHandler(user)


objectHandler({
    username: "Ram",
    age: 30
})

objectHandler(user)

const newArray = [200,300,400,500]

function returnsecondvalue(getArray){
    return newArray[2]
    

}
console.log(returnsecondvalue());
