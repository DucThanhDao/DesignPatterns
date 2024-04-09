// Create PaymentProcessor
class PaymentProcessor {
    payment(amount){

    }
}

//Create momo payment processor class
class MomoPaymentProcessor extends PaymentProcessor {
    constructor(phoneNumber) {
        super();
        this.phoneNumber = phoneNumber;
    }

    //implement Pay methods
    pay(amount){
        console.log(`Payment using Momo succesfully with amount: ${amount}`);
        //TODO: payment logical process
    }
}

//Create visa payment processor class
class VisaPaymentProcessor extends PaymentProcessor {
    constructor(cardNumber, ccv, expiryDate) {
        super();
        this.cardNumber = cardNumber;
        this.ccv = ccv;
        this.expiryDate = expiryDate;
    }
    //implement Pay Method
    pay(amount){
        console.log(`Payment using Visa card succesfully with amount: ${amount}`);
    }
}

//Create user 
class User {
    constructor(paymentProcessor){
        this.paymentProcessor = paymentProcessor
    }

    //registration for paying methods
    register(){
        const amount = 100;
        this.paymentProcessor.pay(amount)
    }
}

//Proccess
const momoPaymentProcessor = new MomoPaymentProcessor('0974778xxx');
const visaPaymentProcessor = new VisaPaymentProcessor("1234.xxxx.xxxx.xxxx", "281", "28/11");
const userMomo = new User(momoPaymentProcessor);
const userVisa = new User(visaPaymentProcessor);

userMomo.register();
userVisa.register();
