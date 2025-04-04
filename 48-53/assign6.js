let start = 0;
let swappedName = "elZerO";
let res = ""; 

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        res += swappedName[i].toUpperCase();
    } else {
        res += swappedName[i].toLowerCase();  
    }
}

console.log(res);
