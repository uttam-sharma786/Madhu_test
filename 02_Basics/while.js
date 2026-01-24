// while
// syntax:

// while(condition){}

let count = 0

while (count<5) {
    console.log(`count: ${count}`);
    count++
    
}

// Processing user Input

let password = "uttam123";

if(password === "admin123"){
    console.log("access");
} else {
    console.log("not access");
}



// do - while

// syntax -> do {} while(condition)

let count1 = 1
    do {
        console.log(`count: ${count1}`);
        count1++;
        
    } while (count1<5);


// if -else vs Ternary

const isLoggedIn = "true"
const userName = "Uttam"

if(isLoggedIn && userName){
    console.log(`Welcome: ${userName}`);
    console.log(`Wel: ${isLoggedIn}`);
}

// Ternary
let age = 19;
let res = (age > 21)?"Adult":"Minor";
console.log(res);

// let checkAge = 18

// if(checkAge>21){
//     console.log("Adult");
// }else {
//     console.log("Minor");
    
// }

// Optional Chainning Operator(?)

const userDetail = {
    name:"Uttam",
    address: {
        city: "Jaipur",
        state: "Rajasthan",
        pincode:302001,
        Nameofcity: "PinkCity"
    }
}

console.log(userDetail?.address.city);
console.log(userDetail?.address.Nameofcity);



// Switch case

const day ="Mon"

switch (day) {
    case "Mon":
    console.log("Mon");
        break;
    case "Tue":
    console.log("Tue");
        break;
    case "wen":
    console.log("wen");
        break;
    case "Thu":
    console.log("Thu");
    
        break;
    case "Fri":
    console.log("Fri");
    
        break;
    case "sat":
    console.log("sat");
    
        break;
    case "sun":
    console.log("sun");
    
        break;

    default:
        break;
}


