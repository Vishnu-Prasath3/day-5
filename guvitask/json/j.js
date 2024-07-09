async function data(){
    let initial=await fetch('resume.json')
    let request=await initial.json();
    request.forEach(el => {
        console.log("FOREACH METHOD \n"+el.contact+"\n"+el.skills)
    })
for(const key in request){
    console.log(request[key],request[key].contact,request[key].education[key],request[key].skills)
}

}
data()