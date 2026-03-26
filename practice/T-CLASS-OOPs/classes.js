// --- Classes .. cleaner syntax for the same prototype pattern ---

class User {
  constructor(name, score) {
    this.name = name
    this.score = score
  }
  login() {
    console.log(`${this.name} logged in`)
  }
}

// --- Inheritance ---
// Admin gets everything User has, plus its own stuff
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
const guest = new User("Suresh", 90)

admin.login()           // inherited from User
admin.deleteUser(guest) // Ramesh deleted Suresh


// --- Static Methods ---
// belong to the class, not instances.. good for utility functions
class MathUtils {
  static add(a, b)      { return a + b }
  static subtract(a, b) { return a - b }
}

console.log(MathUtils.add(5, 3))      // 8
console.log(MathUtils.subtract(5, 3)) // 2


// --- Getters & Setters ---
// control how properties are read/written
class Person {
  constructor(name, age) {
    this._name = name  // _ = convention for "treat as private"
    this._age  = age
  }
  get name() { return this._name }
  set name(val) { this._name = val }

  get age() { return this._age }
  set age(val) {
    if (val < 0) return console.log("Age can't be negative")
    this._age = val
  }
}

const person = new Person("John", 30)
person.age = -5  // Age can't be negative
person.age = 25
console.log(person.age) // 25


// --- Private Fields (#) ---
// truly private.. enforced by the language, not just convention
class Bank {
  #balance = 0

  get balance() { return this.#balance }

  set balance(amount) {
    if (amount < 0) return console.log("Amount can't be negative")
    this.#balance += amount
    console.log(`Deposited ${amount}. Balance: ${this.#balance}`)
  }
}

const bank = new Bank()
bank.balance = 500  // Deposited 500. Balance: 500
bank.balance = 200  // Deposited 200. Balance: 700
// bank.#balance    // SyntaxError .. can't touch private fields from outside
