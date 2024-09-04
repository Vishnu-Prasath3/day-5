let url="https://api.thecatapi.com/v1/images/search?limit=10";
async function catImage() {
    let response=await fetch(url);
    let result=await response.json();
    link=result.map(a=>a.url)
    console.log(link);
    return link;
}

let prev=document.getElementById("prev");
let current=document.getElementById("current");
let next=document.getElementById("next");

// prev.innerHTML(`<img src="${}" class="d-block w-100" alt="...">`)
// current.innerHTML(`<img src="${}" class="d-block w-100" alt="...">`)
// next.innerHTML(`<img src="${}" class="d-block w-100" alt="...">`)