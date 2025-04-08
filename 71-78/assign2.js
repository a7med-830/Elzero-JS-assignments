let myString = "EElllzzzzzzzeroo";

// Elzero

let res = myString
    .split("")
    .filter((ele, i, arr) => !(ele == arr[i - 1]))
    .join("");

console.log(res);
