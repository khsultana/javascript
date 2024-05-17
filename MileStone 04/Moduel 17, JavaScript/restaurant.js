const age = 10;
const price = 600;


if (age <= 12) {
    //100% Discount
    const discount = price * 100 / 100;
    const payAmount = price - discount;
    console.log('You Can Eat for Free');

}
else if (age <= 59) {
    const discount = price * 80 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if (age >= 60) {
    //50% Discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else {
    console.log(price);
}