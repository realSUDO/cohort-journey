// // function init() {
// // 	let name = "Mozilla";
// // 	function displayName() {
// // 		// displayName() is the inner function , that forms a closure
// // 		console.log(name); // use variable in the parent function
// // 	}
// // 	displayName();
// // }
// //
// // init();
//
//
// // problem statement  : the function.. if the reference is being held of inner function.. then why we getting outer values ref ?? 
//
// // --> this is called closure.. 
//
// function makeFunc() {
// 	const name = "Mozilla";
// 	function displayName() {
// 		console.log(name);
// 	}
// 	return displayName;
// }
//
// const myFunc = makeFunc();
//
// myFunc(); // mozilla
//
// // closures are created everytime a function is created.. 
// // closure --> tiffin box.. 
//
// // bhale hi outer fn execute hoke khtm hogya hai.. 
//

console.log()
// example 1 
function startCompany() {
	function ca (name)  {
		return `Name of your company is ${name}`
	}
	return ca
}

let makeCompany = startCompany()

// console.log(makeCompany("Myntra"))

// Example 2 

function eternal(guest) {
	const guestName = guest
	let count = 0 ; 

	function zomato(){
		console.log(`Hi ${guestName}, from zomato`);
	}
	function blinkit() {
		if (count == 1) return;
		console.log(`Hit ${guestName} from blinkit`)
		count++;
	}
	// zomato()
	// blinkit()
	return {
		zomato,
		blinkit,
	};
}

const superhero = eternal("superhero")

// controllling how many times function will runnn
superhero.blinkit()=
superhero.blinkit()
superhero.blinkit()

// react userMemo() 




