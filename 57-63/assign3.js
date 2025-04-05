function ageInTime(theAge) {
    if (theAge > 10 && theAge <= 100) {
        console.log(`Your age in months => ${theAge * 12} Months`);
        console.log(`Your age in days => ${theAge * 12 * 30} Days`);
        console.log(`Your age in hours => ${theAge * 12 * 30 * 24} Hours`);
        console.log(`Your age in minutes => ${theAge * 12 * 30 * 24 * 60} Minutes`);
        console.log(`Your age in seconds => ${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);
    } else {
        console.log("Age Out Of Range");
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
