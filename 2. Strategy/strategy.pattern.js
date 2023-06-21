// Example: You have multiple calculation in single function depend on the condition included in the params
// E.g: You have to calculate the price of a product depend on the promotion 

// Naive Coding:
function getPrice(originalPrice, typeOfPromotion) {
    if (typeOfPromotion === 'Black Friday'){
        return (originalPrice < 200) ? originalPrice*0.9 : originalPrice*0.8;
    }
    if (typeOfPromotion === 'Birthday'){
        return originalPrice*0.7;
    }
    if (typeOfPromotion === 'default'){
        return originalPrice;
    }
}

//Implement Strategy Pattern
function getBlackFridayPrice (originalPrice){
    return (originalPrice < 200) ? originalPrice*0.9 : originalPrice*0.8;
}

function getBirthdayPrice(originalPrice){
    return originalPrice*0.7;
}

function getDefaultPrice(originalPrice){
    return originalPrice;
}
function getPrice(originalPrice, typeOfPromotion = 'default'){
    if (typeOfPromotion === 'BlackFriday'){
        return getBlackFridayPrice(originalPrice);
    }
    if (typeOfPromotion === 'Birthday'){
        return getBirthdayPrice(originalPrice);
    }
    if (typeOfPromotion === 'default'){
        return getDefaultPrice(originalPrice)
    }
}
//--> Still have to many if conditions

//Best Practice
function getBlackFridayPrice (originalPrice){
    return (originalPrice < 200) ? originalPrice*0.9 : originalPrice*0.8;
}

function getBirthdayPrice(originalPrice){
    return originalPrice*0.7;
}

function getDefaultPrice(originalPrice){
    return originalPrice;
}

const getPriceStrategies = {
    blackFriday: getBlackFridayPrice,
    birthday: getBirthdayPrice,
    default: getDefaultPrice,
}

function getPrice(originalPrice, typeOfPromotion){
    return getPriceStrategies[typeOfPromotion](originalPrice);
}

console.log("--->Price: ", getPrice(150, 'blackFriday'));