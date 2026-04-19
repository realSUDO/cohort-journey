
// promise objects are immuatable 

// Promise is an object represneting eventual completion or failure of an asynchronous operation..

let user = fetch("https://api.github.com/users/")
console.log(user)

user
	.then(res => res.json())
	.then(data => data.bio)
	.then(console.log)

console.log("Hello there")
