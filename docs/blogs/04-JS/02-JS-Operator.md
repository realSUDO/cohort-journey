![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/am92xbboz7fe1e0b5cxp.png)

# 02-JS Operators : The basics you need to know
---
Hey everyone, welcome back! In our last post, we talked about using variables to hold data. Easy right?.. But just holding data isn't enough. We need to do something with it

That's where operators come in. Think of them as the actions in your code. If variables are the things, operators are what you do with those things. They help us do math, compare values, and make choices in our code.

So, get your drinks ready, and let's jump into JavaScript operators!

## What are Operators?

In simple terms, **operators** are symbols that performs certain operations on values and variables. They're like the basics.. like the tools in your toolbox

For example :

```javascript
let result = 5+3; // Here + is the operator and 5,3 are operands
console.log(result);
```

The values on which operators work are called *operands*

## Types of Operators in JavaScript

Javascript gives us several categories of opeartors.. In this article, we'll focus on the ones you'll use every single day :

1.  **Arithmetic Operators** - for math calculations
    
2.  **Comparison Operators** - for comparing values
    
3.  **Logical Operators** - for combining conditions
    
4.  **Assignment Operators** - for giving values to variables
    

* * *

### 1\. Arithmetic Opeators

These are the operators you already know maybe.. They perform basic math operations

#### Addition (+)

```javascript
let sum = 10 + 5; 
console.log(sum); // Output : 15

// can also add strings (concatenation) 
let fullName = "Rohan" + " " + "Cariappa"
console.log(fullName) ; // Output : Rohan Cariappa
```

#### Subtraction (-)

```javascript
let difference = 10 - 5; 
console.log(difference) ; // Output : 5
```

#### Multiplication (\*)

```javascript
let product = 10 * 5; 
console.log(product); // Output : 50
```

#### Division (/)

```javascript
let average = (10+20+30) / 3 ; 
console.log(average);// Output: 20 
```

#### Modulus (%) - The remainder Operator

The one might be new to you. It gives you the **remainder** of a division.

```javascript
let remainder = 10%3;
console.log(remainder); // Output: 1 (because 3 goes into 10 three times.. remainder --> 1 ) 

let isEven = 8 % 2 ; 
console.log(isEven); // Output: 0 (if remainder is 0, number is even) 
```

The modulus operator is super useful for :

*   Checking if a number is even or odd
    
*   Cycling through values (like clock hours)
    
*   Limiting numbers to a range
    

* * *

### 2\. Comparison Operators - Comparing Values

Comparison operators compare two values and give us a **boolean** result ( `true` or `false` ). They're the questions we ask our code.

#### Greater Than (>)

```javascript
console.log(10 > 5); // Output: true
console.log(3 > 8); // Output: false
console.log(5 > 5): // Output: false (not greater, it's equal) 
```

#### Greater Than or Equal (>=)

```javascript
console.log(10>=5); // Output: true
console.log(5>=5); // Output: true (euqal counts!) 
console.log(3>=8); // Output: false
```

#### Less Than or Equal (<=)

```javascript
console.log(3<=8); // Output: true
console.log(5<=5); // Output: true
```

#### Equality Operators (IMPORTANT)

This is where beginners often get confused. JavaScript has two ways to check equality.

*   \== (Loose Equality)
    
*   \=== (Strict Equality)
    
*   Not Equal (!= and !==)
    

1\. **Loose Equality** : Checks if values are equal after converting types (type coercion).

```javascript
console.log(5 == 5); // Output: true (same number) 
console.log(5 == "5") // Output : true ( string becomes number) 
console.log(0 == false) // Output: true (false becomes 0) 
console.log(null == undefined); // Output: true (special case) 
```

JavaScript tries to help by converting types, but this can lead to unexpected results!

2\. **Strict Equality** : Checks if value are equal without converting types. Both value AND type must match.

```javascript
console.log(5===5); // Output: true (same number) 
console.log(5==="5") // Output : false (number vs string) 
console.log(0 === false); // Output : false 
```

3\. **Not Equal** (!= and !==) : Similarly , we have loose and strict not equal :

```javascript
console.log(5 != "5"); //Output : false (they're euqal after conversion)
console.log(5!=3); // Output : true

//Strict not equal (no type conversion) 
console.log(5!=="5");
console.log(5!==5); // Output : false
```

> Always use === or !== unless you have a specific reason to use == or !=. This prevents unexpected bugs!

* * *

### 3\. Logical Operators - Combining Conditions

Logical operators work with boolean values ( `true` / `false` ) and help us combine multiple conditions.

#### AND (&&) - All must be true

Returns `true` only if **all** conditions are true.

```javascript
console.log(true && true);   // Output: true
console.log(true && false);  // Output: false
console.log(false && true);  // Output: false
console.log(false && false); // Output: false
```

#### OR (||) - AT LEAST ONE must be true

Returns `true` if **at least one** condition is true.

```javascript
console.log(true || true);   // Output: true
console.log(true || false);  // Output: true
console.log(false || true);  // Output: true
console.log(false || false); // Output: false
```

#### NOT (!) - Reverse the value..

Flips `true` to `false` and `false` to `true`.

```plaintext
console.log(!true);   // Output: false
console.log(!false);  // Output: true
console.log(!(5 > 3)); // Output: false (because 5>3 is true, !true is false)
```

* * *

### 4\. Assignment Operators

We already know the basic assignment operator `=` from our variables article. But there are shorthand versions that can combine assignment with arithmetic.

#### Basic Assignment (=)

```javascript
let x = 10; // Assigns value 10 to variable x
```

#### Add and Assign (+=)

```javascript
let score = 10;
score += 5;  // Same as: score = score + 5
console.log(score); // Output: 15

// Useful for counters
let count = 0;
count += 1;  // count = 1
count += 1;  // count = 2
console.log(count); // Output: 2
```

#### Subtract and Assign (-=)

```javascript
let fuel = 100;
fuel -= 20;  // Same as: fuel = fuel - 20
console.log(fuel); // Output: 80
```

#### Multiply and Assign (\*=)

```javascript
let price = 50;
price *= 2;  // Same as: price = price * 2
console.log(price); // Output: 100
```

### Divide and Assign (/=)

```javascript
let total = 100;
total /= 4;  // Same as: total = total / 4
console.log(total); // Output: 25
```

* * *

## Quick Practice..

Try these in your browser console:

**Task 1: Arithmetic Operations**

```javascript
let num1 = 15;
let num2 = 4;

console.log("Addition:", num1 + num2);        // 19
console.log("Subtraction:", num1 - num2);     // 11
console.log("Multiplication:", num1 * num2);  // 60
console.log("Division:", num1 / num2);        // 3.75
console.log("Remainder:", num1 % num2);       // 3
```

**Task 2: Compare with <mark class="bg-yellow-200 dark:bg-yellow-500/30">and</mark>**

```plaintext
let value1 = 10;
let value2 = "10";

console.log("Loose equality (==):", value1 == value2);   // true
console.log("Strict equality (===):", value1 === value2); // false
console.log("Loose not equal (!=):", value1 != value2);   // false
console.log("Strict not equal (!==):", value1 !== value2); // true
```

**Task 3: Logical Operators Condition**

```javascript
let age = 22;
let hasID = true;
let isVIP = false;

// Condition: Can enter VIP lounge? (Age >= 21 AND hasID) OR isVIP
let canEnterVIP = (age >= 21 && hasID) || isVIP;
console.log("Can enter VIP lounge?", canEnterVIP); // true

// Try changing values and see what happens!
```

* * *

## What's Next?

Congratulations! You now know how to:

*   Perform math calculations with arithmetic operators
    
*   Compare values correctly (and understand why `===` is your friend)
    
*   Combine conditions using logical operators
    
*   Use shorthand assignment operators
    

These operators are the building blocks of logic in programming. You'll use them in every single program you write!

In our next article, we'll dive into **Conditional Statements** - how to make decisions in your code using `if`, `else if`, and `else`. We'll combine everything we've learned so far!
