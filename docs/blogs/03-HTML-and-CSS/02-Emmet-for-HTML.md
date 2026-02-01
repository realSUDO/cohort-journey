Welcome back readers! to the 2nd article of this **HTML and CSS** series .

Last time, we went over HTML tags and elements.. the basic pieces that make up every webpage. But let's face it: typing all those brackets can get old fast.

What if I told you there's a way to write HTML way quicker? A tool that takes this:

```html
<div class="container">
    <header>
        <nav>
            <ul>
                <li></li></ul></nav></header></div><a href="#">Home</a>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
```

And lets you just type this:

`div.container&gt;header&gt;nav&gt;ul&gt;li*3&gt;a[href=#]`

That's **Emmet** and today, you're going to get the hang of it.

---

## **The Problem: Typing HTML the Long Way**

Imagine building a house and having to make all the nails yourself. That's what writing HTML without Emmet feels like. You end up spending more time typing \`\` than thinking about how your page is built.

**Before Emmet:**

* You type `<div>`, then `</div>`, then go back to put stuff in between
    
* You copy and paste the same parts over and over
    
* You forget to close tags sometimes
    
* You waste time on things that should be quick
    

**After Emmet:**

* You write a whole section in one line
    
* You make big parts all at once
    
* You never forget a closing tag
    
* You focus on how it looks, not the little details
    

---

## **So, What's Emmet All About?**

**Emmet** is like a **shortcut language** that turns into HTML (or CSS). Think of it this way:

* **HTML shortcuts** - Type less, get more
    
* **Code that grows** - Type a short thing, press Tab, and bam!
    
* **Comes with most editors** - VS Code, Sublime, Atom all have it
    

**In simple words:** Emmet is to HTML what texting words are to sentences:

* `lol` → laugh out loud
    
* `div.container` → `<div class="container"></div>`
    

---

## **How to Start : You Probably Already Have It!**

If you're using **VS Code** (which is a great choice if you're new), Emmet is already there. You don't have to do anything to the setting!

Just make an HTML file and type a shortcut. When you see Emmet pop up, press **Tab** or **Enter** to make it bigger.

**Quick tip:** Emmet knows you're using HTML in `.html` files. If it doesn't work, save your file as a `.html` file.

---

## **Emmet Basics: Start Easy**

Let's start with the things people use most:

### **1\. Elements (Like CSS)**

```plaintext
div → <div></div>
p → <p></p>
h1 → <h1></h1>
```

### **2\. Classes and IDs**

```plaintext
.container → <div class="container"></div>
#header → <div id="header"></div>
section.main → <section class="main"></section>
button.submit → <button class="submit"></button>
```

### **3\. Combine Classes and IDs**

```plaintext
div#app.container → <div id="app" class="container"></div>
nav#main-nav.menu.horizontal → <nav id="main-nav" class="menu" horizontal=""></nav>
```

**See?** It's just like CSS! That makes Emmet easier to learn.

---

## **Making Structures : Putting Things Inside Each Other**

This is where Emmet gets cool. Use `&gt;` to put elements inside each other:

```plaintext
div&gt;p → <div><p></p></div>
ul&gt;li → <ul><li></li></ul>
nav&gt;ul&gt;li&gt;a → <nav><ul><li><a href=""></a></li></ul></nav>
```

**Think:** Put this inside that

---

## **Making Many of the Same Thing: The \* Sign**

Need a bunch of the same thing? Use `*`:

```plaintext
li*3 → 
<li></li>
<li></li>
<li></li>

ul&gt;li*5 → 
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

Great for menus, lists, or anything you need to make a lot!

---

## **Elements Next to Each Other : The + Sign**

Put elements next to each other with `+`:

```plaintext
h1+p → 
<h1></h1>
<p></p>

div.header+div.main+div.footer →
<div class="header"></div>
<div class="main"></div>
<div class="footer"></div>
```

---

## **Adding Details: \[\] Brackets**

Add any detail inside `[]`:

```plaintext
a[href=#] → <a href="#"></a>
img[src=photo.jpg alt=description] → <img src="photo.jpg" alt="description">
input[type=text placeholder=Enter name] → <input type="text" placeholder="Enter" name="">
```

---

## **Putting It All Together: Some Examples**

Let's make some common things with Emmet:

### **Menu**

```plaintext
nav&gt;ul&gt;li*3&gt;a[href=#]
```

Turns into:

```html
<nav>
    <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
    </ul>
</nav>
```

### **Form**

```plaintext
form&gt;input[type=text placeholder=Name]+input[type=email placeholder=Email]+button[type=submit]
```

Turns into:

```html
<form action="">
    <input type="text" placeholder="Name">
    </form>email placeholder=Email&gt;
    <button type="submit"></button>
```

### **Block**

```plaintext
div.card&gt;img[src=image.jpg]+h3{Title}+p{Description}+button{Click Here}
```

Turns into:

```html
<div class="card">
    <img src="image.jpg" alt="">
    <h3>Title</h3>
    <p>Description</p>
    <button>Click Here</button>
</div>
```

**See** `{}` for text! That's how you put words inside elements.

---

## **Super Shortcut: HTML Starter**

The most used Emmet shortcut:

```plaintext
! → (Press Tab)
```

Turns into a full HTML5 start:

```html



    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width," initial-scale="1.0">
    <title>Document</title>
```

Stops you from typing the same thing every time!

---

## **How Emmet Works In Your Editor**

```plaintext
┌─────────────────────────────────────────────┐
│        You Type:                            │
│        ul&gt;li*3&gt;a                      │
│               ↓                             │
│        You Press: TAB                       │
│               ↓                             │
│        Emmet Makes:                         │
│        <ul>                                 │
│            <li><a href=""></a></li>         │
│            <li><a href=""></a></li>         │
│            <li><a href=""></a></li>         │
│        </ul>                                │
└─────────────────────────────────────────────┘
```

**It all happens when you press Tab!** Before that, it's just words.

---

## **Time to Try : Emmet Practice**

Do these in your editor now:

1. **Basic**
    
    ```plaintext
    div.container&gt;h1{Welcome}+p{Hello World}
    ```
    
2. **List**
    
    ```plaintext
    ul&gt;li*4&gt;a{Item $}
    ```
    
    *(The* `$` adds numbers!)
    
3. **Table**
    
    ```plaintext
    table&gt;tr*3&gt;td*4
    ```
    
4. **Form**
    
    ```plaintext
    form&gt;label{Name}+input[type=text]+label{Email}+input[type=email]+button{Submit}
    ```
    

---

## **Common Mistakes**

1. **Forgetting Tab** - You have to tell Emmet to start
    
2. **Wrong file** - Use an `.html` file
    
3. **Too hard too fast** - Start with easy shortcuts
    
4. **Mixing up &gt; and +** - `&gt;` is inside, `+` is next to
    

---

## **Tips for Learning**

1. **Start with CSS** - If you know CSS, you know Emmet
    
2. **Go step by step** - Write `div`, then `div.container`, then `div.container&gt;p`
    
3. **Do it every day** - Make yourself use Emmet all the time
    
4. **Look at the suggestions** - VS Code helps you out
    
5. **Don't learn everything** - Learn the main ideas
    

---

## **When to Type It Out**

Sometimes it's faster to type:

* **Learning HTML** - Typing helps you learn
    
* **Simple things** - `p` then Tab might be slower than `<p></p>`
    
* **Weird things** - If it's easier to type, do it!
    

Emmet is just a tool. Use it when it helps.

---

## **Emmet Help Sheet**

Keep this close by:

```plaintext
Basic:          element
Class:          .class
ID:             #id
Inside:           parent&gt;child
Next To:        element+sibling
Multiply:       element*5
Details:     [attr=value]
Text:           {text content}
Numbering:      item$*3 (item1, item2, item3)
Start:    !
```

---

## **What's Next?**

Now that you can write HTML fast, we can:

1. **Use CSS with Emmet** (yes, it works for CSS too!)
    
2. **Make more complicated HTML**
    
3. **Make full webpage designs**
    

But first, **practice!** Try making your old HTML pages with Emmet. See how much faster it is?

**Your task:** Make a full HTML page using only Emmet. Start with `!` and make a page with a header, main part, and footer.

Remember: Everyone starts somewhere. You're learning skills that will make you a faster coder.

Have fun coding! And remember... **Tab is your friend.**

*P.S. What are your favorite Emmet shortcuts?*

---

## Previous Articles :

* [Getting to know HTML](https://iwriteweb.hashnode.dev/getting-to-know-html)
