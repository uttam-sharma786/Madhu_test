function sumArray(arr){
    return arr.reduce(function(acc,current){
        return acc+current
    },0)
}
console.log(sumArray([4,5]))


function findLargest(a,b,c){
    return Math.max(a,b,c);
}
console.log(findLargest(2,200,19))

num = [1,2,3,4]
console.log(num.length);


function isPrimeNumber(num){
    if(num <=1) return false;
    for (let index = 2; index < num; index++) {
       
        
        if(num % index === 0) return false;
        
    }
    return true;
}

console.log(isPrimeNumber(3));


function removeFalsyValues(arr) {

    return arr.filter((key) => key )
}

console.log(removeFalsyValues([5,5]))


// const str = "uttam";
// console.log(str.charAt(0));

// console.log(str.charAt(0).toUpperCase())


function captialsizeFirst(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(captialsizeFirst("uttam"));


// function countOccurrences(arr,value){
//     return arr.map(count => count+1,0)
// }
// console.log(countOccurrences(3,6))

function getUniqueValues(arr) {
    return [...new Set(arr)];
}


console.log(getUniqueValues([3,4,5,6]));

