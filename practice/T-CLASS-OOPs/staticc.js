// --- Encapsulation + Abstraction ---
// user calls start().. doesn't know or care about _heat/_brew internals
class CoffeeMachine {
  _heat() { console.log("heating water..") }
  _brew() { console.log("brewing coffee..") }

  start() {
    this._heat()
    this._brew()
  }
}

// --- Polymorphism ---
// TeaMachine overrides _heat and _brew.. but start() stays the same
// same interface, different behavior depending on the object
class TeaMachine extends CoffeeMachine {
  _heat() { console.log("heating water for tea..") }
  _brew() { console.log("brewing tea..") }
}

new CoffeeMachine().start()
// heating water..
// brewing coffee..

new TeaMachine().start()
// heating water for tea..
// brewing tea..

// note: private methods (#method) can't be overridden by subclasses
// use _method (convention) when you need polymorphism across subclasses
