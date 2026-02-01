Hey everyone!

In the [last article](https://iwritenetwork.hashnode.dev/dns-resolution), we looked at how a DNS query finds the right IP address. We talked about DNS like it's the internet's phone book. Now, let's get into something more specific..

**How does your browser *really* know where a website is?**

Think about mailing a letter. You need a street and a house number.. maybe where to forward it if the person moved or is not present at the address.

DNS records are like those instructions. They tell the internet how to handle your domain.

We’ll Cover :

* NS record
    
* A and AAAA record
    
* CNAME
    
* MX record
    
* TXT record
    

Let's check them out, one by one.

---

## **Quick Reminder : DNS is Like a Phone Book**

DNS is like a giant, shared phone book. You search for a **name** (like [`chaicode.com`](http://chaicode.com)), and it gives you a **number** (like `192.168.1.1`).

But this phone book has different kinds of entries :

* Some give you the real number
    
* Some tell you who takes care of the phone book for that name
    
* Some send calls to another name
    
* Some deal with mail
    

These different entry types are **DNS records.** Each one fixes a specific problem.

---

## **1\. The NS Record : Who's the Boss Here?**

**What it is:** The **Name Server (NS) Record**.  
**What it does:** It tells everyone, If you need info about my domain, then ask *these servers*.

**For example:**

NS records are like a **school reception desk**..  
When you visit it, the receptionist tells you which office or classroom to go to..  
Like wise NS records tell the internet **which DNS server to ask for domain information.**

**Why we need it:**

Without NS records, DNS wouldn't know where to go beyond the TLD servers. They make the structure we talked about earlier.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769772074675/eb833cb8-c351-48f3-9423-fce973150c78.png align="center")

---

## **2\. A Record : The Real Street Address**

**What it is:** The **Address (A) Record**.  
**What it does:** It links a domain name to an **IPv4 address**.

**For example:**

[`chaicode.com`](http://chaicode.com) → `93.184.216.34`

Like.. Rohan's Pizza is at 123 Main Street. It's the direct, physical ( kind of ) spot.

**Why we need it:**

This is the **most basic record**. When you type a URL, the A record gives your browser the IP address to connect to. Without it, your browser is lost.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769772539520/a1f87728-a7df-4b66-a7fa-5f900ce8c159.png align="center")

---

## **3\. AAAA Record : The Future-Ready Address**

**What it is:** The **Quad A (AAAA) Record**.  
**What it does:** It links a domain name to an **IPv6 address.**

**Why it exists:**

We're running out of IPv4 addresses (like `192.168.1.1`). IPv6 addresses are longer (like `2001:0db8:85a3:0000:0000:8a2e:0370:7334`) and have way more options. AAAA records are for the future, but many sites use both A and AAAA records today.

**Easy rule:** A is for IPv4, AAAA is for IPv6. Same idea, different formats..

---

## **4\. CNAME Record : The Alias**

**What it is:** **Canonical Name (CNAME) Record**.  
**What it does:** Makes one domain name point at *another domain name*, not right at an IP.

**For example:**

Like a business card that says, Email me at [rohit@example.com](mailto:john@gmail.com) instead of a phone number.

[`www.chaicode.com`](http://www.chaicode.com) → [`chaicode.com`](http://chaicode.com)  
`m.youtube.com` → `youtube.com`  
`myproject.vercel.app` → `projects.iwritecode.in`

**Why it's useful:**

* **Easy to keep updated:** Update one A record (for [`chaicode.com`](http://chaicode.com)), and all CNAMEs pointing to it update too.
    
* **Manage subdomains:** Make lots of subdomains without dealing with separate IPs.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769773486162/24567953-8556-4659-9225-efc5d520e7b3.png align="center")

**Important: A vs CNAME**

* **A Record:** Points right at an IP address
    
* **CNAME Record:** Points to another domain name (which then has an A record)
    

You can't have both an A record and a CNAME for the same name. Pick one..

---

## **5\. MX Record: Where Mail Goes**

**What it is:** **Mail Exchange (MX) Record**.  
**What it does:** Tells the world where to send **email** for your domain.

**For example:**

If someone emails [`hello@chaicode.com`](mailto:hello@chaicode.com), MX records tell the sending mail server *Send that to* [`mail.chaicode.com`](http://mail.chaicode.com) (or Google Workspace, or Zoho, etc.)

**Why it's needed:**

Without MX records, **email to your domain won't work.** They're separate from A records because email servers are often different from web servers.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769774393310/02ed8de9-48c0-4013-b26c-5e3b05726dd5.png align="center")

**Keep in mind:** MX records point to domain names (which then need A records), not right to IPs.

---

## **6\. TXT Record: The Verification Note**

**What it is :** **Text (TXT) Record**.  
**What it does:** Holds text for different reasons.. mostly of **verification** and **security**.

**Common uses:**

* **Show you own the domain :** Hey Google, here's a code in a TXT record to prove I own this domain.
    
* **Email security:** [SPF](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/), [DKIM](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/), [DMARC](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/) records to stop email scams
    
* **General notes:** Any text you want to link to your domain
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769775000690/4e0dc1c5-bded-4f1d-ac78-1de914cd692a.png align="center")

**For example:**

It’s like.. putting up a Security System Installed sign board. The sign itself doesn't secure the house, but it tells people ( and systems ) that *yes this is secured* .

---

## **How It All Works : A Real Example**

Let's see how a small website, [`mystore.com`](http://mystore.com), might be set up:

```plaintext
DNS Records for mystore.com:

NS        → ns1.hostingprovider.com
          → ns2.hostingprovider.com
          
A         → 203.0.113.10
AAAA      → 2001:db8::1

CNAME     www → mystore.com
          shop → mystore.com
          
MX        → mail.mystore.com (priority 10)
          
A         mail → 203.0.113.20  (for the MX record)
          
TXT       → v=spf1 include:_spf.google.com ~all
          → google-site-verification=abc123...
```

**What happens when you go to** [`www.mystore.com`](http://www.mystore.com):

1. DNS looks up the NS records to find the right server
    
2. Follows the CNAME from [`www.mystore.com`](http://www.mystore.com) to [`mystore.com`](http://mystore.com)
    
3. Gets the A record IP (`203.0.113.10`)
    
4. Your browser goes to that IP
    

**What happens when you email** [`contact@mystore.com`](mailto:contact@mystore.com):

1. The sender's mail server looks up MX records for [`mystore.com`](http://mystore.com)
    
2. Sees it should deliver to [`mail.mystore.com`](http://mail.mystore.com)
    
3. Looks up the A record for [`mail.mystore.com`](http://mail.mystore.com) (`203.0.113.20`)
    
4. Sends the email there
    
5. The TXT records help make sure the email is real
    

---

## **Quick Guide : Your DNS Record Sheet**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769775516723/7478d6d2-e7a1-4702-a2f2-212c8573fda8.png align="center")

---

## **Common Questions**

**Q: Can I use CNAME for my main domain (like** [**chaicode.com**](http://chaicode.com)**)?**

A: Usually, it's not a good idea. Use A/AAAA records for your main domain, and CNAME for subdomains.

**Q: What if I change where my site is hosted?**

A: Update your NS records to point to the new host, and they'll handle the rest.

**Q: How long do DNS changes take?**

A: Usually 1-48 hours because of DNS updating around the world.

---

## **What's Next?**

Now that you know about DNS records, you can:

1. Play with `nslookup` commands
    
2. **Set up your own domain**
    
3. **Fix DNS problems** when a site isn't loading
    
4. **Set up email** for your domain
    
5. **Understand SSL/TLS setup** (which uses TXT records for verification)
    

Try this : Go to your domain settings and find these records. You’ll see they're the controls you use to handle your site.
