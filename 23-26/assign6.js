let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt.toString())); // 10
console.log(+flt.toFixed(+Number.isNaN(flt))); // 10