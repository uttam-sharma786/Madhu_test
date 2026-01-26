// Shallow Copy & Deep Copy

const original = {
    name:"Uttam",
    details:{
        age:25,
        city:"Jaipur"
    }
};

const shallowcopy = {...original};
console.log(shallowcopy);

// Modify the nested object  in the shallow copy

shallowcopy.details.city = "Delhi"
console.log(shallowcopy);

//Note -> Original object is also affected

// How to create shallow copy

// using the spread operator(...);

// Deep copy
// how to create deep copy
// using JSON.stringify() & JSON.parse();

const deeCopy = JSON.parse(JSON.stringify(original));
console.log(deeCopy);

deeCopy.details.city = "Bihar";
console.log(deeCopy);



