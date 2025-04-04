let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= 6; i++) {
    console.log(i);
    for (let j = breaker; j < end; j += 2) {
        console.log(`-- ${j}`);
    }
}
