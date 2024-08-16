console.log("LIVE")

let url="https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
async function load(link){
    let response=await fetch(link)
    let data=await response.json()
    let id=data.map(a=>a.id);
    let name=data.map(a=>a.name);
    return id+name;
}
let founData=load(url).then(element=>element)

let el1=document.getElementById("root")
let fdiv=document.createElement("div")
el1.appendChild(fdiv)



