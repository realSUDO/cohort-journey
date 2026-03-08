![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rtc48ogyskhnz2pntl4y.png)

# 04-Collections : Arrays in JavaScript
Hey readers , welcome back.. welcome back to our JS series  
Where I share my knowledge and stories in order to make JS easy for you.

So far in this series we've covered [variables](https://iwritejs.hashnode.dev/js-01) , [operators](https://iwritejs.hashnode.dev/js-02) , [control flow](https://iwritejs.hashnode.dev/js-03) .

Today we're going to see **Arrays** , just the basics that you need to know.

But before that , as we've covered a lot.. **let's try to make something using what we already know** , we'll figure out what's an array during this journey itself.

* * *

## Why array?

Before getting to know what is array , let's understand why do we need array.. and for that I would want you to code along with me for the given problem statement.

> **As a student , one wants to make a JS program to know how much he spends daily on extra stuff** .
> 
> He expects only two things from this program
> 
> *   Know easily how much he spent on each day
>     
> *   In the end of month, was the total expenditure more then 2000?
>     

Let's try coding this using **variables** , **operators** and **control flow.**

Here we are going to name extra expense of each day as.. expense1, expnese2 .. and so on..

```javascript
let expense1 = 100; 
let expense2 = 143;
let expense3 = 52;
let expense4 = 311;
...
..
let expense30 = 57;

// We've made 30 different variables for each day
```

Okay so we've just stored expenses, and it has already started looking messy..  
Seem's like we're way more closer to know **Why do we need array** with this.

If one wants to know his expense of a particular day , he can simply print it using

```javascript
// For example to get the third day.. 
console.log(expense3) // 52
```

Which is not very feasible..

Now let's sum every expense and check if it's *lower than 2000* or not

```javascript
let total = expense1 + expense2 + expense3 + expense4 + expense5 + expense6 + expense7 + expense8 + .....................+ expense30 

// too much of work .. and not very practical in day to day life.. to access each value like this.. 

if (total > 2000 ) console.log("Overspending ! slow it down") ; 
else console.log("It was under budget") ; 
```

There it is.. we've completed the program and we can already see the problems with it.

But still I'll list it out for you to see , that **Why do we neeed array** .

### The problems with sample problems

*   Excessive variables
    
*   Can't access values easily
    
*   Tough to perform operations like sum , sort etc , Even printing. . because of low accessibility of declared variables.
    

### The solution

The simple solution to this problem would be to use arrays, using array would make it easier to loop through the expenses , perform operations and easy accessibility to them.

* * *

## What is Array ?

An Array is nothing but **numbered list where you can store multiple items under one name**.

In other words ,  
An Array is **a sequential container that solves the "too many variables" problem by letting you store a whole collection of related items together under one name , with each item accessible by it's position.**

Think of it like people standing in a line , and referred by the position they're standing on. But wait there's a catch.. , starting position is not 1 , it's **0**.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/001c8b14-6cca-41ab-865f-e16a1455ff5f.png align="center")

Also , it's a **NON PRIMITIVE** data type in JS , We'll talk about this in further blogs.

> For now just know that.. if you make array1 = array2 , then **changing array1 would change array2 too.**
> 
> Unlike , primitive data types .. if we consider a = b then a = 10 won't affect b's value.
> 
> ![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/5b9c588e-f696-4c28-aece-d025c5c1298a.png align="center")

* * *

## More About Array

Now we know what's an array , we'll focus on few things to understand more about array.  
And that would be **Creation** , **Accessing** , **Updation** , **Length** of an Array.

After that we'll be seeing about **basic iteration** over arrays , I also have prepared some practice problems for you in the end.

Let's get going.

* * *

### Creation of Array

Array is a simple group of elements under same name , so to create one.. we need to declare one using **var** , **let** , or **const**. Then we'll assign it to **square brackets** containing all the elements/items separated with a comma.

In action it would look like..

```javascript
// Example 1 ------------
const myArr = [ "stringItem" , 232n , Symbol("something") , ["another" , "array"] , 34.235 , null , undefined ] 
// It can have any legal data type/structure inside it

// Example 2 -----------
let expense = [ 100 , 143 , 531 , 223 ] 
// Here expense is the name of group .. and all the numbers inside [ ] are items/elements of this group
```

Think of it like creating a box and putting everything(legal) inside that ..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/2cdbac7f-c0cf-4566-9739-76d17b96cc08.png align="center")

* * *

### Accessing elements

Everytime an element is added to array , it's given an index. By using the name of group with that index, we can access the element we desire to.

The syntax is simple :

```javascript
// declaring an array..
let someArray = ["Element 1" , "element2" , 65 , "LAST" ]
//     index    [      0     ,     1      ,  2 ,    3   ]  

// Accessing 
console.log(someArray[0]) // Output : Element 1
console.log(someArray[1]) // Output : element2
console.log(someArray[2]) // Output : 2
console.log(someArray[3]) // Output : 3 
```

That's how elements are accessed using this syntax ..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/87141182-5174-45c1-94a8-c88f107a2b44.png align="center")

* * *

### Updation of Elements

Updation is quite simple , *if you don't know about the heap memory..*

> Don't worry , didn't mean to scare you by throwing random terminologies .. we'll be seeing that topic in deep in future blog ( **Stack vs Heap** )

For now , understand that updating any elements of array is as simple as updating a variable, which you already know.

Let's create an array of fruit basket , and we'll try to change the value of banana with pineapple.

```javascript
// creating a basket
let basket = ["apple" , "mango" , "banana" , "kiwi" , "strawberry" , "guava" ] 

console.log(basket) // Output : [ 'apple', 'mango', 'banana', 'kiwi', 'strawberry', 'guava' ]


// accessing banana.. as it's on 2nd index
console.log(basket[2]); //banana

basket[2] = "pineapple" ; 
console.log(basket[2]); // pineapple 


// -------- Finally the basket is updated --------------

console.log(basket) // Output : [ 'apple', 'mango', 'pineapple', 'kiwi', 'strawberry', 'guava' ]
```

Okay , so we've finally updated the basket.. and that's the way you do it..

Just access the element using ***arrayName\[index\]*** and then assign it using ***"="*** to some value.  
Simply.. like variables.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/da2adc7b-596d-4829-bd0f-fac61d897a96.png align="center")

* * *

### Length of array

Okay , we know now what's array .. it's creation and accessing the values . But what now?  
**What if i want to know how many elements are there in array ?**

Do i count them manually? *Nahhh!!*

We use **a property** called **length**

To use it.. , you just do *ArrayName*.*length* and it returns the length of array. Which is the **last index of array + 1**

In code it looks like

```javascript
var yourArray = ["first" , "second" , "third" , "fifth" , 234 , 11.11 ] 
var arrayLength = yourArray.length

console.log(arrayLength) // Output : 6
```

Yup thats it ..

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/c326706f-27b5-41db-86d4-02cf778d2790.png align="center")

* * *

## Iteration ( Looping on Array )

What if i want to automate the sequential accessing of the array? How do i do it?  
**ITERATION** .. is the answer.

And here's the two methods.. that we use (mostly).

#### Classic For loop :

```javascript
let myArray = [2,48,42,11,3];


for (let i = 0 ; i < myArray.length ; i++ ) {
      // every iteration we get myArray[i] as the item of our array
      // we can do anything with it.. 
      console.log(myArray[i]);
} 

/*
Output : 
2
48
42
11
3
               */
```

#### Using for...of loop

You can use for...of on an array like this

```javascript
let myArray = [2,48,42,11,3];


for (let item of myArray ) {
      // every iteration we get item as the item of our array
      // we can do anything with it.. 
      console.log(item);
} 

/*
Output : 
2
48
42
11
3
               */
```

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/1e6274c2-a3ec-4334-9ff9-92b6f32d43d8.png align="center")

* * *

## Coming back

We still have our unsolved problem , that we talked about in the beginning of the article..

> **As a student , one wants to make a JS program to know how much he spends daily on extra stuff** .
> 
> He expects only two things from this program
> 
> *   Know easily how much he spent on each day
>     
> *   In the end of month, was the total expenditure more then 2000?
>     

Now that we have knowledge of **Array** , I'll code the solution here.. and you'll be able to understand it.

```javascript
let sum = 0 ; // initialize the sum with 0 
let expense = [
     100,
     143,
      52,
     311,
      ...
      ...
      57,
]

// Although this is not a feasible way to add elements in our array.. 
// We'll use .append() later.. after next blog.. but bear with it for now

// To print daily expenses 
for (let i = 0 ; i<expense.length ; i++ ) {
       console.log(`Day${i+1} : expense[i]`); 
} 

// To check of total is more than 2000 or not
for (let value of expense ) {
    sum+=expense; // sum is being updated in every iteration.. 
}
if (sum > 2000 ) console.log("Overspending.. calm down");
else console.log("It's fine.. ");
```

Run this.. and you'll see how easy it is to write a solution , if we know about array and it's basic properties..

## Assignment for you..

Now you know enough about array .. test your knowledge by performing below taks..

*   Create an array of your 5 favorite hollywood movies
    
*   Print first and last element. ( *array.length* - 1 *will give u index of last element* )
    
*   Change one movie form the list
    
*   Loop through it to print all the movies
    

Alright.. that is it for day.. see you in the next article..
