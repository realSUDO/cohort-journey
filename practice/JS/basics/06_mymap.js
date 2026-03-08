const nums = [23,2,83,19]
const result = myMap(e => e*2,nums)

const resultMap = nums.map((t)=>t*2)

function myMap(fn,arr) { 
	const result = [];
	for (let i = 0 ; i <arr.length ; i++) {
		const currEl = arr[i];
		const num = fn(currEl) ;  // fn(currEl) --> e=>e*2 here..  e = currEl
		result.push(num)
	}
	return result
}

console.log(result)
console.log(resultMap)
