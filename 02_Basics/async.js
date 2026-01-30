
// async function tryAys() {
//     const url = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
//     const data = await url.json()
//     console.log(data);
    
// }

// tryAys()

// function tryPromise(){
//     .then((reponse)=>{
//         const resp = reponse.json()
//     })
// }


// const urldata = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
// urldata.then((response)=>{
//     const res = response.json()
//     console.log(res);
//     res.then((data) => {
//         console.log(data[1]);
    
        
//     })
    
// })


// async function userName(){
//     const thirdParty = await fetch("")
    
//     const response  = await thirdParty.json()
//     console.log(response);
    



// }

// userName()


// async function getWeather(){
//     const locationRes = await fetch("https://ipapi.co/json/");
//     const convertJson = await locationRes.json();
//     console.log(`Location: ${convertJson.country_population}, ${convertJson.country}`);


    

    // const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true`);
    // const weather = await weatherRes.json();
    // console.log(`Location: ${location.city}, ${location.country}`);
    // console.log(weather[0]);
    
// }
// getWeather()

// async function getCominedProductData() {
//     const product1 = await fetch("https://fakestoreapi.com/products");
//     const response = await product1.json()

//     response.forEach((key)=> console.log(`${key.title}: $${key.price}`));
    
    
    
// }
// getCominedProductData()