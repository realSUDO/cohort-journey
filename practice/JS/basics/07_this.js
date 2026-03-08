// let obj = {
// 	key: "value",
// 	key2: "value2",
// 	key3: ["child1", "child2"],
// 	a : () => {
// 		console.log(this.key); //undefined
// 		console.log(typeof this); //object
// 		console.log(this); // {}
// 		return "somethign";
// 	}
//
// 	// mymethod() {
// 	// 	this.key3.forEach((element) => {
// 	// 		console.log(this.key + " " + this.key2 + " " + element);
// 	// 	});
// 	// },
// };
//
// console.log(obj.a());

function saySomething() {
    "use strict"
  console.log(this); // global obj ref
	return "defined"
}
console.log(saySomething()); //global ref .. and then defined.. 
