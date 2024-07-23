let arr=[1,2,3,4,5,6,7,8,9,10]
let sumofarr=()=>{
    let sum=0;
    let last=arr.map(num=>sum+=num)
    return last
}

console.log(sumofarr);