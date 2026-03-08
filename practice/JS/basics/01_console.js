// Revision of JS

console.log("This is console.log");
console.table([
	{
		name: "Rohit",
		age: 24,
		isSingle: true,
	},
	{
		name: "Shobhit",
		age: 28,
		isSingle: false,
	},
	{
		name: "mohit",
		age: 34,
		isSingle: true,
	},
]);

console.warn("freakin warning.. "); // Prints warnings.. in LOGS (browser)

console.log("\n\n\n\n");

console.log("Group starts.. ");
console.group();
console.log("group log 1");
console.log("group log 3");
console.log("group log 2");
console.groupEnd();

console.log("\nGroup 2 starts.. ");
console.group();
console.log("group log 1");
console.log("group log 3");
console.log("group log 2");
console.groupEnd();

console.log("\n\nconsole.time");
console.time();
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
sleep(2000);

console.timeEnd();

console.log("\n\nconsole.count");

