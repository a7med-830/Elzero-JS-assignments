let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let res = numsAndStrings.filter((ele) => !isNaN(ele)).map((ele) => -ele);

console.log(res);