function x() {
	for (var i = 1; i <= 6; i++) {
		function close(x) {
			setTimeout(function() {
				console.log(x);
			}, x * 1000);
		}
		close(i); // creates new copy of x everytime settimeout is called.. 
	}
}
x();

function y() {
	for (var i = 0 ; i<6 ; i++) {
		setTimeout(function() {
		console.log(i);
		},i*1000);
	}
}

y()
