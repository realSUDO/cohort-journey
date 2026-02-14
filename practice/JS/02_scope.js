// Naming cases ..

// cases..
let soThisIsCamelCase = null;
var and_this_is_snake_case = undefined;

// Symbol..

const obj = {
	name: "Piyush",
	add: {
		planet: "earth",
		earth: {
			countinent: "asia",
			asia: {
				country: "India",
				india: {
					state: "Punjab",
					punjab: {
						city: "Patiala",
						patiala: {
							village: "pinkcity",
							pinkcity: {
								house: "Pinkhouse",
								pinkhouse: {
									room: "Pinkroom",
									Pinkroom: "Piyush sir -- Mr.Single ",
								},
							},
						},
					},
				},
			},
		},
	},
};


const newObj = obj
console.log(obj)
newObj.add.earth.asia.india.punjab.patiala.pinkcity.pinkhouse.Pinkroom = "Hitesh sir"
let oldObjName = obj.add.earth.asia.india.punjab.patiala.pinkcity.pinkhouse.Pinkroom 

console.log(oldObjName) // reference hi diya hai , hence proved.. 

newObj.add.earth.asia.india.punjab.patiala.pinkcity.pinkhouse = "Chairoom"
console.log(obj)


// --------------- MAKING SHALLOW COPY --------------- // 

let shallowObject = {...obj}
shallowObject.name = "Mannu"
shallowObject.add.earth = "america"

console.log("\n\n\n\n\n\n\n\n\n")
console.log(shallowObject)
console.log(obj)


// -------------- Shallow copy verified.. -------------//
