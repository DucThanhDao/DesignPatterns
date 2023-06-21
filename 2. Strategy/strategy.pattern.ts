//#region Use defferent variants of an algorithm within an object & able to switch to another during runtime

/**Use defferent variants of an algorithm within an object & able to switch to another during runtime */
//Decrete Strategies
interface SortingStrategy {
    sort(data: number[]):number[];
}
class BubbleSortingStrategy implements SortingStrategy {
    sort(data: number[]): number[] {
        //TODO: Logic BubbelSorting here
        return [] as number[]
    }
}
class QuickSortStrategy implements SortingStrategy {
    sort(data: number[]): number[]{
        //TODO: Logic QuickSorting here
        return [] as number[]
    }
}
const sortingStrategies = {
    bubleSort: new BubbleSortingStrategy(),
    quickSort: new QuickSortStrategy(),
}
//Context
class Sorter {
    private strategy: SortingStrategy
    constructor(strategy: SortingStrategy){
        this.strategy = strategy;
    };
    setSortingStrategy(strategy: SortingStrategy):void{
        this.strategy = strategy
    }
    sortData(data: number[]): number[]{
        return this.strategy.sort(data);
    }
}
//Uasge
const data = [1,3,6,8,3,6]
const bSorter = new Sorter(sortingStrategies["bubleSort"]);
console.log(bSorter.sortData(data));
const qSorter = new Sorter(sortingStrategies["quickSort"]);
console.log(qSorter.sortData(data));
//#endregion

//#region - Having multiple Class that are similar and only differ in the way they exercute some behavior
/**
 * - Having multiple Class that are similar and only differ in the way they exercute some behavior
 */
interface SoundStrategy {
    makeSound():void;
}
class WoofSoundStrategy {
    makeSound():void {
        console.log("Woof Woof");
    }
}
class MeowSoundStrategy {
    makeSound():void {
        console.log("Meowww");
    }
}

const soundStrategies = {
    dog: new WoofSoundStrategy(),
    cat: new MeowSoundStrategy(),
}
class Animal {
    private soundStrategy: SoundStrategy;
    constructor(soundStrategy: SoundStrategy){
        this.soundStrategy = soundStrategy
    }
    setSoundStrategy (soundStrategy: SoundStrategy): void{
        this.soundStrategy = soundStrategy;
    }
    makeSound (){
        this.soundStrategy.makeSound()
    }
}
// Usage
const cat = new Animal(soundStrategies["cat"]);
cat.makeSound();
const dog = new Animal(soundStrategies["dog"]);
dog.makeSound();
//#endregion

//#region - For isolate the business logic from other details that may not be as important in the context of logic
interface DiscountStrategy{
    calculateDiscount(price: number): number;
}
class Discount20Percent implements DiscountStrategy {
    calculateDiscount(price: number): number {
        return price*0.8
    }
}
class Discount50Percent implements DiscountStrategy {
    calculateDiscount(price: number): number {
        return price*0.5
    }
}
const discountByPercent = {
    20: new Discount20Percent(),
    50: new Discount50Percent(),
}
class ShopingCart {
    private items: Item[];
    private discountStrategy: DiscountStrategy;
    constructor(items: Item[], discountStrategy: DiscountStrategy){
        this.items = items;
        this.discountStrategy = discountStrategy
    }
    calculateTotal(): number{
        const total = this.items.reduce((acc, item)=> acc+item.price*item.quantity,0);
        return this.discountStrategy.calculateDiscount(total);
    }
}
//Usage
interface Item {
    name: string,
    price: number,
    quantity: number,
}
const items: Item[] = [
    {name: "TShirt", quantity: 5, price: 300},
    {name: "Kaki", quantity: 1, price: 250},
]
const shoppingCart = new ShopingCart(items, discountByPercent[20]);
console.log(shoppingCart.calculateTotal());
//#endregion


//#region - When class has a massive conditional statement that switch from different variants of the same algorithm
//Naive Coding
class DiscountCalculator {
    calculateDiscount (price: number, discountType: string): number {
        let discountPercentage: number;
        // Massive conditional statement switching between discount variants
        if (discountType === "A") {
          discountPercentage = 0.2; // 20% discount
        } else if (discountType === "B") {
          discountPercentage = 0.3; // 30% discount
        } else if (discountType === "C") {
          discountPercentage = 0.4; // 40% discount
        } else {
          discountPercentage = 0; // No discount
        }
        return price * discountPercentage;
    }
}
// Usage
const discountCalculator = new DiscountCalculator();
const price = 100;
const discountType = "B";
const discount = discountCalculator.calculateDiscount(price, discountType);
console.log("Discount:", discount);

//---> Refractor it with Strategy Pattern
interface DiscountStrategyByType {
    calculateDiscount(price: number): number;
}
class DiscountTypeA implements DiscountStrategyByType {
    calculateDiscount(price: number): number {
        return price*0.8
    }
}
class DiscountTypeB implements DiscountStrategyByType {
    calculateDiscount(price: number): number {
        return price*0.7
    }
}
class DiscountTypeC implements DiscountStrategyByType {
    calculateDiscount(price: number): number {
        return price*0.6
    }
}
class DiscountByDefault implements DiscountStrategyByType {
    calculateDiscount(price: number): number {
        return price
    }
}
const discountTypes = {
    A: new DiscountTypeA(),
    B: new DiscountTypeB(),
    C: new DiscountTypeC(),
    default: new DiscountByDefault(),
}
class DiscountCalculator2 {
    private discountStrategyByType: DiscountStrategyByType;
    constructor(discountStrategyByType: DiscountStrategyByType){
        this.discountStrategyByType = discountStrategyByType;
    }

    setDiscountStrategy(discountStrategy: DiscountStrategyByType){
        this.discountStrategyByType = discountStrategy
    }

    calculatePrice(price: number): number{
        return this.discountStrategyByType.calculateDiscount(price)
    }
}
const price2 = 100;
let discountCalculator2 = new DiscountCalculator2(discountTypes["A"])
console.log(discountCalculator2.calculatePrice(price2));
//#endregion