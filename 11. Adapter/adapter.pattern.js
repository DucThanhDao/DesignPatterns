// Define class MomoPaymentAdapter class
class MomoPaymentAdapter {
    constructor(momoPayment){
        this.momoPayment = momoPayment
    }
    //define the payWithVisa method that is required by the Youtube registration process
    payWithVisa(visaPayment){
        //convert momo to visa
        const convertPayment = this.convertToVisaPayment(this.momoPayment)
        //make payment using visa
        visaPayment.pay(convertPayment)
    }
    //Define the convertration method
    convertToVisaPayment(momoPayment){
        //convert the momo to visa
        const conversionRate = 23000
        const visaAmount = momoPayment.amount / conversionRate;
        const visaPayment = {
            cardNumber: momoPayment.cardNumber,
            expiryDate: momoPayment.expiryDate,
            cvv: momoPayment.cvv,
            amount: visaAmount,
        }
        return visaPayment;
    }
}

//Define VisaPayment Class
class VisaPayment {
    pay(payment){
        console.log(`PAYMENT SUCCESSFULLY :::: ${JSON.stringify(payment)}`);
        //todo: Payment process login ....
    }
}

//Define MomoPayment
class MomoPayment {
    constructor(cardNumber, expiryDate, cvv, amount){
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.amount = amount;
    }
}


//Real-time process
//create momo
const momoPayment = new MomoPayment("1234567890", "01/09/2000", 456, 46000);
//create momo-visa adapter
const momoToVisaAdapter = new MomoPaymentAdapter(momoPayment);
//create visa 
const visaPayment = new VisaPayment()
//Regster for Youtube
momoToVisaAdapter.payWithVisa(visaPayment)