![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4pjzqf5geqlm8hspd8t3.png)

# Promises - Vaade JS ke
Today when I was on a call with my girlfriend, I promised her that I'd never ignore her texts or overlook what she says..

Life, of course, had other plans..

My microphone betrayed me. She said something important.. but my voice never reached her.

To her, it felt like silence. it felt like she's talking to a wall.  
And just like that, a promise I made minutes ago was already broken.

That's when I realized .. I had just experienced a real-life version of how JavaScript Promise work.

* * *

## Understanding JavaScript Promises (Through One Broken Promise)

In real life, when you make a promise, three things can happen:

*   You keep it *(only if the mic didn't betray me 🥀\*)*
    
*   You break it
    
*   Or it's still pending
    

JavaScript modeled asynchronous behavior around this exact idea.

* * *

### What is a Promise?

A **Promise** in JavaScript is an object that represents the eventual result of an **async operations**.

It doesn't give you the result immediately..

It gives you a **Gurantee about the future**.

* * *

### The 3 states of a Promise

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/523c2403-dd45-47ff-be9b-63e3b7b17089.png align="center")

| State | Meaning | Real-Life Version |
| --- | --- | --- |
| **Pending** | Still in progress | Call still ongoing |
| **Fulfilled** | Completed successfully | Message delivered |
| **Rejected** | Failed | Mic didn’t work |

* * *

### Creating a Promise

```javascript
const callPromise = new Promise((res,rej) => {
    let microphoneWorks = false; 
    
    if (microphoneWorks) {
           res ("She heard me") ; 
    } else {
           reject("Silence..."); 
    }
});
```

### Handling promises..

Creating a Promise is only half the story  
The real power lies in **handling its result** once it settles.

> *After my microphone failed.. the situation wasn't just about making a promise anymore..*
> 
> *it was about* ***handling what happened after the promise broke*** *(you would never want to deal with that)*

That's exactly what JavaScript forces you to deal with.

When a promise settles, you don't control *when* it finishes  
you only control **what you do when it does**.

And that's where handlers come in..

* * *

#### `.then()` - When things go right.. (as you thought)

Imagine my mic actually worked.

She speaks.  
I hear her.  
I respond.  
And she hears me back.

That's `.then()`

```javascript
callPromise.then(responds => {
    console.log("She heard me clearly: ", response);
});
```

`.then()` runs only when the promise succeeds..

* * *

#### `.catch()` - When things go wrong ( oopsie!)

Reality version :

Mic fails.  
Silence.  
She becomes mad..

```javascript
callPromise.catch(error => {
    console.log("Mic failed. She thinks I ignored her:" , error) ; 
}); 
```

`.catch()` runs whenever a promise rejects or throws an error.

* * *

#### `.finally()` - No matter what happens..

Call ends.

Whether we laughed  
or argued  
or stared at silence  
... it still ends.. (sad)

```javascript
callPromise.finally(() => {
  console.log("Call ended. Consequences loading.");
});
```

`.finally()` always runs. Outcome doesn't matter.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/ec1e238c-0d5d-4201-87f9-22d396d4da46.png align="center")

* * *

## Then things escalated..

I though fixing the mic would fix everything.

It didn't

While i was trying to repair the situation:

*   My wifi just remembered the **no signal**
    
*   She kept saying stuff , texting message
    
*   My phone's battery died too.. (when i though to switch to phone)
    

Now i wasn't dealing with one promises anymore..

I was dealing with **multiple promises happening at the same time**.

And that's when it hits you :

> Asynchronous problems don't fall one by one..
> 
> They fall all at once.

JavaScript understands this chaos.  
So it gives us tools to control multiple promises together.

* * *

## Static Promise Methods - Controlling Chaos

* * *

#### `Promise.all()` - Everything Must work

For the call to succeed, I needed

*   mic working
    
*   internet stable
    
*   battery alive
    

If even one failed --> everything failed.

```javascript
Promise.all([micCheck, internetCheck, batteryCheck])
  .then(() => console.log("Call saved .. and my life too"))
  .catch(() => console.log("Something failed. Argument started.. ouch"));
```

Resolves only if all succeed ☑️  
Rejects if one fails ❌

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/e6be1016-b766-45c1-97ad-1ad31562c324.png align="center")

*Use when tasks depend on each other..*

* * *

#### `Promise.race()` - First Result Wins

At the point I don't care what fixed things first :

*   Reconnecting call
    
*   Switching device
    
*   fixing mic
    

```javascript
Promise.race([reconnectCall, switchDevice, fixMic])
  .then(() => console.log("Saved just in time"))
  .catch(() => console.log("Too late."));
```

Returns whichever settles first - Success or failure

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/5d47a243-44a3-46e5-be05-4b95b8290d40.png align="center")

* * *

#### `Promise.any()` - First Success Saves you

Now imagine this..

I try three ways to fix the things , so that she doesn't become recklessly angry

*   call her back
    
*   text apology
    
*   Send a sweet voice note
    

I only need **one** to work.

```javascript
Promise.any([callBack, apologyText, voiceNote])
  .then(() => console.log("Crisis avoided.. I'm safe"))
  .catch(() => console.log("All attempts failed. 😭😭 Fielding set hai.."));
```

Resolves on first success ☑️  
Rejects only if all fail ❌

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/86f23149-3a9f-455c-a305-75653e49bda0.png align="center")

* * *

#### `Promise.allSettled()` - Just tell me what happened..

Eventually I didn't care what worked..

I just wanted a full report , as i was so busy solving my device rather than consoling her..

Which thing got me a reaction from her.. ? (callBack.. , text apology , voice note )  
Which thing didn't ..  
And specially **What succeeded?**

```javascript
Promise.allSettled([callBack, apologyText, voiceNote])
  .then(results => console.log("Status report:", results)); 
```

This method never fails..  
It returns outcomes for every promise.

Perfect for logging, analytics, monitoring.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/7bccb66d-1013-4449-9c26-7c5c65c2f7e1.png align="center")

* * *

#### `Promise.resolve()` - Instant Success

Like when she replies instantly ( *very rare in my case* )

```javascript
Promise.resolve("She replied ❤️")
  .then(msg => console.log(msg));
```

Creates and immediately successful promise.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/10c666eb-104a-4c41-8160-4f616c40203d.png align="center")

* * *

#### `Promise.reject()` - Instant Failure

Like when she reads you message.. and  
... leave it on seen 😭😭

```javascript
Promise.reject("Seen 2 hours ago.. ")
  .catch(msg => console.log(msg));
```

Creates an immediately rejected promise

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/c776b23b-0b66-44a2-9c0d-46eef49a3523.png align="center")

* * *

### What that Night Taught me

That call didn't just teach me about relationships..

It taught me something deeper about systems, timing, and uncertainity:

> Promises don't guarantee sucess..
> 
> They gurantee resolution.

some resolve  
some reject  
some take longer than you expect.

What matters is not the promise itself.

**What matters is how you handle it when it settles**.

![](https://cdn.hashnode.com/uploads/covers/695c068602597b5401d74fb5/c2151690-59dc-45b6-b1e5-d19b42de8646.png align="center")

* * *

## Closing Note..

> JavaScript didn't invent promises..
> 
> Life did.. JavaScript just gave them **SYNTAX**

I hope you guys learnt about **Promises and Its methods** via this article.  
Thanks for reading : P
