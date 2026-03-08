
let obj = {
	name : "Rahul",
	surname : "Sharma"
}

let printName = function (place,food){
	return `Hi I'm ${this.name} from ${place} and i love ${food}`
}

console.log(printName("Grurgram","Lassi"))

let printedStuff = printName.call(obj,"gurugram","rajma")

console.log(printedStuff)
