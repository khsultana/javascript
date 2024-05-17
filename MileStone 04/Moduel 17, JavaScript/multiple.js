const salary = 15000;
const isBcs = true;
const height = 60;
const hasCar = true;

if (salary > 20000 && isBcs === true) {
    console.log('Wow Nice');
}
else {
    console.log('Onno Patro Khuji');
}

if (salary > 25000 || height > 65) {
    console.log('Colbe');
}
else {
    console.log('COlbe nannnnnnnnnnnnnn');
}

// More and More Condition

if (salary > 20000 && isBcs === true || height > 50) {
    console.log('Hight kom holeo colbe');
}
else {
    console.log('Hobe na');
}

// Complex Condition
if ((salary > 25000 && hasCar === true) && (height > 50 && isBcs === true)) {
    console.log('jekono ekta');
}
else {
    console.log('ektao na? ');
}