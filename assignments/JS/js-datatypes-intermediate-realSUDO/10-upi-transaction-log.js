/**
 * 💸 UPI Transaction Log Analyzer
 *
 * Aaj kal sab UPI pe chalta hai! Tujhe ek month ke transactions ka log
 * milega, aur tujhe pura analysis karna hai - kitna aaya, kitna gaya,
 * kiski saath zyada transactions hue, etc.
 *
 * Rules:
 *   - transactions is array of objects:
 *     [{ id: "TXN001", type: "credit"/"debit", amount: 500,
 *        to: "Rahul", category: "food", date: "2025-01-15" }, ...]
 *   - Skip transactions where amount is not a positive number
 *   - Skip transactions where type is not "credit" or "debit"
 *   - Calculate (on valid transactions only):
 *     - totalCredit: sum of all "credit" type amounts
 *     - totalDebit: sum of all "debit" type amounts
 *     - netBalance: totalCredit - totalDebit
 *     - transactionCount: total number of valid transactions
 *     - avgTransaction: Math.round(sum of all valid amounts / transactionCount)
 *     - highestTransaction: the full transaction object with highest amount
 *     - categoryBreakdown: object with category as key and total amount as value
 *       e.g., { food: 1500, travel: 800 } (include both credit and debit)
 *     - frequentContact: the "to" field value that appears most often
 *       (if tie, return whichever appears first)
 *     - allAbove100: boolean, true if every valid transaction amount > 100 (use every)
 *     - hasLargeTransaction: boolean, true if some valid amount >= 5000 (use some)
 *   - Hint: Use filter(), reduce(), sort(), find(), every(), some(),
 *     Object.entries(), Math.round(), typeof
 *
 * Validation:
 *   - Agar transactions array nahi hai ya empty hai, return null
 *   - Agar after filtering invalid transactions, koi valid nahi bacha, return null
 *
 * @param {Array<{ id: string, type: string, amount: number, to: string, category: string, date: string }>} transactions
 * @returns {{ totalCredit: number, totalDebit: number, netBalance: number, transactionCount: number, avgTransaction: number, highestTransaction: object, categoryBreakdown: object, frequentContact: string, allAbove100: boolean, hasLargeTransaction: boolean } | null}
 *
 * @example
 *   analyzeUPITransactions([
 *     { id: "T1", type: "credit", amount: 5000, to: "Salary", category: "income", date: "2025-01-01" },
 *     { id: "T2", type: "debit", amount: 200, to: "Swiggy", category: "food", date: "2025-01-02" },
 *     { id: "T3", type: "debit", amount: 100, to: "Swiggy", category: "food", date: "2025-01-03" }
 *   ])
 *   // => { totalCredit: 5000, totalDebit: 300, netBalance: 4700,
 *   //      transactionCount: 3, avgTransaction: 1767,
 *   //      highestTransaction: { id: "T1", ... },
 *   //      categoryBreakdown: { income: 5000, food: 300 },
 *   //      frequentContact: "Swiggy", allAbove100: false, hasLargeTransaction: true }
 */
export function analyzeUPITransactions(transactions) {
	if (!Array.isArray(transactions) || transactions.length === 0) return null;
	transactions = transactions.filter(
		(t) => t.amount >= 0 && ["credit", "debit"].includes(t.type),
	);
	if (transactions.length === 0) return null;
	let cred = transactions.filter((t) => t.type === "credit");
	let totalCredit = cred.reduce((a, t) => a + t.amount, 0); // ....... total credit = 10 , total debit = 2 , total = 12 , netblanace = 8 , 12 - 10
	let totalDebit = transactions.reduce((a, t) => a + t.amount, 0) - totalCredit; // 50 - 3
	let netBalance = totalCredit - totalDebit;
	let transactionCount = transactions.length;
	let avgTransaction = Math.round(
		transactions.reduce((a, t) => a + t.amount, 0) / transactionCount,
	);
	let higheshtTransaction = (transactions.filter(
		(t) => t.amount === Math.max(...transactions.map((t) => t.amount)),
	)).pop(); //as it's the only obj in array

	// let categoryBreakdown = Object.fromEntries(
	// 	transactions.map((t) => [t.category, t.amount]),
	// );

	let categoryBreakdown = transactions.reduce((a, t) => {
		a[t.category] = (a[t.category] || 0) + t.amount; 
		return a;
	}, {});

	let frequentContactObj = transactions.reduce((a, b) => {
		a[b.to] = (a[b.to] || 0) + 1; // okay so .. a[b.to] let's say rohan..  --> undefine || 0 = 0 , then 0 + 1 = 1 , then return a,  a[rohan] becomes 1 , and in 2nd iteration.. a[b.to] || 0 --> 1 || 0 --> 1 and 1+1 = 2 , or a[b.to] = 2  damn!!!
		return a;
	}, {});

	let maxCount = Math.max(...Object.values(frequentContactObj));
	let frequentContact = Object.keys(frequentContactObj).find(
		(a) => frequentContactObj[a] === maxCount,
	);
	let allAbove100 = transactions.every((t) => t.amount > 100);
	let hasLargeTransaction = transactions.some((t) => t.amount >= 5000);


	return {
		totalCredit: totalCredit,
		totalDebit: totalDebit,
		netBalance: netBalance,
		transactionCount: transactionCount,
		avgTransaction: avgTransaction,
		highestTransaction: higheshtTransaction,
		categoryBreakdown: categoryBreakdown,
		frequentContact: frequentContact,
		allAbove100: allAbove100,
		hasLargeTransaction: hasLargeTransaction


	}
}

