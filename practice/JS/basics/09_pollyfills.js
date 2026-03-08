let myArr = [
	{ name: "rahul", surname: "sathu" },
	{ name: "verma", surname: "sonu" },
];

// ------------------------ forEach -----------------------//

// making custom forEach
Array.prototype.phorEach = function(fn) {
	for (let i = 0; i < this.length; i++) {
		fn(this[i]);
	}
};
// og for each
myArr.forEach((t) => {
	let lol = t.name.toUpperCase();
	console.log(lol)
});

// custom for each comparison
console.log("\nTHIS IS PHOR EACH\n")
myArr.phorEach((t) => {
	let lol = t.name.toUpperCase();
	console.log(lol);
});

// -------------------- forEach done ---------------------

// ---------------------- map ----------------------------

// making custom map
Array.prototype.naksha = function(fn) {
	let result = []
	for (let i = 0; i < this.length; i++) {
		result.push(fn(this[i]));
	}
	return result
};

// og map
let newArr = myArr.map((t) => {
	let name = t.name.toUpperCase()
	let surname = t.surname.toUpperCase()
	return {
		name,
		surname
	}
});
console.log(newArr)

// testing naksha
let newArr2 = myArr.naksha((t) => {
	let name = t.name.toUpperCase()
	let surname = t.surname.toUpperCase()
	return {
		name,
		surname
	}
});
console.log(newArr2)

// ------------------------ finishing Map -----------------------//



// ---------------------- filter ---------------------------- // 

Array.prototype.blunt = function(fn) {
	let result = []
	for (let i = 0; i < this.length; i++) {
		if(fn(this[i])) result.push(this[i])
	}
	return result
};

let num = [23,21,48,3,58,28,47,42]

let filteredNum = num.filter((t)=>t%2===0)
console.log(filteredNum)
let bluntNum = num.blunt((t)=>t%2===0)
console.log(bluntNum)

// ------------------------ finishing filter -----------------------//

// -------------------------- reduce ------------------------------//

Array.prototype.teduce = function(fn,initial){
	let accumulator = initial
	for (let i = 0 ; i<this.length ; i++){
		accumulator = fn(accumulator,this[i])
	}
	return accumulator
}

let summ = num.teduce((acc,curr)=>{
	acc+=curr
	return acc
},0)
console.log(summ)

let summm = num.teduce((acc,curr)=>{
	acc+=curr
	return acc
},0)
console.log(summ)

// -------------------------- reduce ends ------------------------------//


// -------------------------- find ----------------------------- //

let findArr = [22,48,74,46,23,43,57]

Array.prototype.search = function(fn){
	for (let i = 0 ; i<this.length ; i++){
		if (fn(this[i])) return this[i]
	}
}
let finn = findArr.find((t)=>t%2!==0)
console.log(finn)
let dhundho = findArr.search((t)=>t%2!==0)
console.log(dhundho)

// -------------------------- find ends ----------------------------- //

// -------------------------- some ----------------------------- //
Array.prototype.kuch = function(fn){
	for (let i = 0 ; i<this.length ; i++){
		if (fn(this[i])) return true
	}
	return false
}

let mobileStand = findArr.kuch((t)=>t%2!==0)
console.log(mobileStand)
let mila = findArr.kuch((t)=>t%2!==0)
console.log(mila)

// ---------------------------- some ends ---------------------------// 

// ---------------------------- includes ----------------------------//

Array.prototype.shaamil = function(value){
	for (let i = 0 ; i<this.length ; i++){
		if (this[i]===value) return true
	}
	return false
}
console.log(findArr.shaamil(300))

// ---------------------------- includes ends ----------------------------//

// ------------------------------ keys -------------------------------- //

Object.prototype.chaabi = function(value){
	let result = []
	for (let key in this){
		result.push(key)
	}
	return result
	
}

Object.prototype.balue = function(value){
	let result = []
	for (let key in this){
		result.push(this[key])
	}
	return result
}


// ---------------------------- concat ---------------------------------------// 

Array.prototype.myCat = function(...arr) {
	let res = [];

	for (let i = 0 ; i < this.length ; i++){
		res.push(this[i]);
	}

	for (let ar in arr){
		if (Array.isArray(ar)){
			for (let i = 0 ; i < this.length ; i++){
				res.push(ar[i]);
			}
		}
		else {
			res.push(ar);
		}
	}

	return res;
}

let array1 = ["hello","there","i","like"]
let array2 = ["java",undefined,"like"]
let array3 = null
console.log(array1.concat(array2,array3))

// ----------------------------- concat finished ------------------------------// 

// ---------------------------- flat ------------------------------//

Array.prototype.buffed= function() {
	let res = [];
	for (let ar of this){
		if(Array.isArray(ar)){
			res.push(...ar.buffed())
		}
		else {
			res.push(ar)
		}
	}
	return res;
}

let rohit = ["shetty",["sa","sapera",[34,55]],["rohit",84]]
console.log(rohit.buffed())
