let url,details; //api url

let root=document.getElementById("head-id");
root.innerText="Enter An Number";

details=document.getElementById("details");
let td=document.createElement("td");//1st td
let td2=document.createElement("td");
let td3=document.createElement("td");
let td4=document.createElement("td");
details.append(td,td2,td3,td4);
td.innerText="-";
td2.innerText="-";
td3.innerText="-";
td4.innerText="-";
// get number
function Pnumber(){
  let phno=document.getElementById("PhNo").value;
  if(document.getElementById("PhNo").value==""||document.getElementById("PhNo").value==undefined){
    console.log("enter an number");
  }
  else if(phno===isNaN){
  td3.innerText="not an number";
  }
  else{
    mnumber(phno);
  }
}
async function mnumber(num){
  let link=`http://apilayer.net/api/validate?access_key=7216ec1b6be70844baee2c3087dafe68&number=${num}&country_code =IN&format=1`
    let result=await fetch(link);
    let response=await result.json();
    (()=>{
  if(response.result!==true){
    root.innerText="enter crt number";
  }})()
  if(response.success==false){
  
    td.innerText="unavailable";//response
  }
  td3.innerText=num;
  
}
