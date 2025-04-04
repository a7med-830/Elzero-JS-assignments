let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// solution 1
if (haystack.includes(needle)) {
    console.log("Found");
}

// solution 2
if (haystack.indexOf(needle) != -1) {
    console.log("Found");
}

// solution 3
if (haystack.lastIndexOf(needle) != -1) {
    console.log("Found");
}
