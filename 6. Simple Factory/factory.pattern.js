//Naive Coding
const serviceLogistic = (cargoVolumn) => {
    switch(cargoVolumn){
        case '10':
            return({
                name: "Struc 10t",
                price: "10000000VND",
                doors: 6
            })
        case '20':
            return({
                name: "Struc 20t",
                price: "20000000VND",
                doors: 8
            })
    }
}
console.log(`:::Lv0::: ${JSON.stringify(serviceLogistic("20"))}`);

//Implement Simple Factory pattern
class ServiceLogistic {
    constructor(name="Struct 10t", price = "10000000VND", doors=6){
        this.name = name;
        this.price = price;
        this.doors = doors;
    }

    static getTransport(cargoVolumn){
        switch(cargoVolumn){
            case "10": 
                return new ServiceLogistic()
            case "20":
                return new ServiceLogistic("Struct 20t", "20000000VND",8)
        }
    }
}

console.log(`:::Better::: ${JSON.stringify(ServiceLogistic.getTransport("20"))}`);

/*
Pros: Contain all the logic and seperate the login between creae and use
Cons:
    - Focus on logic to create all object --> highly responsible for the whole system --> Fn Err --> Stop sys
    - Hard to expand --> When updates needed --> rewrite code --> Against S in SOLID priciple   
--> Factory Method Pattern 
*/