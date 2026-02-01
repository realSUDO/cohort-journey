---

**Welcome readers**! To the first article of this **blog**. By the end of this article, you will have a brief knowledge about network devices that are mentioned in subtitle.

So, Let’s get going..

> Read this blog as if you’re talking to yourself .. just a tip!
> 
> ~sumitwrites

# The Difference b/w Internet and Network

**Okay.. I hear “Network” and “Internet” all the time, but.. aren’t they the same thing?**

Actually no.

**A network** is just *things talking to each other.* When I talk across the room to my roommate.. That’s a tiny network. If i do the same in my house, that’s a bigger network.

**The internet** is *everybody’s network connected together* *like a web* . It’s like every person’s phone can suddenly call to the every other person’s phone. **Its a mega-network** *of networks* .

# How is internet reaching me ?

Now think about it. There’s this huge global internet out there. But how does it get inside my house and onto my laptop ?

It turns out, data doesn’t just teleport here magically right.. **ISP** (Internet service providers) provides the internet. It travels through a chain of devices, each one with a specific job. Kind of like a **relay race.**

```plaintext
My device <-- Router <-- Modem <-- ISP network <-- Internet <-- Website servers
```

---

## First thing : The Modem

“**That ugly box from my ISP”**

It’s job is just to connect my **network** to the internet. That’s it.

* **HOW :** The ISP’s signal is like a foreign language. The modem translates it into something my device can understand ( and vice-versa )
    
* It converts **digital data** to **analog signals** (MODULATION) and **analog signals** to **digital data** (DEMODULATION)
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769694746214/43be0400-332b-4be2-b881-c5188a0f83ae.png align="center")

## Router : The director

If the Modem connects me to the internet, the router **directs traffic inside my house.**

> We generally refer the box with lights and antenna in our houses as router, but it’s not exactly it.  
> The box is more than router.

Okay, Let’s break it down..

* The Router creates my local Wi-Fi network.
    
* It gives my every device ( Mobile , laptop , TV etc. ) a unique local address ( like `192.168.1.6` ).
    
* **Sends requests out** from devices (e.g `google.com` entered in my laptop ) to the internet via the modem, and when **response comes back** ( e.g google’s response ) It **makes sure that response reaches right device** (e.g to my laptop and not my brother’s PS4 )
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769696482339/8c3b217d-83cd-40bc-a07c-bc17169b87ff.png align="center")

## Inside the Router (BOX)

Now when i think , I understand that router is creating Wi-Fi network and **assigning addresses**, also managing **Wired connections** , e.g Ethernet devices *connected to LAN ports of router* but how?

Inside that box there are switches that keeps multiple devices connected within a local network

### Switch

This is a network device which **connects** multiple devices within a **local area network**.

* It has volatile memory component to store mac address of connected device
    
* It doesn’t necessarily have to *involve internet .*
    
* E.g My laptop connected to my printer via switch
    
* E.g My multiple laptops connected to my router via Ethernet to form a LAN
    

### Hubs

Hubs are used to **connect** multiple devices within a **local area network**.

But wait.. isn’t it same as switch ?

* No , It used to send data to **all the connected devices** instead of intended one.
    
* It had no memory to *store addresses of devices in local network*
    
* These are **OUTDATED** **NOW** .
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769699908984/88876f8a-c949-48ef-80e1-4ae82c856f6c.png align="center")

### Firewall : The security guard

Right, so I have this connection to the outside world ( The internet ) , now what stops bad stuff from **coming in** ?

That’s **Firewall**

* **HOW** : Inspects all data packets. Blocks sus traffic (hacks, malware) and allows safe traffic based on rules.
    
* At homes, the firewall is usually built into that router box. When I get a pop-up asking, *“Allow this app to communicate?”..* that’s a software firewall on your computer doing the similar job
    

![ISP Redundancy](https://sc1.checkpoint.com/documents/R80.20SP/WebAdminGuides/EN/CP_R80.20SP_Chassis_NextGenSecurityGateway_Guide/Resources/Images/Images-for-Maestro-NextGen-GW/ISP-Redundancy-on-Security-Gateway-1.png align="center")

### Load Balancers : The traffic police of internet

> This isn’t at my home. It’s for big websites and apps

Imagine one popular food street with a huge line, and 10 identical stalls in it , with one person directing crowd *you go to stall 4, you go to stall 7* etc.

That’s **Load balancer** , where food stalls are group of servers for handling a huge amount of requests. Because single server can’t handle millions of requests at once

* **How:** Sits in front of server farms. Sends each new user to the least busy server. Reroutes if one fails.
    

![What is a Load Balancer? — Every Software Engineer must know | by  Dineshchandgr - A Top writer in Technology | Medium](https://miro.medium.com/v2/resize:fit:1100/1*FvIEqZkliiP10A5125hb2Q.png align="center")

---

**HOW IT ALL FITS:**

**My Home:**  
`Internet → Modem → Router (with built-in Firewall & Switch) → My Devices`

**Big Company/App:**  
`Internet → Load Balancer → Firewall → Router → Switches → Hundreds of Servers`

**Bottom Line:** The internet reaches me through this simple chain of specialized devices. Now I know what each box actually does..

---

Alright, You have reached the end of article.

Follow the next blog in series : [How domain names are converted to IP addresses](https://iwritenetwork.hashnode.dev/dns-resolution-explained)

Follow me on socials :

* [Github](https://github.com/realSUDO)
    
* [Twitter (X)](https://x.com/just_multiply)
    
* [Linkedin](https://linkedin.com/in/just-multiply)
