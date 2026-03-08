// const cache = {};
// const sqCache = {}
//
// function add (a,b){
// 	const key = `${a}:${b}`
// 	if (cache[key]){
// 		return cache[key];
// 	}
// 	const result = a+b;
// 	cache[key] = result
// 	return a+b;
// }
// console.log(add(3,4))
//
//
// function square(n){
// 	if(sqCache[n]){
// 		return sqCache[n];
// 	}
// 	return n*n;
// }

// NOT AT ALL A GOOD PATTERN

function createOptimizedVersion(fn) {
	const cache = {}; // Tiffin
	return function(...args) {
		const key = JSON.stringify(args);
		if (cache[key]) {
			console.log(`Returning from cache`,key);
			return cache[key];
		}

		const result = fn(...args);
		cache[key] = result;
		return result;
	};
}

function add(a, b) {
	const result = a + b;
	return result;
}
function square(n) {
	return n * n;
}


const optimizedAdd = createOptimizedVersion(add)
console.log(optimizedAdd(2,3));

const optimizedSq = createOptimizedVersion(square)
console.log(optimizedSq(5))


// multiple times big sqaure.. 
console.time("startCode")
square(23423235)
console.timeEnd("startCode")

console.time("startCode")
square(23423235)
console.timeEnd("startCode")

console.time("startCode")
square(23242335)
console.timeEnd("startCode")

console.time("startCode")
square(256235)
console.timeEnd("startCode")

console.time("startCode")
square(2234235)
console.timeEnd("startCode")

console.time("startCode")
square(2323425)
console.timeEnd("startCode")

console.time("startCode")
square(2323435)
console.timeEnd("startCode")

console.log("------------- optimized -----------------")
// multiple time in optimezed square ... 
console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")

console.time("startCode")
optimizedSq(23423235)
console.timeEnd("startCode")


