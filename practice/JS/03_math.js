let value = Math.trunc(12.34); // removes decimal .. and returns the integral part of a number
console.log(value);
console.log(typeof value);

let hex = 0xadff; // 10 13 15 15  --> 15 + 15*16 + 13*16^2 + 10*16^3
console.log(
	"Manual work : ",
	`${15 + 15 * 16 + 13 * 16 ** 2 + 10 * 16 ** 3}`.padStart(12, "-"),
);
console.log("Automated : ", String(parseInt(hex)).padEnd(16, " |-_*_-| ")); //verified hex..

// done padding..  (IN JS TOO)

console.log(void Symbol("HEHEHEH")); // done void

let strrr = "stringgg";
console.log(strrr.at(99)); // at is smart.. gives undefined..
// whereas .. charAt gives.. "  "

// symbol talks --------------------------------- //

const UserData = {
	// newSym : "no hello",  //typeof --> string
	[newSym]: "no hello", //now this newSym is not a string key..
	name: "Johncena",
	age: 29,
	isWrestler: true,
	isCarOwner: false,
	favDish: ["Malaichap", "bubble_sort"],
	"secret pass": "xyys93493",
};

console.log(typeof UserData[newSym]);
//
//
console.log(Object.getOwnPropertySymbols(UserData)); //symbol hello there
console.log(Object.keys(UserData)); //no symbol key here..
