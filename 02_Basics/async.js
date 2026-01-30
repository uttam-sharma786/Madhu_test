
async function tryAys() {
    const url = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
    const data = await url.json()
    console.log(data);
    
}

// tryAys()

// function tryPromise(){
//     .then((reponse)=>{
//         const resp = reponse.json()
//     })
// }


const urldata = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
urldata.then((response)=>{
    const res = response.json()
    console.log(res);
    res.then((data) => {
        console.log(data[1]);
    
        
    })
    
})