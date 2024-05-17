/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burgerPrice = 410;
const cokePrice = 30;
if (burgerPrice >= 500) {
    const discount = (burgerPrice + cokePrice) - cokePrice;
    console.log(discount);
}

else if (burgerPrice <= 400) {
    const discount = (burgerPrice + cokePrice);
    console.log(discount);
}
else {
    console.log(burgerPrice + cokePrice);
}