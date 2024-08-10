console.log("LIVE")
let url="https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
async function load(link){
    let response=await fetch(link)
    let data=response.json()
    console.log(data);
}
load(url)
let el1=document.getElementById("root")
let fdiv=document.createElement("div")
el1.appendChild(fdiv)
//creating an seconnd div
let sdiv=document.createElement("div")
sdiv.setAttribute("Id","prasathly")
el1.appendChild(sdiv);
let el2=document.createElement("div");
sdiv.appendChild(el2)

let i=new Array();


