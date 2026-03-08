// .. we want to make a program.. to print..
// numbers. from 1 to 6..
// with 1 second delay in each number
// can't use let
//
function print() {
	for (var i = 1; i <= 6; i++)
		setTimeout(() => {
			console.log(i);
		},i*1000);
}
print()
// //
// function x () {
// 	if(true) {
// 		var k = 46;
// 	}
// }
// console.log(k)

function print() {
	for (var i = 1; i <= 6; i++)
		console.log(i);
}
print()
