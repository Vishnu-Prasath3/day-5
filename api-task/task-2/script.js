let url="https://api.thecatapi.com/v1/images/search?limit=10"
// image
let img1=document.getElementById("img-1");
let img2=document.getElementById("img-2");
let img3=document.getElementById("img-3");
async function catimg(){
    let response=await fetch(url);
    let result=await response.json();
    let res=result.map(e=>e.url)
   
//  img2=document.createElement("img")
//  img2.src=res[1];
    img1.innerHTML=`<img src="${res[1]} width="100%" height="max"></img>`
    img2.innerHTML=`<img src="${res[2]}"width="100%" height="max"></img>` 
    img3.innerHTML=`<img src="${res[3]}"width="100%" height="max"></img>`
    // img1.innerHTML=`<img src="${res[4]}"width="100%" height="max"></img>`
    // img2.innerHTML=`<img src="${res[5]}"width="100%" height="max"></img>` 
    // img3.innerHTML=`<img src="${res[6]}"width="100%" height="max"></img>`
// document.getElementById("cat-img").innerHTML=<img src="" ></img> 
}
catimg();

