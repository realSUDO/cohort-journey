/**
 * 🚂 Dabbawala Delivery Tracker - Closures
 *
 * Mumbai ke famous dabbawala system ka tracker bana! Yahan closure ka
 * use hoga — ek function ke andar private state rakhna hai jo bahar se
 * directly access nahi ho sakta. Sirf returned methods se access hoga.
 *
 * Function: createDabbawala(name, area)
 *
 * Returns an object with these methods (sab ek hi private state share karte hain):
 *
 *   - addDelivery(from, to)
 *     Adds a new delivery. Returns auto-incremented id (starting from 1).
 *     Each delivery: { id, from, to, status: "pending" }
 *     Agar from ya to empty/missing, return -1
 *
 *   - completeDelivery(id)
 *     Marks delivery as "completed". Returns true if found and was pending.
 *     Returns false if not found or already completed.
 *
 *   - getActiveDeliveries()
 *     Returns array of deliveries with status "pending" (copies, not references)
 *
 *   - getStats()
 *     Returns: { name, area, total, completed, pending, successRate }
 *     successRate = completed/total as percentage string "85.00%" (toFixed(2) + "%")
 *     Agar total is 0, successRate = "0.00%"
 *
 *   - reset()
 *     Clears all deliveries, resets id counter to 0. Returns true.
 *
 * IMPORTANT: Private state (deliveries array, nextId counter) should NOT
 *   be accessible as properties on the returned object.
 *   Two instances created with createDabbawala should be completely independent.
 *
 * Hint: Use closure to keep variables private. The returned object's methods
 *   form a closure over those variables.
 *
 * @param {string} name - Dabbawala's name
 * @param {string} area - Delivery area
 * @returns {object} Object with delivery management methods
 *
 * @example
 *   const ram = createDabbawala("Ram", "Dadar");
 *   ram.addDelivery("Andheri", "Churchgate"); // => 1
 *   ram.addDelivery("Bandra", "CST");         // => 2
 *   ram.completeDelivery(1);                   // => true
 *   ram.getStats();
 *   // => { name: "Ram", area: "Dadar", total: 2, completed: 1, pending: 1, successRate: "50.00%" }
 */
export function createDabbawala(name, area) {
	let orders = [];
	let id_counter = 1;

	let addDelivery = function(from, to) {
		if (arguments.length !== 2 || !from|| !to)
			return -1;
		let id = id_counter;
		id_counter++;
		let order = {
			id,
			from,
			to,
			status: "pending",
		};
		orders.push(order);
		return id;
	};

	let completeDelivery = function(id) {
		if (arguments.length !== 1) return false;
		let orderId = id;
		const found = orders.some((t) => {
			const valid = t.id === orderId && t.status === "pending";
			if (valid) t.status = "completed";
			return valid;
		});
		return found;
	};

	let getActiveDeliveries = function() {
		let active = [];
		for (let order of orders) {
			if (order.status === "pending") active.push(order);
		}
		return active;
	};

	let getStats = function() {
		let completed = orders.length - getActiveDeliveries().length
		let pending = getActiveDeliveries().length
		let total = orders.length
		const stats = {
			name: name,
			area: area,
			total: total,
			completed: completed ,
			pending: pending,
			successRate: total===0?"0.00%":String(((completed / total) * 100).toFixed(2) + "%"),
		};
		return stats;
	};

	let reset = function() {
		id_counter = 1;
		orders = [];
		return true;
	};

	return {
		addDelivery,
		completeDelivery,
		getActiveDeliveries,
		getStats,
		reset,
	};
}

// let alsd = createDabbawala ("rohit","dharavi")
// let order1 = alsd.addDelivery("rohini","dwarka");
// let order2 = alsd.addDelivery("switzerland","mirzapur");
// let order3 = alsd.addDelivery("abudabi","kerela");
// console.log(alsd.getActiveDeliveries())
// alsd.completeDelivery(2)
// console.log(alsd.getActiveDeliveries())
// console.log(alsd.getStats())
// alsd.reset()
// console.log(alsd.getStats())
// console.log(alsd.getActiveDeliveries())
