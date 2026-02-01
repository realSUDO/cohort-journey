---

If you’re a curious mind , you would’ve definitely given a thought to ‘How git works’. And even if you didn’t, there’s no doubt that you’re a curious mind because you’re still continuing to read. So, let me be the guide to the journey where I’ll unwrap the magic of the blackbox that is tricking around your codes, whenever you run commands like :

```bash
git add 
git commit 
git log 
git branch 
#etc
```

Hence, sit tight while we pop the hood. By the end of this, you’ll definitely be a more confident git user.

---

## Structure of .git

```bash
> ls .git
> 󰊢 COMMIT_EDITMSG  󱁻 config  󰡯 description  󰡯 HEAD   hooks  󰡯 index   info   logs   objects   refs
> #content tree
.git/
├── hooks
├── info
├── logs
│   └── refs
│       └── heads
├── objects
│   ├── 0d
│   ├── 1f
│   ├── 30
│   ├── 87
│   ├── f7
│   ├── info
│   └── pack
└── refs
    ├── heads
    └── tags
```

Overwhelming? Don’t worry, let me unwind it in pieces, and in mean time read the story written below :

> In a certain kingdom, there was a magnificent royal garden, an old man named Arthur was its gardener.
> 
> Arthur was brilliant , but reckless.. moving hedges one day, transplanting roses the next. After a storm ruined his new layout, he broke down because he couldn’t remember how things were before.
> 
> Arthur then hires a methodical clerk for his garden. Each evening the clerk would carry a scroll with him, and take the perfect snapshot of the garden but only of the changes Arthur finalized for the day. “The day of moved oak”, he labeled one. “The Evening of construction of mountain” the another.
> 
> These scrolls were stored in hidden archive room of clerk, each linked to last. If Arthur regretted a change would simply walk to the archive room, find the past snapshot and would restore the garden exactly as it was.

So how does this garden tale translates to code? Quite literally , the magnificent garden is your **Project folder**, you are **Arthur**, the Clerk is **git** , the snapshot is a **commit** , archive room is `.git/` directory, label is **commit message**.

So how git works? Look at the diagram below

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1768652279846/24771d53-955b-4c77-b0de-acc6ec66e60f.png align="center")

You finalize some changes, then you `git add` to move them to staging area. After that you hit `git commit -m “commit message”` to commit changes, and each commit is a given a unique 40 character commit id (SHA-1 key). In our story, *the notebook clerk had when Arthur was telling him finalized changes* is called **staging area.**

Now we know enough to talk about the structure of `.git/` .. If we think a little bit more, `.git/` is nothing but a storage of some data, so what data are we storing there? let’s take a look

### Core Tracking

* **HEAD** → It’s a pointer to what you’re currently working on.
    
* **index** → it’s the staging area — Your **ready to commit** changes.
    
* `Objects/` → Database of all file contents and commits (the actual snapshots)
    
    ```bash
    ├── objects
        ├── 0d #first two letters of a commit id
        ├── 1f #1f3105afaeb139ea5a49ebd1725bab6277f6ed93 is full id
        ├── 30
        ├── 87
        ├── f7
        ├── info
        └── pack
    ```
    
    * Git organizes objects into 256 folders (`00/` through `ff/`) based on the first 2 characters of their SHA-1 hash.
        
    * Objects are of generally three types in git and stored in zlib compressed format :
        
        * `blob` → stores the actual file contents (**80%** of snapshot) , no info about author or parent.
            
        * `tree` → these are directory maps which contains other trees and blobs (**15%** of snapshot).
            
        * `commit` → snapshot labels ( **5%** of snapshot ) .
            
    * Each folder in objects has a file named as *last 38 characters hash key* . Let’s consider a commit for examlpe :
        
        ```bash
            
        commit 1f3105afaeb139ea5a49ebd1725bab6277f6ed93 (HEAD -> main)
        Author: Arthur <arthursmith@royalgarden.com>
        Date:   Fri Jan 16 23:44:27 1989 +0530
                
                Removed lily and planted flowers
        ```
        
        * This will be stored in `objects/1f/3105afaeb139ea5a49ebd1725bab6277f6ed93` as an object of type commit.
            
        * Its respective blob will be stored in `objects/` too.
            
            > *"Wait, where are the 'diffs'? Nowhere! Git only stores complete file states. The 'removed lily' you see in* `git log` is calculated by comparing two snapshots!"
            
        * *pro-tip* : An object can be printed using `git cat-file -p <hash-key>`
            
* **COMMIT\_EDITMSG** → Your last commit message draft.
    

### Branches & Tags

* `refs/heads` → Where branch pointer live ( main , master , feature-abc etc. )
    
* `refs/tags` → Where version tags live (v1.0 , release etc. ) [*read more*](https://git-scm.com/book/en/v2/Git-Basics-Tagging)
    

### History

* `logs/` → Diary of everything that has happened (branch moves , commits etc )
    
* **config** → Your personal git settings
    

### Extras

* `hooks/` → Custom scripts that run automatically (like before commit)
    
* `info/` → Miscellaneous info files (like what we to ignore)
    
* **description** → (rarely used) Old file for we interfaces.
    

That’s pretty much about it Arthur. Exploring it on your machine again will make it more clear.
