function sayHello(name) {
    console.log("Hello, " + name + "!");
    }
    sayHello("Lenny");
    sayHello("Sally");

// Define a function
function hypontenuse(sideA, sideB) {
        return Math.sqrt(sideA * sideA + sideB * sideB);
        }

// use it as is
console.log(hypontenuse(3, 4));

// Assign it's use to variable
var sideC = hypontenuse(3, 4);

// print it. 
console.log(sideC);


// This works
// function print(variable) {
//     console.log(variable)
// }

// This also works

var print = function(variable) {
    console.log(variable)
}

/* This does not work 
print = console.log() */

print(sideC)