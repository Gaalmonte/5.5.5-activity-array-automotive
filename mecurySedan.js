//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

import Vehicle from ".vehicleBaseClass.js"

class Car extends Vehicle {
    constructor(make,model,year,color,mileage){
    super(make,model,year,color,mileage);
    this.maxpassengers = 4;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.year = 1965;
    this.color = 'blue';
    this.fuel = 5;
    this.maxpseed = 110;
}

color() {
    if (this.color == 'blue') {            
        console.log("This car has a banging paint job, it's blue");
    } else {
        return console.log("This car is definitely not blue");
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " not have enough space to take all passengers.");

        }
    } else {
        console.log(this.model + " " + this.make + " is full");
    }
}
