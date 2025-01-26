// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array for vehicles
const vehicles = [];

// Create example vehicles
const exTruck = new Truck(Cli.generateVin(),"Silver", "Ford", "F-350", 2025, 5000, 120, [], 10000);
const exCar = new Car(
  Cli.generateVin(),
  'White',
  'Ford',
  'Taurus',
  1999,
  2200,
  130,
  []
);
const exMotorbike = new Motorbike(Cli.generateVin(), "Black", "Honda", "Electra", 2022, 666, 125, []);

// push vehicles to array
vehicles.push(exTruck);
vehicles.push(exCar);
vehicles.push(exMotorbike);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();