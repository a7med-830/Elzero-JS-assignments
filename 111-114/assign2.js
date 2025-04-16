let fNameInput = document.querySelector("#fName");
let lNameInput = document.querySelector("#lName");
let ageInput = document.querySelector("#age");
let jobSelect = document.querySelector("#job");

window.onload = function () {
    let fn = sessionStorage.getItem("fName");
    let ln = sessionStorage.getItem("lName");
    let age = sessionStorage.getItem("age");
    let job = sessionStorage.getItem("job");

    if (fn) {
        fNameInput.value = fn;
    }

    if (ln) {
        lNameInput.value = ln;
    }

    if (age) {
        ageInput.value = age;
    }

    if (job) {
        jobSelect.value = job;
    }
};

fNameInput.addEventListener("change", function () {
    sessionStorage.setItem("fName", fNameInput.value);
});

lNameInput.addEventListener("change", function () {
    sessionStorage.setItem("lName", lNameInput.value);
});

ageInput.addEventListener("change", function () {
    sessionStorage.setItem("age", ageInput.value);
});

jobSelect.addEventListener("change", function () {
    sessionStorage.setItem("job", jobSelect.value);
});
