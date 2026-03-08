// // ab toh synchronous ho gya hai..
// const turant = Promise.resolve("turant")
// console.log(turant)
//
//
// array of results if all promises resolves.. and rejected when any of the promise is rejected
//  const allPromise = Promise.allSettled([
// 	Promise.resolve("yay"),
// 	Promise.resolve("Wow"),
// 	Promise.resolve("Noway")
// ])
//
// allPromise.then(console.log)
//
// const anyPromise = Promise.any([
// 	Promise.reject("Chai"),
// 	Promise.resolve("coffee"),
// 	Promise.resolve("code"),
// ])
//
// anyPromise.then(console.log);
//
// // Best story.. of this .any .all .lol

// const hPromise = new Promise((res, rej) => {
	// setTimeout(() => {
		// res("Masterji");
	// }, 3000);
// });

// this should print masterji
//
// function nice() {
// 	let result = hPromise.then((res) => {
// 		console.log(res);
// 	});
// 	console.log(result)
// }


// async function nice() {
// 	const result = await hPromise;
// 	console.log(result);
// }
// nice();
