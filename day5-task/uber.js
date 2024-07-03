class uber{
   constructor(price,km)
   {
    this.price=price
    this.km=km
   }
   total(){
return this.price*this.km
   }
}

const Uber=new uber(100,4)
console.log("Ride Price: "+ Uber.total())