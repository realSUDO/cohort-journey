// String.prototype.moymoy = function(){
// 	return this.toUpperCase()
// }
// let mystr = "something"
//
//
//
// console.log(mystr.moymoy()) // intentional.. lower for upper lol

function multiply(a, b) {
	console.log(this.name);
	return a - b;
}
let myObj = {
	name: "moy moy",
};

// Create a new function that always multiplies by 2
const double = multiply.bind(myObj, 2);

console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20
