
const subject = new Set();

subject.add("English");
subject.add("Hindi");
subject.add("Math");
subject.add("computer");
subject.add("Math");

console.log(subject);

for (const element of subject) {
    console.log(`${element}`);
    
}


const heroName = ["Ram","Raju","Runveer","Govide"];

for (const element of heroName) {
    console.log(`${element}`);
    
}


const password = "p1237"
let haspassword = false;
console.log("Checking password characters");

for (const key of password) {
    if(password[key] >= '0' && password[key] <= '9'){
        haspassword = true
    }
    
    // console.log(`${key}`);
    
    
}

console.log(`Contains number: ${haspassword}`);


const number = [1,2,3,4,5]

number.forEach((key) => {
    console.log(key);
})


const object = {
    name:"uttam",
    age:25,
    persondeatils :{
        address:"krishna Nagar"
    }
}
console.log(object.persondeatils["address"]);


// Map

const Tea = new Map();

Tea.set("spice","Masala")


