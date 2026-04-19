
// okay so we gonna see callback function...

function add (a,b,cb) {
	let result =  a+b
	cb(result)
}

let sum = add(23,43,console.log)
