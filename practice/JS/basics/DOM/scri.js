console.log("first");


function x() {
	var y = "something";
	function z() {
		console.log("Hello")
		console.log(y)
	}
	z();	
}

x();
