// plain objects don't scale.. same method copied everywhere = memory waste
const user1 = { name: "Abhitesh", score: 99, increment() { return ++this.score } }
const user2 = { name: "Rohit",    score: 80, increment() { return ++this.score } }


// --- Prototype ---
// every object has a hidden link (__proto__) to another object
// if a property isn't found on the object, JS walks up the chain

const base = { name: "Rohit", score: 99 }
const derived = { __proto__: base }

console.log(derived.name)   // "Rohit" .. found via prototype chain
derived.name = "kshitij"    // sets on derived itself, base is untouched
console.log(base.name)      // "Rohit" .. unchanged

// chain: derived --> base --> Object.prototype --> null
// that's why derived.toString() works even though we never defined it


// --- Constructor Function ---
// use `new` to create objects from a blueprint
function User(name, score) {
  this.name = name
  this.score = score
}

// shared methods go on prototype.. not inside the function (avoids duplication)
User.prototype.increment = function () {
  return ++this.score
}

const u1 = new User("shampy", 99)
const u2 = new User("ronaldo", 80)

console.log(u1.increment()) // 100

// both instances share the same prototype
console.log(u1.__proto__ === User.prototype) // true
console.log(u2.__proto__ === User.prototype) // true
