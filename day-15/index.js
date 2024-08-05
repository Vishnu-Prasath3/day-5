let time=document.getElementById("root")

let timing=10
let timer=()=>{
setTimeout(()=>{
console.log("10");
time.innerText="10"
setTimeout(()=>{
    console.log("9")
    time.innerText="9"
    setTimeout(()=>{
        console.log("8")
        time.innerText="8"
        setTimeout(()=>{
            console.log("7");
            time.innerText="7"
            setTimeout(()=>{
                console.log("6");
                time.innerText="6"
                setTimeout(()=>{
                    console.log("5");
                    time.innerText="5"
                    setTimeout(()=>{
                        console.log("4");
                        time.innerText="4"
                        setTimeout(()=>{
                            console.log("3");
                            time.innerText="3"
                            setTimeout(()=>{
                                console.log("2");
                                time.innerText="2"
                                setTimeout(()=>{
                                    console.log("1");
                                    time.innerText="1"
                                    setTimeout(()=>{
                                        console.log("Happy Independance Day");
                                        time.innerText="Happy Independance Day";
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
},1000)
}

timer()