![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ky1hul5eoc9ntk9bawzp.png)

# 03-Decisions : Control flow in JavaScript
---
Hey readers , welcome back!!

In our last post, we explored how variables stores data. That was the first brick. But a program that only stores information is like a machine that powers on and then just.. waits.

Data alone doesn't create behavior.  
Behavior comes from **decision**

And decisions in programming are controlled through something called **control flow**.

If that sentence makes sense, you're ready for this article. If not, read it again once slowly...  
because everything ahead builds on that idea.

* * *

## What is Control Flow?

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/ad09c19f-b319-4e31-acce-4b01978ddf5c.png align="center")

Control flow is simply

> The order in which your program executes instructions.

By default, code runs top --> bottom --> line by line.

But real programs rarely work like that.

Sometimes you want :

*   run this only if condition is true
    
*   otherwise run something else
    
*   or pick one option among many
    

That's where control structures come in.

In JavaScript, the fundamental ones are :

*   `if`
    
*   `if...else`
    
*   `else if`
    
*   `switch`
    

We'll go one layer at a time.

* * *

## The `if` statement - The first decision

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/98ef6c53-3ff1-43eb-aae9-102205b2fe90.png align="center")

An `if` statement runs code **only if a condition is true**.

```javascript
let age = 20 ; 

if (age>=18) {
    console.log("You can vote.");
}
```

**Execution logic**

1.  Check condition --> `age >=18`
    
2.  If true --> run block
    
3.  If false --> skip block
    

That's it.

No rocket science.. Just conditional execution.

* * *

## The `if...else` Statement - Two possible paths

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/af2c4b6f-3261-4b88-ab9b-f67a3e199e4c.png align="center")

What if you want something to happen.. when the condition is false ? How you gonna do that?

You add `else` .

```javascript
let marks = 35; 

if (marks >= 46) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

Execution always picks **exactly one branch**.

Never both.

Think of it as a fork in the road.. once you choose a path , the other disappears..

## The `else if` ladder - If not this then that..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/65f3087d-0f4e-4672-af23-c74a2e550aea.png align="center")

Sometimes.. decisions aren't binary , and you have series of options to do stuff

```javascript
let score = 48;

if (score >= 50) {
    console.log("Grade A"); 
} else if (score >= 40) {
    console.log("Grade B");
} else if (score >=30) {
    console.log("Grade C"); 
} else {
    console.log("Grade D");
}
```

**IMPORTANT RULE :**  
Conditionals are checked **TOP to BOTTOM**.

The first true condition **stops** the ladder.

> this is why sometimes.. ordering conditions incorrectly can introduce bugs , even though the syntax is 100% correct

### Visual Flow of Decision ladder..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/20511ad0-8305-411b-bb17-2fb813a56a84.png align="center")

* * *

### Quick checkpoint

You now understand three levels of control..

*   single decision ( `if` )
    
*   binary decision `if...else`)
    
*   multi-conditional decision.. ( `else if` ladder )
    

We can now explore a structured design.. for multi-choice scenarios

* * *

## The `switch` Statement - Structured Branching

When you need to compare **one value against many exact options**, `switch` is cleaner and more readable than long `else if` chains

```javascript
let day = 3; 

switch (day) {
    case 1 : 
        console.log("Monday"); 
        break;

    case 2 : 
        console.log("Tuesday");
        break;
    
    case 3 : 
        console.log("Wednesday");
        break;
       
    default : 
        console.log("Invalid day");
}
```

## Why `break` ?

Without `break` , execution continues to next case.. and in many cases could introduce unwanted behaviors

Example mistake :

```javascript
case 1 : 
    console.log("Monday")
case 2 : 
    console.log("Tuesday")
```

The output of day = 1

```plaintext
Monday 
Tuesday
```

Because execution **falls through**.

That's not a bug in JavaScript.  
That's JavaScript doing exactly what you told it to.

> Falling through sometimes could be used immediately.. for grouped logic .. BUT ONLY WHEN done CONSCIOUSLY

### Switch branching diagram..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/07ee5103-1cb0-4c06-a1fc-3b0ee5989e7a.png align="center")

* * *

## When to Use `switch` vs `if...else`

Use `if-else` when :

*   conditions are ranges *(age>10)*
    
*   logic is complex..
    
*   multiple variables are involved..
    

Use `switch` when :

*   checking exact values
    
*   comparing one variable
    
*   many discrete options
    

| **Situation** | **Example** | **Why switch?** |
| --- | --- | --- |
| **Single variable, multiple exact values** | `switch(day) { case 'Mon': ... }` | Cleaner than repeated if-else chains (`if (x === 'a')... else if (x === 'b')`) |
| **3-7 discrete cases** | `switch(status) { case 200: ... case 404: ... }` | More readable and organized than nested conditions |
| **Need fall-through logic** | `case 1: case 2: execute(); break;` | Intentional sharing of code between cases |

> Rule of thumb :
> 
> IF LOGIC reads like "if this... else if that" --> use if-else
> 
> IF LOGIC reads like "when value equals..." --> use switch

## PRACTICE TIME 🎯 ( w/o AI)

#### 1\. NUMBER TYPE CHECKER

```javascript
let num = -1;

if (num > 0) {
    console.log("Positive"); 
} else if (num < 0 ) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

**Why if-else?**  
Because we're checking ranges.. and not actually comparing some value..

#### 2\. DAY PRINTER USING SWITCH

```javascript
let day = 5;

switch (day) {
	case 1 : console.log("Monday"); break;
	case 2 : console.log("Tuesday"); break;
	case 3 : console.log("Wednesday"); break;
	case 4 : console.log("Thursday"); break;
	case 5 : console.log("Friday"); break;
	case 6 : console.log("Saturday"); break;
	case 7 : console.log("Sunday"); break;
	default : console.log("Invalid");
}
```

**Why switch?**  
Because we compare **one value against fixed possibilities.**

* * *

So that now.. we've completed  
all about `if-else`.. ,  
When would `switch` be cleaner than if else  
What happens when you remove `break`

If you're able to explain these aloud.. , you've understood control flow - not memorize it..

* * *

### What comes next ?

In the previous blogs , till now we've covered

[01-Variables in JS](https://iwritejs.hashnode.dev/js-01)  
[02-Opreators in JS](https://iwritejs.hashnode.dev/js-02)

in the next article.. we'll explore **Functions in JS** ..

Till then.. take care !
