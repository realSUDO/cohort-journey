let obj = {
	name : "RAHUL",
	surname : "GURJAR"
}
let printName = function(x,y,z){
	return `${this.name} is a ${this.surname} from X: ${x} Y: ${y} Z: ${z}`
}

console.log(printName.call(obj,"bijnor"))
console.log(printName.apply(obj,[-34,23,-1933]))
let namePrint = printName.bind(obj)
console.log(namePrint(-34,23,5868))


// ----------------------- call -------------------- //

Function.prototype.phone = function(obj,...args){
	this = 
}

printName.phone()

