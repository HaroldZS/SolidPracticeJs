const Laptop = require("./laptop");
const ElectronicDevice = require("./electronicDevice");

function printBatteryLife(device) {
  device.printBattery();
}

const electronicDevice1 = new ElectronicDevice("Generic Device", 100);
const electronicDevice2 = new Laptop("HP Laptop", 500, 20);
printBatteryLife(electronicDevice1);
printBatteryLife(electronicDevice2);
