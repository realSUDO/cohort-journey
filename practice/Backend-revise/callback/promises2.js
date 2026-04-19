function checkInventory() {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			console.log("Inventory checked");
			res();
		}, 1000);
	});

	return promise;
}

function makePayment() {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			console.log("Payment made");
			rej(new Error("Server down"));
		});
	});

	return promise;
}
console.log("Checking inventory");
checkInventory()
	.then(() => {
		console.log("hehe");
	})
	.then(makePayment)
	.catch((e) => {
		console.log(e.message);
	});
