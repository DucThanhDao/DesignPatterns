// Create service car
class Car {
    constructor(name = "Car Ford", doors = 4, price = "10VND", customerInfor = {}){
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfor = customerInfor;
    }
}

//Create service logictic
class ServiceLogistic {
    transportClass = Car;
    getTransport = (customerInfor) => {
        return new this.transportClass(customerInfor);
    }
}

//Order for customer by Car
const carService = new ServiceLogistic();
console.log("CarService::::", carService.getTransport({customerInfor: {name: "ThanhDao", cargoVolumn: "100kg"}}));

//--> Implement Factory Pattern
// Way 1
class Truck {
    constructor(name = "Struck Ford", doors = 16, price = "100VND", customerInfor = {}){
        this.name = name;
        this.doors = doors;
        this.price = price;
        this.customerInfor = customerInfor;
    }
}
carService.transportClass = Truck;
console.log("Truck Service::::", carService.getTransport({customerInfor: {name: "ThanhDaoTruck", cargoVolumn: "100kg"}}));

//Way 2 -> highly recommended
class TruckService extends ServiceLogistic{
    transportClass = Truck
};

const truckService = new TruckService();
console.log("Truck Service::::", truckService.getTransport({customerInfor: {name: "ThanhDaoTruck2", cargoVolumn: "150kg"}}));
