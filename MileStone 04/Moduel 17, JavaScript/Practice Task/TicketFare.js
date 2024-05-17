
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
const age = 100;
const ticketFare = 800;
if (age < 10) {
    const discount = ticketFare - ticketFare;
    console.log(discount);
}
else if (age <= 59 && age >= 11) {
    const discount = ticketFare * 50 / 100;
    console.log(discount);
}
else if (age < 100 && age >= 60) {
    const discount = ticketFare * 15 / 100;
    console.log(discount);
}
else {
    console.log(ticketFare);
}