var num = 3;

if (num % 2 === 1) {
    console.log("num is odd");
} else {
    console.log("num is even");
}


if (num % 3 === 0) {
    console.log("num " + num  + " is divisible by 3");
} else {
    console.log("num " + num + " is not divisible by 3");
}


var first = 0;
var second = first++;
console.log([first, second]);


var first = 0;
var second = ++second;
console.log([first, second]);
