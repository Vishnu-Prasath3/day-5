let numbers=[1,2,3,4,5,6,7,8,9,10]
let aray=[]
let numArr=(odd)=>{
for(let i=0;i<odd.length;i++)
    
    if(odd[i]%2==1){
  
        aray.push(odd[i])
          
}
console.log(aray)
return aray
}

let Podd=numArr(numbers)
document.getElementById("demo").innerHTML="The value of an array were "+Podd