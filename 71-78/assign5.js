let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let res = nums.reduce((acc, ele) => (ele % 2 ? ele + acc : ele * acc), 1);

console.log(res);
