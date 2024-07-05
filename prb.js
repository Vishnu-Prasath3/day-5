// let number=userInput;
// let etri=(a)=>{
// let f=0.25*Math.sqrt(3)*Math.pow(a,2)     //formula
// return f.toFixed(2);
// }
// console.log(etri(number));
let abc=["1 5 6"], numb=[]
abc=abc[0].split(" ")
let num=(nm)=>{
    for(let i=0;i<nm.length;i++){
let numbers=Number(nm[i])
 numb.push(numbers);
    }
    return numb
}
let [a,b,c]=num(abc);
 let calculation=()=>{
    let power=Math.pow(b,2);
    let sqrt=Math.sqrt(power-(4*a*c))
    let ans1=((-b+(sqrt))/2*a);
    let ans2=(-b-Math.sqrt(Math.pow(b,2)-4*a*c)/2*a);
   console.log(ans1+"\n"+ans2) 
}
calculation()