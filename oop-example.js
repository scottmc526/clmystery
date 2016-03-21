function Car(make, mileage, gas, on) {
  this.make = make;
  this.mileage = mileage;
  this.gas = 0;
  this.on = false;
}

Car.prototype.start = function (){
  this.on = true;
  this.gas = 100;
}



var prius = new Car('toyota', 14000)
prius.start();
console.log(prius);
