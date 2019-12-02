The NOT operator: ! 

Changes true to false and false to true

```javascript
if (myVar != true) {
    // It's not true
}   
if (! myVar) {
    // It's still not true
}
```

This would only work in the browser. 

```javascript
var element = document.getElementById("mayNotExist");
if (! element) {
    console.log("The element is falsey, so it must not exist");
}
```



Logical AND Operator: &&

The logical AND operator ( && ) takes two operands. It returns the right operand only if the left operand is “truthy.” If the left operand is “falsey,” it returns that value.

```javascript
var truthyValue = 1;
var falseyValue = null;
// Left operand && right operand
true && truthyValue;
1
falseyValue && truthyValue;
null
```

This will interupt execution and simply return the left value if it is not true. 

```javascript
function myFunc() {
alert("executing myFunc!");
return true;
}
falseyValue && myFunc();
null
```


This is an example of combining a bunch of simple expressions into more complex ones.

[This](https://developer.mozilla.org/en-US/docs/Web/API/Document/body
) is a description of the document object in javascript
The first child pulls the first child node of the document. See [here](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild)

```javascript 
var element = document.body.firstChild;
if (element &&
(element.nodeName === "DIV" ||
element.nodeName === "SPAN") &&
element.childNodes.length) {
alert("All of these expressions are true");
}
```


Ternary Expressions
Ternary expressions are a slightly more efficient way to manage values
based on truthiness. I used them a lot because they let you write a basic
if/else statement in one line of code.

```javascript
result = expression ? "it's true" : "it's false";
```

This expression is equivalent to the following:

```javascript
if (expression) {
    result = "it's true";
} else {
    result = "it's false"
}
```