let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 != typeof num1) {
    console.log(`${num2} Is Larger Than ${num1} And Type ${typeof num3} Not The Same Type As ${typeof num1}`);
}
if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
    console.log(`${num3} Is Larger Than ${num1}, And Value Is The Same As ${num2} And Type of ${typeof num3} is Not The Same As Type of ${typeof num2}`)
}
if (num3 != num1 && typeof num3 != typeof num1 && typeof num3 != typeof num2) {
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}