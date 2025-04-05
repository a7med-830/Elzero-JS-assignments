let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (isNaN(friends[index]))
        if (friends[index][+false] != "A") {
            console.log(`${counter + +true} => ${friends[index]}`);
            counter++;
        }
    index++;
}
