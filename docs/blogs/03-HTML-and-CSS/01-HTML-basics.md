Hey readers, this is the start of our blog series **HTML and CSS** .  
Let’s get started

In our previous series , we've been talking about how the internet works, like how :

* **DNS** helps you find websites
    
* **TCP** makes sure your data gets there right
    
* **HTTP** sets up how your computer asks for web pages
    

Now, let's talk about what happens after the info gets to your browser. What's actually in those web pages?

Today, we're going to talk about **HTML**. It's what makes up every web page you've ever seen. You can think of it as learning your ABCs before you write a book!

---

## What is HTML and Why?

**HTML** (HyperText Markup Language) is the basic structure of every web page. It's not the fancy designs or cool features, just the basic layout.

Think about building a house:

* **HTML** = Walls, doors, windows, rooms
    
* **CSS** = Paint, wallpaper, decorations
    
* **JavaScript** = Electricity, plumbing, smart gadgets
    

Without HTML, there's nothing to decorate or make smart. It's that important.

Basically, every web page you see is just HTML that your browser reads and shows you.

---

## What's an HTML Tag?

HTML tags are like containers or labels that tell your browser what's what, like Hey, this is a paragraph! or This is a title!

A tag looks like this:

```html
<p>This is a paragraph.</p>
```

Here's what it means:

### Opening Tag

`<p>` = Hey browser, a paragraph is starting here!

### Content

`This is a paragraph.` = The actual words

### Closing Tag

`</p>` = Okay, the paragraph is done!

Think of it like putting a book on a shelf:

```plaintext
[START Fiction] Harry Potter [END Fiction]
```

## Tag vs Element: What's the Difference?

This can be confusing for beginners, so here it is:

* **Tag**: The `&lt;&gt;` things with the name in them
    
* **Element**: The whole package = Opening tag + Content + Closing tag
    

```html
<!-- This whole thing is a PARAGRAPH ELEMENT -->
<p>This is some text.</p>
<!--     ↑         ↑
       Opening    Closing
        Tag        Tag     -->
```

In short: Tags are the brackets, elements are the whole thing.

## Special Case: Self-Closing Elements

Some elements don't have content, so they don't need a closing tag. These are called void elements or self-closing tags.

```html
<!-- Line break - just makes space, no content -->
&gt;

<!-- Image - points to an image file -->
<img src="photo.jpg" alt="A" beautiful="" sunset="">

<!-- Input field for forms -->
<input type="text" placeholder="Enter" your="" name="">
```

FYI: Some people write them as `<br>` (with the slash), but `<br>` works just as well these days.

## Block vs Inline Elements: How Things Line Up

This is key to understanding how elements are arranged:

### Block Elements

These make blocks that take up the full width and start on a new line.

```html
<h1>Heading</h1> <!----> Takes full width --&gt;
<p>Paragraph</p> <!-- Takes full width -->
<div>Container</div> <!-- Takes full width -->
```

Like stacking blocks on top of each other.

### Inline Elements

These go within the text and only take up as much space as they need.

```html
&lt;p&gt;This is <strong>important</strong> text with a <a href="#">link</a>.<p></p>
```

Like words in a sentence.

Visual example:

```html
<!-- BLOCK: Each starts on new line -->
<h1>Title</h1>
<p>Paragraph one</p>
<p>Paragraph two</p>&gt;

<!-- INLINE: All in one line -->
<p>This has <strong>bold</strong> and <em>italic</em> text.</p>
```

## Your First HTML Cheat Sheet: Basic Tags

Here are the tags you'll probably use most of the time:

### Document Structure

```html
 <!-- Tells browser this is HTML5 -->
 <!-- Root element, wraps everything -->
 <!-- Contains behind-the-scenes info -->
 <!-- Contains what you see -->
```

### Text Content

```html
<h1>Main Heading</h1> <!-- Biggest heading (h1-h6)--> --&gt;
<p>Paragraph text</p> <!-- Paragraph -->
<strong>Bold</strong> <!-- Important text (bold) -->
<em>Italic</em> <!-- Emphasis (italic) -->
```

### Links & Images

```html
<a href="https://chaicode.com">Visit Site</a>
=image.jpg alt=Description&gt;
```

### Containers

```html
<div>Block container</div> <!-- Generic block -->
<span>Inline container</span> <!-- Generic inline -->
```

## Let's Make a Simple Webpage

```html



    <title>My</title> First Page


    <!-- Block element -->
    <h1>Welcome to My Website</h1>
    
    <!-- Another block element -->
    <p>This is my first paragraph. I'm learning <strong>HTML</strong>!</p>
    
    <!-- More block elements -->
    <div>
        <h2>About Me</h2>
        <p>I love coding and <em>pizza</em>.</p>
    </div>
    
    <!-- Inline elements inside a paragraph -->
    <p>Follow me on 
        <a href="https://twitter.com/chaicode">Twitter</a></p> 
        or visit my 
        <a href="https://chaicode.com">website</a>.
    <p></p>
    
    <!-- Self-closing element -->
    <img src="profile.jpg" alt="My" profile="" photo="">
```

## Quick Tip: Learn by Looking

Want to see HTML in action? Just right-click on any web page and pick Inspect or Inspect Element.

You'll see the HTML! Try to:

1. **Find a title** and see its `<h1>` or `</h1><h2>` tag
    
2. **Spot a paragraph** and see its `<p>` tag
    
3. **Hover over stuff** to see it highlighted
    

This is how developers learn – by seeing how others do it!

## Common Mistakes to Avoid

1. **Forgetting closing tags** (except for the self-closing ones)
    
    ```plaintext
    <!-- ❌ Wrong -->
    <p>Some text
    
    <!-- ✅ Right -->
    </p><p>Some text</p>
    ```
    
2. **Mixing up block and inline elements**
    
    ```html
    <!-- WRONG :  Can't put block element inside paragraph -->
    <p>Text </p><div>Oops</div> more text<p></p>
    
    <!-- RIGHT : Use span instead -->
    <p>Text <span>Yes!</span> more text</p>
    ```
    
3. **Leaving out alt text for images** (important for accessibility!)
    
    ```html
    <!-- Bad for screen readers -->
    <img src="dog.jpg">
    
    <!-- Accessible -->
    <img src="dog.jpg" alt="Golden" retriever="" playing="" fetch="">
    ```
    

## Time to Practice

Open a text editor (like Notepad) and make a file called `myfirstpage.html`:

```html



    <h1>Hello World!</h1>
    <p>My name is: ________</p>
    <p>My favorite food is: <strong>________</strong></p>
    <p>Visit &lt;</p>a href=https://chaicode.com&gt;this site to learn more.<p></p>
```

Save it, then open it in your browser. Congrats.. you just made a web page!

## What's Next?

Now you know the basics of HTML. Next up, we'll talk about:

1. **HTML Attributes** (how tags get extra powers)
    
2. **HTML Forms** (login boxes, search bars, contact forms)
    
3. **HTML5 Semantic Elements** (`<header>`, `<nav>`, `<article>`)
    

But first, practice! Try:

* Changing the words in your HTML file
    
* Adding more titles and paragraphs
    
* Playing around with bold and italic
    
* Adding an image (find one online)
    

Remember, everyone starts somewhere. You're building the base for everything else in web development.

Happy coding! Remember to save your HTML files with `.html` at the end!

P.S. Any questions? Show off your first HTML page in the comments!
