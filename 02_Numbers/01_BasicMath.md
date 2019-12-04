Simple addition stuff works like 
```
1+2 
3
```

Other stuff works too 

```
5.1 * -10.5; // Multiplication
-53.55
100 - 10; // Subtraction
90
2 / 3; // Division
0.6666666666666666
10 % 4; // Modulus, or the remainder of 10 / 4
2
```

Modulus operator (%) can be used to test even/oddness of a number. Divide it by two, if modulus === 1, its an odd number.

Modulus is the remainder of division


From the book:

The increment ( ++ ) and decrement ( -- ) operators work differently on the left side of a variable than on the right.
```
var first = 0;
var second = first++;
[first, second];
[1, 0]
```

In the previous example, the value of first is assigned to second before
the increment operator adds 1. Put the operator on the other side of the
variable, and you’ll get a different result, as shown here:

```
var first = 0;
var second = ++second;
[first, second];
[1, 1]
```

This time, the value of first is assigned to second after incrementing by 1.