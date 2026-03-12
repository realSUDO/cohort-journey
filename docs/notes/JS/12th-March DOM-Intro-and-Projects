## what is dom

dom = document object model..

browser converts html into a **tree structure** so javascript can read and change the page..

``` text
html = structure
dom = programmable version of html
```

example

```html
<body>
  <h1>Hello</h1>
  <p class="para">world</p>
</body>
```

dom tree

```text
document
 └── html
      └── body
           ├── h1 -> "Hello"
           └── p  -> "world"
```

js can access any node and modify it..

---

## crud

basic operations done on data..

* **create** .. make something  
* **read** .. access it  
* **update** .. modify it  
* **delete** .. remove it  

example

```js
let p = document.createElement("p") // create

p.textContent = "hello" // update

document.body.appendChild(p)

document.querySelector("p") // read

p.remove() // delete
```

---

## nodes

everything in dom is a **node**..

elements.. text.. comments.. even the document..

each node has a number called **nodeType**

```text
1 -> element node
2 -> attribute node
3 -> text node
8 -> comment node
9 -> document node
```

example

```html
<p>Hello</p>
```

```js
let el = document.querySelector("p")

el.nodeType // 1

el.firstChild.nodeType // 3
```

`<p>` is element node..  
`Hello` is text node..

---

## dom structure

very simplified dom hierarchy

```text
window
 └── document
      └── html
           ├── head
           └── body
```

`window` is the root of everything in browser..

---

## window object

top level object in browser..

contains browser features like dom.. alert.. timers..

```js
console.log(window)

alert("hello")

setTimeout(()=>{
  console.log("later")
},1000)
```

these are same

```text
alert()
window.alert()
```

because they belong to window..

---

## selecting elements

used to access elements from dom..

older methods

```js
document.getElementById("id")

document.getElementsByTagName("p")

document.getElementsByClassName("box")
```

modern methods (most used)

```js
document.querySelector(".box")

document.querySelectorAll(".box")
```

`querySelector` returns **first match**  
`querySelectorAll` returns **collection**

---

## NodeList

collection of dom nodes..

usually returned by `querySelectorAll`

features

* supports `.forEach`
* mostly **static**

static = does not auto update when dom changes

```js
let list = document.querySelectorAll("p")

document.body.appendChild(document.createElement("p"))

console.log(list.length)
```

length stays same..

---

## HtmlCollection

collection of **html elements only**

returned by `getElementsBy...`

feature

* **live collection**

live = automatically updates when dom changes

```js
let list = document.getElementsByTagName("p")

document.body.appendChild(document.createElement("p"))

console.log(list.length)
```

length increases..

summary

```text
NodeList -> static
HtmlCollection -> live
```

---

## innerText

```text
element.innerText
```

returns **visible text only**..

ignores hidden elements

---

## innerHTML

```text
element.innerHTML
```

returns **html inside element**

can also insert html

```js
el.innerHTML = "<b>hello</b>"
```

---

## textContent

```text
element.textContent
```

returns **all text from html**

even if hidden by css

summary

```text
innerText   -> visible text
innerHTML   -> html content
textContent -> raw text
```

---

## attributes

used to read or modify element attributes

```js
el.getAttribute("href") // read

el.setAttribute("class","box") // set

el.removeAttribute("class") // remove
```

---

## styling

`.style` modifies **inline css**

```js
let el = document.querySelector(".box")

el.style.color = "red"

el.style.fontSize = "20px"
```

css properties become camelCase

```text
font-size -> fontSize
```

---

## classList

`classList` returns **DOMTokenList**

used to manage classes easily..

```js
el.classList.add("active")

el.classList.remove("active")

el.classList.toggle("dark")

el.classList.contains("box")
```

---

# assignments / research

* write blog on **NodeList vs HtmlCollection**

* research **DOMTokenList**

* write blog difference between

``` text
DOMTokenList
NodeList
HtmlCollection
classList
```

* find

``` text
other nodeType numbers
meaning of mostly static NodeList
difference between innerText vs textContent
```
