Hey there, future backend devs ! Welcome back to the Fifth blog of this series.

So far so good , we’ve covered **how DNS helps us find servers** and **how cURL lets us talk to them.** Today, we're tackling a big question :

**How does data actually get from one place to another on the internet ?**

Think of it like sending a package. You have two options:

* **A reliable delivery service** ( with tracking, delivery confirmation, and retries if something goes wrong ).
    
* **A super-fast messenger** ( who chucks it in the general direction and hopes for the best ).
    

That's basically TCP vs UDP – the internet's two main ways of shipping data. Let's see when each one comes in handy.

---

## The Need for Rules : Protocols

The internet needs *rules* (we call them protocols) for sending data, just like roads need traffic laws. When it comes to how data is transported, we've got two main choices :

* **TCP** (Transmission Control Protocol) = The careful, reliable delivery service.
    
* **UDP** (User Datagram Protocol) = The fast, no frills messenger.
    

## TCP : The Phone Call Protocol

TCP is like making a phone call :

1. You dial the number (establish a Connection)
    
2. You say, Can you hear me? (a handshake)
    
3. You talk, making sure the other person hears everything (reliable delivery).
    
4. You say Bye before hanging up (a proper goodbye).
    

**Here's what makes TCP special :**

* **Connection-focused**: It sets up a Connection before sending data.
    
* **Reliable**: It makes sure everything arrives (it will resend lost data).
    
* **Ordered**: Data arrives in the same order it was sent.
    
* **Adjusts to the network**: It changes speed depending on network conditions.
    
* **Checks for mistakes**: It finds and fixes damaged data.
    

## UDP : The Loudspeaker Protocol

UDP is more like shouting through a loudspeaker:

1. You shout your message.
    
2. You don't know who hears it.
    
3. You don't wait for a response.
    
4. You might repeat the message if it's important.
    

**Here's what makes UDP different:**

* **No Connection needed**: It just sends data without a handshake.
    
* **Not reliable**: There's no guarantee the data will arrive.
    
* **No order**: Data might arrive in any order.
    
* **Faster**: Less stuff to worry about means less delay.
    
* **Goes full speed**: It sends data as fast as it can.
    

## TCP vs UDP: A Quick Comparison

| Feature | TCP (The Careful Courier) | UDP (The Fast Messenger) |
| --- | --- | --- |
| Connection | Needed | Not Needed |
| Reliability | Guaranteed | Best effort |
| Ordering | Yes | No |
| Speed | Slower | Faster |
| Common Uses | Web browsing, email, files | Video calls, games, DNS |

**Think of it this way:**

* TCP is like sending **important papers** by certified mail.
    
* UDP is like **shouting across a room** – quick, but someone might miss it.
    

## When to Use TCP ( The Get It Right Protocol )

Pick TCP when you **need every single bit of data** to arrive safely and in the correct order.

### TCP in the Real World:

1. **Web Browsing (HTTP/HTTPS)** - You need the whole webpage.
    
2. **Email (SMTP)** - You want the complete email.
    
3. **File Transfers (FTP)** - Missing parts make the file useless.
    
4. **Database Connections** - Messed-up data can break things.
    
5. **Secure Shell (SSH)** - Commands need to be perfect.
    

**Ask yourself :** If missing or mixed-up data would break my app, I should use TCP.

## When to Use UDP (The Get It Fast Protocol)

Go with UDP when **speed is more important than perfection**.

### UDP in the Real World:

1. **Video Calls (Zoom, Teams)** - Skipping a frame is better than freezing.
    
2. **Online Gaming** - An old position update is worthless.
    
3. **DNS Lookups** - Small data, lots of requests, so speed matters.
    
4. **Voice over IP (VoIP)** - It's better to have real-time talk than perfect sound.
    
5. **Live Streaming** - It's better to be live than perfect.
    

**Ask yourself :** If real-time is vital and we can deal with some lost data, then UDP is a good option

---

## Where Does HTTP Fit?

Now, let's tie this into what you already know:

**HTTP** (Hypertext Transfer Protocol) isn't about *how* data is sent.

**HTTP** sits on top:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769781686897/84981d0e-e817-4494-a021-e96c62ba4e99.png align="center")

**It's like this:**

* **TCP** = The postal service (makes sure it gets there).
    
* **HTTP** = The letter format (Dear..., Body..., Sincerely...).
    
* **You can't send a letter without the postal service!**
    

## The TCP-HTTP Deal : An Example

When you go to [`https://chaicode.com`](https://chaicode.com):

1. **TCP Connection Happens**
    
    ```plaintext
    Your Browser: Hey, can we talk? (SYN)
    Server: Yeah, let's talk (SYN-ACK)
    Your Browser: Cool, here's my request (ACK)
    ```
    
2. **HTTP Request Sent via TCP**
    
    ```plaintext
    GET / HTTP/1.1
    Host: chaicode.com
    (Sent reliably)
    ```
    
3. **HTTP Response Delivered via TCP**
    
    ```plaintext
    HTTP/1.1 200 OK
    Content-Type: text/html
    ...
    (Arrives in order)
    ```
    
4. **TCP Connection Closes**
    
    ```plaintext
    Your Browser: I'm done, thanks! (FIN)
    Server: Okay, bye! (ACK + FIN)
    Your Browser: Bye! (ACK)
    ```
    

## Visual Summary: Putting It All Together

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769781976385/12f0a60d-18f6-41e4-99f1-8de2b56c5c48.png align="center")

---

## Common Questions

* ### Is HTTP the same as TCP?
    
    **Nope!** HTTP uses TCP. HTTP says *what* to say (get me a webpage), and TCP makes sure it arrives.
    
* ### Can HTTP use UDP?
    
    Normally, HTTP/1.x and HTTP/2 use TCP. But **HTTP/3** uses QUIC (which runs on UDP)! It's a fancy way to make web browsing faster.
    
* ### Which should I pick for my app?
    
    * **Website or API**? → TCP (via HTTP)
        
    * **Real-time game or video app**? → Think about UDP
        
    
* ### Do I need to deal with TCP/UDP myself?
    
    Almost never! Your coding language handles TCP for you.
    

---

## Tips for Web Devs

1. **You usually work with HTTP**, which uses TCP.
    
2. **TCP makes sure** your API calls don't lose data.
    
3. **Connection** usually means TCP Connection.
    
4. **Slowdowns?** TCP might be retrying lost packets.
    
5. **Want real-time?** Check out WebSockets (still TCP) or WebRTC (can use UDP).
    

## Quick Guide

**Use TCP when:**

* Data must be perfect
    
* Order is important
    
* A bit of delay is okay
    
    * Examples: Websites, APIs, databases, email
        

**Use UDP when:**

* Real-time is key
    
* Losing some data is acceptable
    
* Low delay is a must
    
    * Examples: Games, video calls, live streams, DNS
        

## What's Next?

Now you know how data travels reliably (TCP) or quickly (UDP), and how HTTP fits into the picture.

## **Task :**

* Open Chrome DevTools → Network tab.
    
* Click a request and look for Connection ID or the timeline.
    
* You're seeing TCP Connections in action!
    

> Remember : Good backend folks know not just what they're building, but how it gets across the internet. Keep it up! 🌐 *Keep shipping, keep learning!*

### Previous blogs :

* [Network Devices (Explained Simply)](https://iwritenetwork.hashnode.dev/network-devices-explained-simply)
    
* [DNS resolution](https://iwritenetwork.hashnode.dev/dns-resolution)
    
* [DNS records](https://iwritenetwork.hashnode.dev/dns-records)
    
* [**cURL for beginners**](https://iwritenetwork.hashnode.dev/curl)
