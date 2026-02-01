---

**Welcome back** readers!

This is the second article of this blog , previously I’ve explained about [**Network devices**](https://iwritenetwork.hashnode.dev/network-devices-explained-simply) **.**  
In this blog we’ll see *How domain names become IP addresses*

Okay , as we know when our device is connected to **Internet**

* We make requests to browser like [`monkeytype.com`](http://monkeytype.com) , [`courses.chaicode.com`](http://courses.chaicode.com) etc.
    
* These requests are sent to website servers , it means to their IPs
    
* We receive some response from server in return, that reaches our system via our IP
    

## The Question

Now the **Question** is.. “Is our browser smart enough *to remember all the IPs of all the websites* all across the world?”  
The Answer is **NO**.

We’ll spend our time to find out the answer to this question throughout the article..

---

## DNS : What is it Exactly ?

DNS stands for **DOMAIN NAME SYSTEM**

The name is self-explanatory , it means it’s a **NAME SYSTEM** that acts as a **phonebook of internet**,

* It translates human readable domains to computer readable IPs
    
* e.g, [`flpkart.com`](http://flpkart.com) , [`github.com/realSUDO`](http://github.com/realSUDO) etc. to `192.231.34.1` , `144.183.132.11` etc.
    
* **COMPONENTS** : Utilizes DNS servers (or resolvers) to manage the database of names and addresses.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769766029868/6724d7c5-ef1c-4b1e-9741-da9ca029fd0d.png align="center")

## **How DNS Really Works: From Root to IP**

Above we said DNS is like the internet's phonebook.. But how does it actually work? Let's find it out.

### **Why DNS Exists**

Imagine having to type this every time you wanted to go to Google:

```plaintext
http://142.250.183.14
```

Hard to remember right?

That's where DNS comes in. It easily changes names like [**google.com**](http://google.com) into IP addresses that computers understand, so your browser can connect. It's a simple but important part of how the internet works.

### **The DNS System (The Main Idea)**

DNS isn't just one server that knows everything. It's a system that's spread out and organized in levels. It's like asking for directions:

1. First, you ask a **world map** (Root Server) which continent to look for.
    
2. The map points you to a **country map** (TLD Server).
    
3. That map points you to the **local city hall** (Authoritative Server) that has the exact address.
    

It always goes like this:

![Recursive vs Authoritative DNS: What to Use](https://vercara.digicert.com/wp-content/uploads/2023/11/Communication-Between-Different-Server-Types.jpg align="left")

**Remember: Root → TLD → Authoritative.** This is how DNS is set up.

---

### **Meet** DIG : Your DNS Detective

To see how this works, we can use `dig` (Domain Information Groper). It’s a tool that people who work with networks use to check DNS info and fix problems.

A simple `dig` [`google.com`](http://google.com) shows you the IP address, the servers, and how the request got there..

> TIP : While using `dig` always look for `ANSWER SECTION` in the output

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769767667885/98e290fa-84f6-478a-ace2-277e866ada82.png align="center")

Little overwhelming right ? Let's use it to follow our system from top to bottom.

---

### **Using** dig : Following the Path

#### **Querying the Root (** `dig . NS` )

We always start at the top. Type:

```bash
dig . NS
```

You're asking: **Who controls the main DNS for the whole internet?**

The answer is a list of **13 root server groups** (like [`a.root-servers.net`](http://a.root-servers.net), [`b.root-servers.net`](http://b.root-servers.net)). They don’t know website IPs .. they just know **who controls the next level down** ( the Top-Level Domains or TLDs ).

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769767850923/4de5f109-dc22-4680-8a83-acb83679d222.png align="center")

> **Note:** Root servers are the first step. They send your request to the right TLD server.

#### **Querying the TLD (** `dig com NS` )

Now, let's go down one step. Type:

```bash
dig com NS
```

You’re asking: **Who controls *all*** `.com` websites ?

The answer points you to the **.com TLD servers** (e.g, [`a.gtld-servers.net`](http://a.gtld-servers.net)). These servers know about every website ending in `.com`, but not the exact IPs yet. They know who has the info for each `.com` website.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769767969973/61fa3170-35ef-4f65-9b2c-e672dadbc4a3.png align="center")

**So far so good..** Your request has gone **Root → .com TLD Server**.

#### **Finding the Authority (**`dig` [`google.com`](http://google.com) `NS`)

We’re almost at the end of finding out what’s the IP

```bash
dig google.com NS
```

Now you ask: **Who is in charge of** [`google.com`](http://google.com)?

The answer is Google's own servers (like [`ns1.google.com`](http://ns1.google.com)). **These are the main servers for this website.** They have the real info, including the IP address..

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769768079394/c61b3d9f-72ec-4695-89b9-b03e19ff4974.png align="center")

**Now:** **Root → TLD → Google's Server**.

#### **The Final Answer (**`dig` [`google.com`](http://google.com))

Finally, we ask the main server directly..

```bash
dig google.com
```

This asks: **Okay, server, what is the IP address for** [`google.com`](http://google.com)?

**There you go!** You get the answer: `142.250.183.14` (or something like that). Now your browser can connect and open the website…

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769768769433/1a637beb-4d91-4273-8148-7e5c7f694b0e.png align="center")

---

### **How This Works When You Use Your Browser**

When you type [`flipkart.com`](http://flipkart.com) and press enter, here’s what happens:

1. **Browser Check:** Have I been here lately ?
    
2. **Computer Check:** Does my computer know ?
    
3. **Request:** If not, your system asks your **ISP's DNS Resolver** (or a public one like cloudflare’s `1.1.1.1`).
    
4. **The Trip:** This resolver does the work for you. It does the **same request we just did** (Root → TLD → Authoritative).. Like recursion.
    
5. **Get and Save:** The IP is sent back to your browser. The resolver also **saves** this info for a while to make things faster next time..
    
6. **Connect:** Your browser connects to the IP and opens the page.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769769685203/b182af17-da68-435c-8a04-e2ebaca8a06e.png align="center")

---

### **The Important Part: The Resolver**

Your internet company’s resolver (or Google DNS, Cloudflare DNS) does the hard work. It asks the different levels and saves the info so your next visit is super fast. You just ask it once, and it does the whole thing for you.

So next time when you type anything in broswer url box. Think about it.

### **Why This Is Important**

* **Saving Is Key:** This system with saving at different levels (browser, computer, resolver) is what makes the web feel fast. Without it, every visit would take many steps, slowing everything down.
    
* **One Problem?** DNS is made to be spread out and strong. If one root server goes down, others take over. But, **if there's a DNS problem, websites can't be reached, even if their servers are working.** This shows how important DNS is to getting online.
    

Next time, we’ll talk about [**DNS record types**.](https://iwritenetwork.hashnode.dev/dns-records). the different kinds of info (like A, CNAME, MX) that are on those servers and make email, subdomains, and load work.

**For now, try those** `dig` commands yourself on various websites and see how the internet's directory works.

* `dig . NS`
    
* `dig com NS`
    
* `dig in NS`
    
* `dig` [`example.com`](http://example.com) `NS`
    
* etc.
    

and much more!
