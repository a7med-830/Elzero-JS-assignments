function multiply(...num) {
    let res = 1;
    for (let i = 0; i < num.length; i++) {
        if (isNaN(num[i]) == false) {
            res *= parseInt(num[i]);
        }
    }
    console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
