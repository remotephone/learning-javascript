var myvar = true;

if (myvar) {
    console.log("expression");
    }


// Built in data types

var myNumber = 42;
var myString = "A string of text";
var myBoolean = true;
var myArray = [myNumber, myString, myBoolean];

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myArray);

console.log(myArray[0]);



var myNumber = 42;
console.log(myNumber);

console.log(myNumber == 42);
console.log(myNumber == "42")
console.log(myNumber === "42");

/* Equality operator is =
Comparative operator is == */


if (1) {
    console.log(true);
    }
if ("Nonempty string") {
    console.log(true);
    }
if ([]) { // Empty array; all composite values are truthy
    console.log(true);
    }

if (0) {
        console.log(true);
    } else {
    console.log(false);
    }
if ("") { // Empty string
    console.log(true);
    } else {
    console.log(false);
    }

    