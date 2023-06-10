const Laptop = require("./laptop");
const ElectronicDevice = require("./electronicDevice");

function printBatteryLife(device) {
  if (device instanceof Laptop) {
    console.log(device.batteryLife);
  } else {
    console.log("This device does not have a battery life.");
  }
}

const electronicDevice = new ElectronicDevice("Generic Device", 100);
printBatteryLife(electronicDevice);
