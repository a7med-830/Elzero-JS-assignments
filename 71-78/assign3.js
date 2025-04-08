let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let res = myArray.reduce((acc, ele) => {
    if (typeof ele == "object") ele = ele.join("");
    return `${acc}${ele}`;
});

console.log(res);
