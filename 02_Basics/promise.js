const fetechPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
console.log(fetechPromise);
// console.log(fetechPromise.status);

fetechPromise.then((response) => {
    if(!response.ok){
        throw new error (`HTTP error: ${response.status}`)
    }
    return response.json();
})

.then((data)=>{
    console.log(data[200].name);
    
})
.catch((error)=>{
    console.log(`could not get any product: ${error}`);
    
})

.finally((show)=>{
    console.log(`show the any result ${show}`);
    
})
  
// jsonPromise.then((data) => {
//     console.log(`${data[2].price}`);
// jsonPromise.then((check)=> {
//     console.log(`${check[10].type}`);
    




    

