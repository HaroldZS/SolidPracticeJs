class ElectronicDevice {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printBattery(){ 
    console.log("Implementation of a printBatteryLife of a device");
  }
}

module.exports = ElectronicDevice;