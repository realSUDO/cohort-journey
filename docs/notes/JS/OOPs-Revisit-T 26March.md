# OOPs in JavaScript .. Short Notes

---

## Why not plain objects?

Writing objects manually for every user is a mess..

```js
const user1 = { name: "A", score: 99, increment() { return ++this.score } }
const user2 = { name: "B", score: 80, increment() { return ++this.score } }
// same method copied everywhere.. memory waste.. not scalable
```

---

## Prototype

Every object in JS has a hidden link to another object called its **prototype**. If a property isn't found on the object itself, JS looks up the chain.

```js
const user2 = { name: "Rohit", score: 99 }
const user3 = { __proto__: user2 }

console.log(user3.name) // "Rohit" .. found via prototype chain
user3.name = "kshitij"  // sets on user3 itself, doesn't touch user2
```

Chain looks like: `user3 --> user2 --> Object.prototype --> null`

---

## Constructor Function

A regular function used with `new` to create objects. The `new` keyword:
1. Creates a fresh object
2. Sets its `__proto__` to `FunctionName.prototype`
3. Runs the function with `this` = new object
4. Returns the object

```js
function User(name, score) {
  this.name = name
  this.score = score
}

// add shared methods on prototype .. not inside the function
User.prototype.increment = function () {
  return ++this.score
}

const u1 = new User("shampy", 99)
u1.increment() // 100
```

---

## Classes .. syntactic sugar over prototypes

Classes are just a cleaner way to write the same constructor + prototype pattern.

```js
class User {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  increment() {
    return ++this.score
  }
}

const u1 = new User("shampy", 99)
u1.increment() // 100
```

Under the hood `User.prototype.increment` is still what's happening.

---

## Inheritance .. `extends` + `super`

```js
class Admin extends User {
  constructor(name, score, isAdmin) {
    super(name, score) // must call super before using `this`
    this.isAdmin = isAdmin
  }
  deleteUser(user) {
    console.log(`${this.name} deleted ${user.name}`)
  }
}

const admin = new Admin("Ramesh", 99, true)
admin.login()        // inherited from User
admin.deleteUser(u1) // own method
```

---

## Static Methods

Belong to the class itself.. not to instances. Useful for utility functions.

```js
class MathUtils {
  static add(a, b) { return a + b }
}

MathUtils.add(5, 3) // 8
// new MathUtils().add() .. won't work
```

---

## Getters and Setters

Let you control how properties are read and written.

```js
class Person {
  constructor(name, age) {
    this._name = name
    this._age = age
  }
  get age() { return this._age }
  set age(val) {
    if (val < 0) return console.log("Age can't be negative")
    this._age = val
  }
}

const p = new Person("John", 30)
p.age = -5  // "Age can't be negative"
p.age = 25  // works fine
```

---

## Private Fields (`#`)

Truly private.. can't be accessed outside the class at all.

```js
class Bank {
  #balance = 0

  get balance() { return this.#balance }

  set balance(amount) {
    if (amount < 0) return console.log("Can't be negative")
    this.#balance += amount
  }
}

const b = new Bank()
b.balance = 500   // works via setter
b.#balance        // SyntaxError .. truly private
```

---

## The 4 Pillars of OOP

**Encapsulation** .. bundle data + behavior together, hide internals. Use `#` for real privacy or `_` as a convention.

**Abstraction** .. expose only what's needed. User calls `start()`, doesn't care about `_heat()` or `_brew()`.

**Inheritance** .. child class gets parent's stuff via `extends`. Avoids repeating code.

**Polymorphism** .. same method name, different behavior depending on the class.

```js
class CoffeeMachine {
  _heat() { console.log("heating water") }
  _brew() { console.log("brewing coffee") }
  start() { this._heat(); this._brew() }
}

class TeaMachine extends CoffeeMachine {
  _heat() { console.log("heating water for tea") }
  _brew() { console.log("brewing tea") }
}

new CoffeeMachine().start() // heating water .. brewing coffee
new TeaMachine().start()    // heating water for tea .. brewing tea
// same start() call .. different behavior .. that's polymorphism
```

> Note: private methods (`#method`) can't be overridden by subclasses. Use `_method` (convention) when you need polymorphism.

---

## FAQ

**Q: What's the difference between `__proto__` and `prototype`?**
`prototype` is a property on constructor functions .. it's the object that becomes the `__proto__` of all instances. `__proto__` is on every object and points to its actual prototype.

```js
u1.__proto__ === User.prototype // true
```

**Q: Can we change an object's prototype after creation?**
Yes, via `Object.setPrototypeOf(obj, newProto)` .. but don't. It kills performance and causes weird bugs.

**Q: Is a class just a function?**
Yes. `typeof User === "function"`. Classes are syntactic sugar, the prototype chain is the same underneath.

**Q: When to use `static`?**
When the method doesn't need `this` (instance data). Think utility/helper functions like `MathUtils.add`.

**Q: `_name` vs `#name`?**
`_name` is just a naming convention saying "treat this as private" .. but it's still accessible. `#name` is enforced by the language and truly inaccessible from outside.

**Q: What does `new` actually do?**
Creates empty object, links its `__proto__` to the constructor's `prototype`, runs the constructor with `this` = that object, returns it.
