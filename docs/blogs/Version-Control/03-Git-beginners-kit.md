---

> “This is a beginners guide for git , It is not a detailed guide. If you're an advanced user, you may skip this.”

## Understanding git

Git is a version control system , which lets you keep track of the project in your project folder, and makes life easier in terms of falling back to the working piece of code , collaboration , and experimentation.

Imagine changing multiple files months ago in production for a release, and finding out that there’s a bug in it , but you don’t remember where and what was changed. Which may have caused the unwelcoming behavior of code and loss to the organization.

Version control systems solve such kinds of problem by keeping tracks of your thing, and Git is one of them. ( [*click here*](https://iwritevcs.hashnode.dev/why-version-control-exists-and-why-you-cant-work-without-it) *for more about version control* )

---

## Git : Working and terminologies

Git operates within your project’s root folder from .git directory , It treats every file as **Untracked** in start, which you can track and move to **Staging area** , and then finally **Commit** to save changes.

Let’s understand this via this diagram :

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769085295388/01df65e3-31dc-486b-aeb7-a8d831834602.png align="center")

* **Untracked files** : Files which are not being tracked by git at the moment
    
* **Ignored files** : We tell git to ignore specific files via `.gitignore` file.
    
* **Tracked files** : These are the files which are being tracked by git
    
* **Staging area** : The ready-to-commit stage
    
* **Commit** : A snapshot of the folder ( *refer to* [*this*](https://version-control-realsudo.hashnode.dev/inside-dot-git) *for HOW* )
    
* **HEAD** : It is a pointer to the current working commit
    

So the git flows like :

Track → Initial commit → Track changes → Move to staging area → Make commits → Fallback to previous commit if needed → Works in branches , and much more.

---

## Using git ( Basic Git Commands )

Let’s get started via configuring username and email for git , It helps you set up your identity ( Which you’ll need when making future commits )

```bash
git config --global user.name "username" #sets the username
git config --global user.email "youremail@something.com" #sets the email
```

### Initializing git

```bash
git init # this will create a .git folder in your current directory
```

### Tracking and moving files to staging area

`git add <filename>` this command starts tracking the untracked file and moves it to staging area and for the tracked files, it moves files with changes to staging area.

In the start you’ve to add each file with `git add` which you want to track.

```bash
# it can't track files above the .git/ directory
# this command is to add a single file
git add <filename or filepath>  

# this command is to add all the files in project root except ignored 
git add .  
#or 
git add -A 

# this command is to move all the tracked but changed files
# to staging area
git add -u
```

### Deletion

Safely delete a file without it’s deletion being tracked

```bash
git rm <filename>
```

### Committing changes

It moves files from staging area and saves actual snapshot of the project and generates a 40 characters SHA-1 crypto-key as commit id

```bash
git commit <filename> -m "commit message"
```

### Status

Shows the current status of the repository

```bash
git status
```

### Logs and history

It shows the commit history with id’s , messages , and author details

```bash
#for detailed logs
git log 

#for simple logs
git log --oneline
```

### Branches

These are the commands which let’s you play with branches in the commit tree

```bash
# List all the branches
git branch

#Creates a new branch
git branch <new-branch-name>

#switch to the desired branch
git switch <branch-name>
git checkout <branch-name>

#rename the branch 
git branch -M "renammed name"

#create branch with new name and switch to it
git checkout -b <new-branch-name>
```

### Fallback

You can peek to a commit using git checkout and you can also reset changes or revert changes to a specific commit .

Checkout moves head to the commit , reset moves head and unstage or reset changes based on flags (`—soft , —hard , —mixed` )

Revert creates a new commit which is complement (negation) to the given commit , which nullifies the changes but keeps history. It’s the safest way to fallback.

```bash
#Move head to a specific commit
git checkout <commit-id> 

#Reset changes
git reset --soft <commit-id>  #keep changes of staged file , commit history and moves head
git reset --mixed <commit-id> #keep changes but unstage them and moves head
git reset --hard <commit-id> #hard resets to that commit and erase history

#Revert changes
git revert <commit-id> 
git revert <commit-id>..<commit-id-prev> #revert series of commits
```

### Differences

Git is all about differences , so here’s the command which shows you the changes/differences between two commits

```bash
#Shows changes made since last commit
git diff

#shows changes between commit A and commit B : 
git diff <commit-a-id> <commit-b-id>
```

### Remote ( Additional )

Git also allows you to push your changes to a remote repository from your local repository e.g **Github** , **Gitlab** etc.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1769089693535/bda58172-983c-426d-8809-2fdeeeb556ae.png align="center")

```bash
# Clone a cloud repository to your machine
git clone <repository-url> 

# Set up remote repository
git remote add <remote-name> <remote-url>
#for example 
git remote add origin https://github.com/me/myrepo.git

#show all remotes
git remote -v

#push to remote
git push <remote-name> <branch-name>

#pull from remote
git pull <remote-name> <remote-branch-name>
```

---

## What to do next ?

Make and empty directory , initialize git in it using `git init` . Rename your branch as “matchbox” . Make a file named matchbox.md and make following changes in file.

* Write “Match count 59” and commit it
    
* Write “Match count 58” and commit it
    
* Write “Match count 57” and commit it
    
* Create another branch and switch to it named “red-matchbox”
    
* Write “Match count 56” and commit it
    
* Switch to matchbox and check match count , then reset to match count 58
    
* Write “Match count 11” and commit it
    
* Revert the “Match count 11” commit
    
* See the difference between root commit and current commit
    

Congratulations!! You’ve just got your hands on git via this short exercise.

Now you can proceed to your project directory or read official docs [here](https://git-scm.com/docs/git) .
