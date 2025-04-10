let myForm = document.forms[0];
let myInput = document.querySelector("[name = 'dollar']");
let res = document.querySelector(".result");

myForm.oninput = function () {
    if (myInput.value !== "") {
        res.innerHTML = `{${myInput.value}} USD Dollar = {${
            (myInput.value * 51.35).toFixed(2) // not 15.6 any more :(
        }} Egyptian Pound`;
    } else {
        res.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
    }
};
