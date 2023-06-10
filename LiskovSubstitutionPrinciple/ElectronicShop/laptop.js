const ElectronicDevice = require("./electronicDevice");

class Laptop extends ElectronicDevice {
  constructor(name, price, batteryLife) {
    super(name, price);
    this.batteryLife = batteryLife;
  }

  printBattery(){ 
    console.log(this.batteryLife);
  }
}

module.exports = Laptop;