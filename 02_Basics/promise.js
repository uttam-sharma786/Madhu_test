// const fetechPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// console.log(fetechPromise);
// // console.log(fetechPromise.status);

const { response } = require("express");

// fetechPromise.then((response) => {
//     if(!response.ok){
//         throw new error (`HTTP error: ${response.status}`)
//     }
//     return response.json();
// })

// .then((data)=>{
//     console.log(data[200].name);
    
// })
// .catch((error)=>{
//     console.log(`could not get any product: ${error}`);
    
// })

// .finally((show)=>{
//     console.log(`show the any result ${show}`);
    
// })
  
// jsonPromise.then((data) => {
//     console.log(`${data[2].price}`);
// jsonPromise.then((check)=> {
//     console.log(`${check[10].type}`);
    



// const apiFetch = fetch("https://api.freeapi.app/api/v1/public/quotes/quote/random");

// apiFetch
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.data.author);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// const jokesData = fetch("https://api.freeapi.app/api/v1/public/randomjokes");
// jokesData.then((response)=>{
//     const jokesresponse = response.json()
//     console.log(jokesresponse);
//     console.log(`Received response : ${response.headers}`);
//     jokesresponse.then((data)=>{
//         console.log(data);
        
//     })
    
    
// })

// const bookURL = fetch("https://api.freeapi.app/api/v1/public/books")

// bookURL.then((response) => {
//     const bookResponse = response.json()
//     console.log(`check reponse ${response.status}`);
//     console.log(bookResponse);

//     bookResponse.then((data) => {
//         console.log(data);
        
//     })
    
    
    
// })

const quoteUrl = fetch("https://api.freeapi.app/api/v1/public/quotes");
quoteUrl.then((response) => {
    const quoteResponse = response.json()
    console.log(`quoteresponse ${response.status}`);
    console.log(quoteResponse);


    quoteResponse.then((data) =>{
        console.log(data.data.data.data[author]);
        console.log(data);
        
        
        
    })
    
})