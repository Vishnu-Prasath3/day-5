// let fs=require('fs');
// fs.writeFileSync("index.html",'this is learnin')

// //variables
// var name="logesh";
// var age=22;
// var hasHobby=true;

// // functions
// let disp=(naam,vayasu)=>{
// let ret=[naam,vayasu]
//     return  ret
// }
// let display=disp(name,age);
// console.log(display);

// let person={
//     name:"vishnu prasath",
//     age:22,
//     qf:"student",
//     hobby:["swimming","arduino","prb"],
//     kumar:function (){
//         return "kokki kumer is "+ this.age
//     }
// }
// person.hobby.forEach(element => {
//     console.log(element);
// });
// console.log(person.kumar());
// let data
// fetch('http://127.0.0.1:5500/resume.json')
// .then(res=>res.json())
// .then(msg=> 
//     {
//         console.log(msg.resume.name)
//         document.getElementById("demo").innerText=msg.resume.qualification
//         return data
//     })
//     fetch
//     console.log(data);
const url='https://restcountries.com/v3.1/all'
async function gdata(){
    const request =await fetch(url)    
   let daata=await request.json()
   let data=[...daata]
//coutries of asia
 let conti=data.filter(naam=>naam.continents[0]==='Asia')
 let senti=conti.map(per=>per.name.common)
 console.log(senti)
 
 //population
 let pop=data.filter((num,i)=>num.population<200000)
 let popu=pop.map((enu,i)=>enu.name.common+enu.name.population)
 console.log(popu);
 document.getElementById("country").innerText=senti
 document.getElementById("population").innerText=popu
//foreach
let naam=data.forEach(element => console.log(element.name.common+element.flag+element.capital))
//total population using reduce method
let total=0
let tnum=data.reduce((prev,curr)=>total+=curr.population)
console.log(tnum)
document.getElementById("wpop").innerHTML="The world population is "+tnum
 let number=daata.forEach(element => {
    console.log(element.currencies)
 });
//dollar currency

}gdata()    
     

 
 

  

 
  
 
 
 
 
 
 