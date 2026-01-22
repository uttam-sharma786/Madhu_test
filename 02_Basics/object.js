const userInformation = {
    name:"uttam",
    age: 28,
    Phone: 9079313929,
    email: "uttamsharma.8560@gmail.com",
    Student :{
        id: 2342,
        class: "Second class"
    },
    userName: ["Ravi","Raja","Madhu"]
}
// console.log(userInformation.Student.userName);
// console.log(userInformation["email"]);

// change the property

userInformation.age = 35

// console.log(userInformation);


// add new property

userInformation.address = "79 krishna Nagar Jaipur";
// console.log(userInformation);

// delete new property

delete userInformation.Phone

// console.log(userInformation);

// object with function

// const student = {
//     Name: "Uttam",
//     age: 25,
    
//     getobj:function(){
//        this.name = Name
//        this.age = age
//     },
//     addEmail:function(email="uttamsharma@google.com"){

//         return this.email

        
//     }
// }
// console.log(student);

//create object and Method: A function inside an object

const person = {
    Name:"Ram",
    age: 21,
    salary: 800000,
    email:"ram@windon.com",

    getDetail:function(){
        console.log(this.salary+" " +this.email);
        
    },
    increaseSalary:function(){
        return this.salary = 1000000
    }
};
console.log(person.increaseSalary())
console.log(person.getDetail());





// console.log(userInformation.name);
// console.log(userInformation.age);
// // console.log(userInformation);

// console.log(userInformation.Student.id);

// console.log(userInformation.email.toUpperCase());


// this ,  prototype, one more way to create object






