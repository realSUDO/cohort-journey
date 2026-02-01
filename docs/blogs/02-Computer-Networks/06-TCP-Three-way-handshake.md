Welcome back readers! to the **Sixth article** of the computer network series..

So far, we've covered:

* How DNS helps you find websites (think of it as an internet phone book).
    
* How HTTP structures what you send online (like writing letters with a specific format).
    
* Why TCP is the go-to for making sure everything arrives in one piece (like sending something by certified mail).
    

But there's still one big question:

**How does TCP actually make sure your stuff gets there safe and sound?**

Today, we're going to look at how TCP works. We'll break down the famous **3-way handshake** and see how TCP keeps things running smoothly, even when the internet gets a little bumpy.

---

## What If There Were No Rules?

Imagine making a phone call where:

* You can barely hear the other person.
    
* Words show up in a random order.
    
* Some words just vanish.
    
* You have no clue when they're done talking.
    

Sounds like a disaster, right? Well, that's what happens when you send data online **without rules**.

The internet can be a bit wild:

1. **Stuff gets lost** (the network is too busy, or there are problems with the routers).
    
2. **Things show up in the wrong order** (data can travel different routes).
    
3. **Data gets messed up** (think of it as static on an old radio).
    
4. **You need to know when things start and stop**
    

TCP solves **all** of these issues. Let's take a look.

---

## The TCP 3-Way Handshake: Can We Talk?

Before any data moves, TCP sets up a that acts like two people agreeing to chat:

### Step 1: SYN (Get Ready)

```plaintext
You → Website: Hey, can we talk? I'm going to start counting from 100.
```

*(Your computer sends a SYN packet with a random number to start with)*

### Step 2: SYN-ACK (Okay, I'm Ready Too)

```plaintext
Website → You: Sounds good! I got your 100. Let's do this. I'll start counting from 300.
```

*(The website says it got your number (100+1) and sends its own SYN)*

### Step 3: ACK (Let's Go!)

```plaintext
You → Website: Awesome! I got your 300. Let's get started.
```

*(You say you got the website's number (300+1))*

**Connection made!** Now, both sides:

1. Know they can reach each other
    
2. Have agreed on numbers to keep track of things
    
3. Are ready to send data
    

---

## How the Data Gets There

Once the handshake is done, the real deal starts. Here's how TCP pulls it off:

### Sequence Numbers: Keeping Things Straight

Every piece of data gets a number. If you send HELLO:

* H = seq 101
    
* E = seq 102
    
* L = seq 103
    
* L = seq 104
    
* O = seq 105
    

### Acknowledgements: Got It!

When the website gets bytes 101-105:

```plaintext
Website → You: I got everything up to 105. Send the next thing from 106.
```

*(ACK 106 means I got everything up to 105, send 106 next)*

### Flow Control: Easy There!

TCP is always adjusting how fast it sends things based on:

* How busy the network is
    
* How much the other side can handle
    
* How long it takes for signals to go back and forth
    

It's like pausing to make sure someone understood you before continuing.

---

## What Happens If Something Gets Lost?

This is where TCP shines. Let's say the data labeled 106-110 goes missing:

1. **You send** packets 106-110
    
2. **They vanish** somewhere in the network
    
3. **The website is waiting** for 106 but gets 111 instead
    
4. **The website keeps sending** ACK 106 (saying, I'm still waiting for 106!)
    
5. **You realize** 106-110 must be lost (no got it message for them)
    
6. **You resend** 106-110
    
7. **The website sends** ACK 111 when it finally arrives
    

**The result:** The data arrives complete and in order, even if some of it got lost along the way!

---

## Saying Goodbye

Just like you need to start a conversation properly, you need to end it properly too. TCP uses a **4-step process to end things**:

### Step 1: FIN (I'm Done)

```plaintext
You → Website: I'm done sending stuff. (FIN)
Website → You: Okay, I know you're done. (ACK)
```

### Step 2: Website's Turn

```plaintext
Website → You: I'm also done sending stuff. (FIN)
You → Website: Okay, I know you're done too. (ACK)
```

**Why both sides?** Data might still be going in one direction. This makes sure everything is closed properly.

---

## The Whole Picture

```plaintext
┌─────────────────────────────────────────────────────┐
│               TCP Connection                        │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SETTING UP:                                        │
│  You ─── SYN ────> Website                          │
│  You <─ SYN-ACK <── Website                         │
│  You ─── ACK ────> Website                          │
│                                                     │
│  SENDING DATA:                                      │
│  You ─── DATA[seq=101] ──> Website                  │
│  You <── ACK[106] <────── Website                   │
│  (Checking for lost stuff and resending it)         │
│                                                     │
│  CLOSING DOWN:                                      │
│  You ─── FIN ────> Website                          │
│  You <── ACK <───── Website                         │
│  You <── FIN <───── Website                         │
│  You ─── ACK ────> Website                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Why You Should Care

1. **HTTP/HTTPS relies on TCP** - Every time you visit a website, this happens
    
2. **API calls use TCP** - Your `fetch()` or `axios.get()` kicks this off
    
3. **WebSockets use TCP connections** - Real-time apps use TCP
    
4. **Databases use TCP** - Your app talks to databases using TCP
    

**See it for yourself:**

```bash
# Watch the TCP handshake happen
curl -v https://chaicode.com
```

Look for lines like `* Connected to chaicode.com` - that's the handshake!

---

## What's the Catch?

TCP isn't always the best choice. Keep in mind:

* **It takes time to set up**: 3 packets before anything moves
    
* **Resending slows things down**: Waiting for lost packets isn't fast
    
* **Things need to be in order**: You have to wait for missing packets
    
* **Extra info**: Each packet has TCP-related data
    

That's why we have **UDP** for things where speed is more important than perfection!

---

## Main Points

1. **TCP 3-way handshake** makes connections reliable
    
2. **Sequence numbers** keep data in order
    
3. **Acknowledgements** confirm things arrived, and spot when things are missing
    
4. **Resending** fixes lost packets
    
5. **Saying goodbye** makes sure everything closes cleanly
    
6. **This just happens** when you use HTTP/HTTPS
    

---

## What's Next?

Now you know how TCP makes reliable chats happen on the internet. But what's actually being said in those chats?

Next up, we're looking at **HTTP itself** - status codes, headers, methods, and how to build APIs. You'll see how HTTP structures the messages that TCP sends!

**Want to see it in action?** Open Chrome DevTools → Network tab. Click on any request and look at the Timing tab. You'll see:

* **Connection Start**: The TCP handshake
    
* **SSL/TLS Handshake**: Setting up encryption (next time!)
    
* **Request/Response**: The actual HTTP conversation
    

See? You're already spotting these things in real life!

Remember: The best engineers understand not just what they're building, but *how* it all works behind the scenes. You're getting there!

### Previous blogs :

* [Network Devices (Explained Simply)](https://iwritenetwork.hashnode.dev/network-devices-explained-simply)
    
* [DNS resolution](https://iwritenetwork.hashnode.dev/dns-resolution)
    
* [DNS records](https://iwritenetwork.hashnode.dev/dns-records)
    
* [**cURL for beginners**](https://iwritenetwork.hashnode.dev/curl)
