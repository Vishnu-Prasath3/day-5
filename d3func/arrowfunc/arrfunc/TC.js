let dump ="prasathly for you"
let print=""
let tc=(dump)=>{
dump=dump.split(" ")
for(let i=0;i<dump.length;i++){
    print=print+dump[i].charAt(0).toUpperCase()
    print=dump[i]
}

return print

}
console.log(tc(dump))