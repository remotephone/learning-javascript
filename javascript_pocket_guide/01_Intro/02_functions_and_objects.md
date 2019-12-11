## Functions

Exmaple function:

```javascript
function sayHello(name) {
console.log("Hello, " + name + "!");
}

```

running that function:

```javascript
sayHello("Lenny");
"Hello Lenny!"
sayHello("Sally");
"Hello Sally!"
```

## Objects

pg 36

Objects are so fundamental to JavaScript that it is considered an object-
oriented language. An object is a collection of values called properties. You
usually access a property of an object with the dot ( . ) operator followed
by the name of the property.

This is a json dictionary. JavaScript Object Notation. Wow. 

```javascript
var myObject = {};
myObject.property = 42;
42
myObject.anotherProperty = "value";
"value"
myObject;
Object property=42 anotherProperty="value"
```


## Loops

Wild stuff here, seems much different than python loops but the logic is mostly the same.

```javascript
var times = 10; // define the value
while (times--) { // -- means run and subtract run. the while means subtract till times is gone
console.log("I am awesome!");
}
```


The for loop takes 3 expressions.

`var i = 0`: setup expression. runs once at beginning of loop
`i < 10`: test expression, runs each time the loop runs
`i++` increment - change tested value by this each time function runs

```javascript
for (var i = 0; i < 10; i++) { // if i = 0, run this while i is less than 10, adding one each time
console.log("Loop number " + i);
}
```


## Control Flow

This is an if/else if/else statement in action
```javascript
if (expression) {
    console.log("expression is truthy");
} else if (expression2) {
    console.log("expression2 is truthy");
} else if (expression3) {
    console.log("expression3 is truthy");
} else {
    console.log("all of these expressions are falsey");
}
```

Here is a simple example

```javascript
var myVar = 1;

if (myVar == 2) {
    console.log("it is 2")
} else if (myVar == 3) {
    console.log("it is 3")
} else {
    console.log("it is not 1")
}
```

# process.argv
This is a simple way to pass a command line argument to a script

This is what I'm running 
`$ node 02.3_test.js 2`
Here is each of the results when i console.log. Each argument in the script is in an array and can be pulled out
```javascript
console.log(process.argv[0])
/usr/bin/node

console.log(process.argv[1])
/home/user/learning-javascript/01_Intro/02.3_test.js

console.log(process.argv[2])
2
```


