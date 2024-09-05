let url="https://api.thecatapi.com/v1/images/search?limit=10";
let i=1;
async function catImage() {
    let response=await fetch(url);
    let result=await response.json();
    link=result.map(a=>a.url)
    console.log(link);
    let prev=document.getElementById("prev");
    let current=document.getElementById("current");
    let next=document.getElementById("next");
    let arr=1;
 
    let imagefunc=()=>{
        arr+=arr++;
        if(arr>8){
            arr=1;
        }
        prev.innerHTML=(`<img src="${link[arr-1]}" class="d-block w-100" alt="...">`)
        current.innerHTML=(`<img src="${link[arr]}" class="d-block w-100" alt="...">`)
         next.innerHTML=(`<img src="${link[arr+1]}" class="d-block w-100" alt="...">`)
    }
    setInterval(imagefunc,3000);
     return link;
}

catImage()

