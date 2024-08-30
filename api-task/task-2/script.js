let url="https://api.thecatapi.com/v1/images/search?limit=10"
// image



async function catimg(){
    let response=await fetch(url);
    let result=await response.json();
    let res=result.map(e=>e.url)using
   for(let i=0;i<11;i++)
{

let image=`<img src=${res[7]}> </img>`
    document.getElementById("cat-img").innerHTML=image

}    // document.getElementById("cat-img").innerHTML=<img src="" ></img> 
}
catimg();

