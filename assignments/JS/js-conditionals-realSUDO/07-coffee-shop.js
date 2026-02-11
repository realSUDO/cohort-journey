/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
	var sizes = {
		small: 3.0,
		medium: 4.0,
		large: 5.0,
	};

	var types = {
		regular: 0,
		latte: 1,
		cappuccino: 1.5,
		mocha: 2,
	};

	if (
		!Object.keys(sizes).includes(size) ||
		!Object.keys(types).includes(type)
	) {
		console.log(Object.keys(sizes).includes(size));
		return -1;
	}

	var price = sizes[size] + types[type];

	if (extras.whippedCream == true) {
		price = price + 0.5;
	}
	if (extras.extraShot == true) {
		price = price + 0.75;
	}

	return price;
}

// var a = calculateCoffeePrice("small", "regular", {
// 	whippedCream: true,
// 	extraShot: true,
// });
// console.log(a);
// var size = "small"
// var sizes = {
// 	small: 3.0,
// 	medium: 4.0,
// 	large: 5.0,
// };
// var b = !Object.keys(sizes).includes(size)
// console.log(b)
