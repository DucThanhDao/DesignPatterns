/* 
    - Aim of the pattern
    - What issues can be tackled by using this pattern?
    - When we shoud/shouldn't use it?
    - Real-life project/ issues that implement this pattern
        + ecommerce website   
*/

/* E.g: Build fee calculation service for ecommerce website by 3 step: check promotion --> gain VAT --> Check shipping free
*/

class Discount{
    calc(value){
        return value*0.9
    }
}
class Shipping{
    calc(){
        return 5000;
    }
}
class Fees{
    calc(value){
        return value*1.05
    }
}
class ShoppeeFacadePattern{
    constructor(){
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fee = new Fees();
    }
    calc(price){
        price = this.discount.calc(price);
        price = this.fee.calc(price);
        price += this.shipping.calc();
        return price;
    }
}
function buy(price){
    const shoppe = new ShoppeeFacadePattern();
    console.log(`::::PRICE:::: `, shoppe.calc(price));
}
buy(120000)