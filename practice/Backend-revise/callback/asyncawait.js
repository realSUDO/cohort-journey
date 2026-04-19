// Async alaways returns a promise.. either it wrap or return as it is

function checkInventory() {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			console.log("Inventory checked");
			let stock = 3000;
			let outOfStock = 40;
			res({
				stock,
				outOfStock,
			});
		}, 1000);
	});

	return promise;
}

function makePayment(value) {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			if (value > 1000) {
				rej(new Error("Server down : Payment failed"));
			} else {
				console.log("Payment made");
				res();
			}
		}, 3000);
	});

	return promise;
}
// console.log("Checking inventory");
// function main() {
// 	checkInventory()
// 		.then(() => {
// 			console.log("hehe");
// 		})
// 		.then(() => makePayment(900))
// 		.catch((e) => {
// 			console.log(e.message);
// 		});
// }

async function getOrderSummary() {
	let orderDetails = null;
	try {
		orderDetails = await checkInventory();
		await makePayment(3000);
	} catch (e) {
		console.log(e.message);
	}
	if (orderDetails) {
		console.log(`Remaining : ${orderDetails.stock}`);
		console.log(`Finished : ${orderDetails.outOfStock}`);
	} else {
		console.log("Couldn't retrieve stock data");
	}
}

getOrderSummary().then(() => {
	console.log("Order summary completed");
});
