let url,number,details; //api url
let root=document.getElementById("root").innerText="enter an mobile number";
details=document.getElementById("details");
number=9865876141
let td=document.createElement("td");//1st td
let td2=document.createElement("td");
let td3=document.createElement("td");
details.append(td,td2,td3)

// get number
async function mnumber(link){
    let result=await fetch(link);
    let response=await result.json();
    (()=>{
  if(response.result!==true){
    root.innerText="enter crt number";
  }})()
  td.innerText=response
    
}
url=`http://apilayer.net/api/validate?access_key=7216ec1b6be70844baee2c3087dafe68&number=${number}&country_code =IN&format=1`
mnumber(url)