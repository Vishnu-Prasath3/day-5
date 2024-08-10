const arr=["11 12 13 A14 15 15 12 19 16 B18"]
let ssarr=new Array();
let func=(farr)=>{
let sarr=farr[0].split(" ")
let nset=new Set(sarr)
for(value of nset.values()){
ssarr.push(value)    
}
console.log(...ssarr)
}
func(arr)