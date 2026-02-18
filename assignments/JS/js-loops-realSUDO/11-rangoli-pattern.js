/**
 * 🎨 Priya ki Diwali Rangoli
 *
 * Priya Diwali pe rangoli banati hai. Uska pattern ek diamond shape mein
 * hota hai stars (*) ka. Tu usse help kar pattern generate karne mein!
 *
 * Rules (use nested for loops):
 *   - Input n determines the size of the diamond
 *   - The diamond has 2n - 1 rows total
 *   - Row i (1-indexed) of the top half has i stars
 *   - Row i of the bottom half mirrors the top
 *   - Stars are separated by a single space
 *   - Each row has leading spaces for center alignment
 *   - The widest row has n stars: "* * * ... *" (2n-1 chars wide)
 *   - No trailing spaces on any row
 *
 * Pattern for n=3:
 *     *
 *    * *
 *   * * *
 *    * *
 *     *
 *
 * (Each row is a string in the returned array)
 *
 * Validation:
 *   - Agar n positive integer nahi hai (0, negative, decimal, non-number),
 *     return empty array []
 *
 * @param {number} n - Size of the diamond (number of stars in the widest row)
 * @returns {string[]} Array of strings forming the diamond pattern
 *
 * @example
 *   rangoli(1) // => ["*"]
 *   rangoli(2) // => [" *", "* *", " *"]
 *   rangoli(3) // => ["  *", " * *", "* * *", " * *", "  *"]
 */
export function rangoli(n) {
	if (n <= 0 || !Number.isInteger(n)) return [];
	let rows = 2 * n - 1;
	let half = n;

	/*
	 * --> 2 space 1 star
	 * *  --> 1 space 1 star 1 space 1 star
	 * * *  --> 1 star 1 space 1 star 1 space 1star
	 * *  --> 1 space 1 star 1 space 1 star
	 */

	let result = [];
	for (let i = 1; i <= n; i++) {
		let space = "";
		let star = "";
		for (let ajeeb = 0; ajeeb < half - i; ajeeb++) {
			space += " ";
		}
		for (let ajeeb = 0; ajeeb < i; ajeeb++) {
			star += "*";
			if (ajeeb < i - 1) star += " ";
		}

		result.push(space + star);
	}

	for (let j = n - 2; j >= 0; j--) {
		result.push(result[j]);
	}

	return result;
}
/**
 * 
 ========================================================================================================
 ========================================================================================================

						
						   O K A Y  || I   W I L L || D O   T H I S || T O M O R R O W


 ========================================================================================================
 ========================================================================================================
 *
 */
