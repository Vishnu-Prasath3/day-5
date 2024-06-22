class movie{
    constructor(title,studio,rating="PG"){
        this.title=title
        this.studio=studio
        this.rating=rating
    }
    getPG(movie1){
     return movie1.filter(movie=>movie.rating==="PG")
     }
    }



const movie1=new movie("Casino Royale","Eon Productions","PG13")
console.log(movie1)