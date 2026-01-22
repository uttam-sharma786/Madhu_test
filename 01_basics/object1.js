// create object

let student = {
    name: "uttam",
    age:21,
    city:"Jaipur",
    marks: 75
};

console.log(student);

//Accessing Object Properties
// Method 1: Using dot notation
console.log(student.age);

//Method 2: using bracket notation

console.log(student["name"]);


// Changing Object Properties

student.marks = 100
console.log(student["marks"]);

// Add new property

student.email = "uttam@gmail.com"
console.log(student.email);
console.log(student);

// delete a property

delete student.city;
console.log(student);


//OBJECTS WITH FUNCTIONS (METHODS)

let person = {
    name:"Ram",
    age: 21,
    email:"uttam@gmail.com",
    salay:50000,

// / Method: A function inside an object

study:function(){
    console.log(this.name+ "is professional");
},
    increaseSalary: function (wages){
    this.salay = this.salay+wages
    }
};

person.increaseSalary(10000)
console.log(person.salay);
/*

this refers to the object itself
this.name means "this object's name"
this.marks means "this object's marks"
*/

//   // Method that calculates and returns

let players = {
    Name: "Ravi",
    Scores1 = 45,
    Score2 = 46,
    Score3 = 56,

// getScores : funciton () {
//    let average = (this.Score1 + this.Score2 + this.Score3) ;
//     return average;
// },

// }