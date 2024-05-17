const age = 50;
const height = 1.80; //160Cm - centimeters convert Meter 1.60
const weight = 80;  //65 kg
if (age >= 10) {
    const BMI = weight / height ** 2; // ** Means ^2 = Two the Power
    console.log(BMI);
}
else if (age >= 20) {
    const BMI = weight / height ** 2;
    console.log(BMI);
}
else if (age >= 30) {
    const BMI = weight / height ** 2;
    console.log(BMI);
}
else if (age >= 40) {
    const BMI = weight / height ** 2;
    console.log(BMI);
}

else if (age >= 50) {
    const BMI = weight / height ** 2;
    console.log(BMI);
}
else if (age >= 60) {
    const BMI = weight / height ** 2;
    console.log(BMI);
}


else {
    console.log('You are not Range of BMI');
}