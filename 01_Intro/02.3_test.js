'use strict';

var myVar = 2;

if (myVar == 2) {
    console.log("it is 2")
} else if (myVar == 3) {
    console.log("it is 3")
} else {
    console.log("it is not 1")
}



var myVar = process.argv[2]

console.log(process.argv[2])
if (myVar == 2) {
    console.log("it is 2")
} else if (myVar == 3) {
    console.log("it is 3")
} else if (myVar == 1) {
    console.log("it is 1")
} else {
    console.log("it is not 1, 2, or 3")
}

