function checkStatus(a, b, c) {
    let n, age, stat;

    if (typeof a === "string") {
    n = a;
    } else if (typeof b === "string") {
        n = b; 
    } else if (typeof c === "string") {
        n = c; 
    }  

    if (typeof a === "number") {
        age = a;  
    } else if (typeof b === "number") {
        age = b; 
    } else if (typeof c === "number") {
        age = c;
    } 

    if (typeof a === "boolean") {
        stat = a; 
    } else if (typeof b === "boolean") {
        stat = b; 
    } else if (typeof c === "boolean") {
        stat = c;
    }

    if (stat === true) {
        console.log(`Hello ${n}, Your Age Is ${age}, You Are Available For Hire`); 
    }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
