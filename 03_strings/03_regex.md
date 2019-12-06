.search()
.match()
.replace()


Search returns 1 or -1 if true or false. 

```javascript
"hello world".search(/[aeiou]/); // Find the first vowel
1
"hello world".search(/\d/); // Find the first digit
-1
```

Thi swill return the values matched as opposed to true or false
```javascript
// Find all the vowels
"hello world".match(/[aeiou]/g);
["e", "o", "o"]
// Find "world" regardless of capitalization
"hElLo WoRlD".match(/world/i);
["WoRlD"]
```

Replace works like sed replace, pretty straight fowrad

```javascript
The pattern argument can just be a simple substring instead of a regular
expression, but it will replace only the first occurrence.
"favorite color: red".replace("red", "blue");
"favorite color: blue"
To replace every occurrence, use a pattern with the global ( g ) option.
// Without using the global option
"red, red, red".replace(/red/, "blue");
"blue, red, red"
"red, red, red".replace(/red/g, "blue");
"blue, blue, blue"
```

You can use the $1 to $99 as placeholders for values when doing replaces

```javascript
If the pattern argument has subpatterns, you can access them in the
replacement string with placeholders in the form of $1 up to $99.
// \w+ matches multiple "word" characters,
// like letters and numbers. That word is inserted
// into the replacement with the $1 placeholder
"Name: Lenny".replace(/Name: (\w+)/, "Hi $1!");
"Hi Lenny!"
The replacement argument can also be a function that returns a string.
The following sample matches all lowercase vowels and replaces them
with uppercased vowels:
var replacementFunc = function(vowel) {
return vowel.toUpperCase();
};
"hello world".replace(/[aeiou]/g, replacementFunc);
"hEllO wOrld"
```