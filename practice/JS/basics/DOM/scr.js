function x() {
	for (let i = 1; i <= 6; i++) {
		// function close(o) {
			setTimeout(function() {
				console.log(i);
			}, i * 1000);
		}
		// close(i); // creates new copy of x everytime settimeout is called.. 
	// }
}
x();


//
// // function y() {
// // 	for (var i = 0 ; i<6 ; i++) {
// // 		setTimeout(function() {
// // 		console.log(i);
// // 		},i*1000);
// // 	}
// // }
// // y()
// //
// function regular () {
// 	console.log("regular function executed")
// }
// regular()
// setTimeout(function() {
// 	console.log("time out executed")
// },0)
// //
// setTimeout(function() {
// 	console.log("6")
// }, 6000)
//
// setTimeout(function() {
// 	console.log("5")
// }, 5000)
//
// setTimeout(function() {
// 	console.log("4")
// }, 4000)
// setTimeout(function() {
// 	console.log("3")
// }, 3000)
// setTimeout(function() {
// 	console.log("2")
// }, 2000)
// setTimeout(function() {
// 	console.log("1")
// }, 1000)
