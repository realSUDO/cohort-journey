Hey readers! Welcome back to the 4th Article of this series

Till now.. we've looked at how the internet moves data around (DNS) and how browsers find websites. Now, we're going to learn how to **talk right to servers** without needing a browser..

*yep that’s possible*

This is **cURL** .. it's super useful for fixing problems, checking APIs, and seeing how the web really works.

---

## **What Happens When You Go to a Website?**

Before we get into cURL, let's see what happens when you type [`https://chaicode.com`](https://chaicode.com) into your browser and press Enter:

1. DNS finds the IP address for the domain.
    
2. Your browser sends a **request** to the server saying, Hey, give me your homepage!
    
3. The server sends back a **response** that includes HTML, CSS, and JavaScript.
    
4. Your browser shows you the website.
    

But what if you could skip the browser and talk to the server yourself? That's what cURL lets you do.

---

## **What is cURL anyways?**

**cURL** ( Client URL ) is a utility that lets you send and get data from servers using the command line Interface. Think of it like

* **A text app for servers** - You chat with web servers instead of friends.
    
* **A browser without the pictures** - It handles the talking, but doesn't show you anything.
    
* **A translator for web languages** - It speaks HTTP, HTTPS, FTP, and more.
    

**Basically :** cURL helps developers talk to the internet using their terminal..

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769777807222/a3760365-46b5-422d-af7e-54ba479f6715.png align="center")

---

## **Why Do Programmers Need cURL?**

A question should arise in your mind : *I have a browser. Why do I need this?*

Let’s see the answer. Why **cURL is a must-have** for backend developers

1. **API Testing** : Check your API works before you write code for the website.
    
2. **Fixing Problems** : Look at the raw data, headers, and status codes that browsers usually hide.
    
3. **Do things Automatically**: Write scripts to do things on websites like logging in or downloading files.
    
4. **Learn**: Understand how HTTP works.
    
5. **Find Issues**: Check if a server is online, slow, or has errors.
    

---

## **Making Your First cURL Request**

Let's start with an easy command. Open your terminal and type:

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

Press Enter. What happened?

1. **You** (using cURL) said: Hey server at [jsonplaceholder.typicode.com](http://jsonplaceholder.typicode.com), give me post number 1.
    
2. **The server** sent back data about that post in JSON format.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769778095005/91e4c583-627e-499e-b8a2-7d8713672626.png align="center")

You just made an **HTTP GET request**! without clicking at anything in your broswer..  
just talking to the server.

---

## **Understanding Request and Response**

Let's break down what you just saw. Every web conversation has two parts :

### **The Request ( What You Send )**

When you ran `curl https://jsonplaceholder.typicode.com/posts/1` , you sent :

* **Method**: GET (meaning give me data)
    
* **URL**: Where to send the request
    
* **Headers**: Hidden info about your request (cURL adds these)
    

### **The Response ( What You Get Back )**

The server replied with:

* **Status Code** : 200 OK (means it did work )
    
* **Headers** : Info about the response ( what type of content, how big it is etc.)
    
* **Body** : The actual data ( the JSON you saw )
    

To see everything, add the `-v` (verbose) flag:

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
#The result might be overwhelming but you'll get used to it
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769778346997/57eafdb2-a432-43d8-b0aa-0eb5fea66e67.png align="center")

Now you can see **everything** : the request headers, the response headers, and the body. This is awesome for finding problems!

---

## **Using cURL to Talk to APIs**

APIs ( Application Programming Interfaces ) let different programs talk to each other. With cURL, **you can chat with any API.**

### **GET Request ( Reading Data )**

We already did this! GET is for reading data:

```bash
# Get all posts
curl https://jsonplaceholder.typicode.com/posts

# Get comments for post 1
curl https://jsonplaceholder.typicode.com/posts/1/comments
```

### **POST Request ( Creating Data )**

Now let's make something new:

```bash
curl -X POST \
  https://jsonplaceholder.typicode.com/posts \
  -H Content-Type: application/json \
  -d '{title: Hello cURL, body: Learning backend is fun!, userId: 1}'
```

Here's what this means:

* `-X POST` → Use the POST method (to create new data)
    
* `-H Content-Type: application/json` → Tell the server we're sending JSON data
    
* `-d '...'` → The data we want to create
    

The server should send back your new post, with an ID!

---

## **How cURL Fits In**

This is how cURL works in your development:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769779608809/54f12f48-8f22-4151-9902-3a55381d92da.png align="center")

---

## **Common Mistakes**

These are some common cURL mistakes beginners might make ( *you won’t if you’re a smart one* )

### **1\. Missing Quotes Around JSON**

```bash
# Wrong - JSON breaks without quotes
curl -X POST https://api.example.com/data -d {title: Hello}

# Correct
curl -X POST https://api.example.com/data -d '{title: Hello}'
```

### **2\. Missing Content-Type Header**

```bash
# WRONG : Server might not understand your data
curl -X POST https://api.example.com/data -d '{name: John}'

# RIGHT : Tell the server it's JSON
curl -X POST https://api.example.com/data \
  -H Content-Type: application/json \
  -d '{name: John}'
```

### **3\. Confusing -d with -H**

* `-d` is for **data** (the request body)
    
* `-H` is for **headers** (info about the request)
    

### **4\. Not Checking Status Codes**

Always look at the response code.. Like this :

```bash
# See just the status code
curl -o /dev/null -s -w %{http_code}\n https://api.example.com/data

# if you get 404 .. the endpoint doesn't exists.. 
# if you get 500 .. the server has an error
# if you get 200 .. it means it worked ( OK )
```

---

## **Your cURL Quick Guide**

Here’s what you need to get started:

```bash
# Basic GET request
curl https://api.example.com/data

# GET with verbose output (see everything)
curl -v https://api.example.com/data

# POST request with JSON data
curl -X POST https://api.example.com/data \
  -H Content-Type: application/json \
  -d '{key: value}'

# Save output to a file
curl https://api.example.com/data -o output.json

# Follow redirects (if the site moves content)
curl -L https://example.com

# Ignore SSL certificate errors (only for testing!)
curl -k https://localhost:3000
```

---

## **Practice Time**

Ready to test what you've learned ? Here's a challenge using a test API:

1. **Get user data**
    
    ```bash
    curl https://jsonplaceholder.typicode.com/users/1
    ```
    
2. **Make a new todo**
    
    ```bash
    curl -X POST https://jsonplaceholder.typicode.com/todos \
      -H Content-Type: application/json \
      -d '{userId: 1, title: Learn cURL, completed: false}'
    ```
    
3. **Change the todo** (set completed to true)
    
    ```bash
    curl -X PUT https://jsonplaceholder.typicode.com/todos/1 \
      -H Content-Type: application/json \
      -d '{userId: 1, title: Learn cURL, completed: true}'
    ```
    

Try these and see what happens!

---

## **What's Next ?**

You've started your backend development.. with cURL, you can :

1. **Test your own APIs** when you start building them.
    
2. **Fix problems with APIs** from other companies.
    
3. **Do web tasks automatically.**
    
4. **Get a deeper understanding of HTTP.**
    

> **Tip :** As you learn, check out these cURL options:
> 
> * `-I` to see only the headers
>     
> * `-u` for login
>     
> * `-O` to download files
>     
> * `--limit-rate` to control download speed
>     

---

## **Quick Review**

* **cURL** = Tool for talking to servers using the command line
    
* **GET** = Read data, **POST** = Create data
    
* Always check **status codes** (200 = good, 400/500 = error)
    
* Use `-H` for headers, `-d` for data
    
* Try test APIs before using real systems
    

**Your task:** Find an API you're curious about (maybe for weather, news, or GitHub) and try getting data with cURL. Tell us what you find in the comments!

Remember : Every backend developer started where you are now. The terminal might seem scary, but with practice, it becomes your best tool.

---

### Previous blogs :

* [Network Devices (Explained Simply)](https://iwritenetwork.hashnode.dev/network-devices-explained-simply)
    
* [DNS resolution](https://iwritenetwork.hashnode.dev/dns-resolution)
    
* [DNS records](https://iwritenetwork.hashnode.dev/dns-records)
