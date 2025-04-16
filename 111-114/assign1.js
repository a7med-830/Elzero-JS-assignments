let res = document.querySelector(".result");
let fNameSelectBox = document.querySelector("#font-name");
let fColorSelectBox = document.querySelector("#font-color");
let fSizeSelectBox = document.querySelector("#font-size");

window.onload = function () {
    let fn = localStorage.getItem("fontName");
    let fc = localStorage.getItem("fontColor");
    let fs = localStorage.getItem("fontSize");

    if (fn) {
        res.style.fontFamily = fn;
        fNameSelectBox.value = fn;
    }

    if (fc) {
        res.style.color = fc;
        fColorSelectBox.value = fc;
    }

    if (fs) {
        res.style.fontSize = `${fs}px`;
        fSizeSelectBox.value = fs;
    }
}


fNameSelectBox.addEventListener("change", function () {
    window.localStorage.setItem("fontName", this.value);
    res.style.fontFamily = this.value;
});

fColorSelectBox.addEventListener("change", function () {
    window.localStorage.setItem("fontColor", this.value);
    res.style.color = this.value;
});

fSizeSelectBox.addEventListener("change", function () {
    window.localStorage.setItem("fontSize", this.value);
    res.style.fontSize = `${this.value}px`;
});
