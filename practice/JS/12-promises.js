// console.log("Swastik");
// Promise.resolve("resolve value").then((v) => {
// 	console.log("Microtask ", v);
// });
//
// console.log("Avishek");
//
// /*
// WORK GETTING DONE
//
// sabse pehli preference --> Synchronous code
// dusri preference --> Microtask queue (Promises)
// teesi preference --> Macrotask queue (setTimeout, setInterval, setImmediate, I/O, process.nextTick, mutation observer, etc.)
// */
//
// function boilWater(ms) {
// 	return new Promise((res, rej) => {
// 		console.log("Boiling water...");
// 		if (typeof ms !== "number" || ms < 0) {
// 			rej(new Error("Invalid time provided"));
// 		}
// 		setTimeout(() => {
// 			res("Water boiled in " + ms + " milliseconds");
// 		}, ms);
// 	});
// }
//
// boilWater(400)
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log("Error:", error.message);
// 	});
//
//

function grindLeaves() {
	return Promise.resolve("Leaves ground");
}

function steepTea(time) {
	return new Promise((res) => {
		setTimeout(() => res(`Tea steeped for ${time} minutes`), time * 1000);
	});
}

function addSugar(sppons) {
	return `Added ${sppons} spoons of sugar`;
}


grindLeaves() // --> returns a promise that resolves to "Leaves ground"
	.then(steepTea(2)); // --> returns a promise that resolves to "Tea steeped for 2 minutes"
	
