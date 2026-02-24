let arr = [
	{ name: "Rahul", age: 30 },
	{ name: "shobhit", age: 20 },
	{ name: "harry", age: 30 },
];

// arr.forEach((t)=>console.log(t))

// write a for each function from scratch 
function forEach(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i, arr);
	}
}

forEach(arr, (t) => console.log(t))



