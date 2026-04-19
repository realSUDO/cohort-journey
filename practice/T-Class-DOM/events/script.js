
const btn = document.getElementById('btn')
//
// btn.onclick = function() {
// 	console.log('Button Clicked')
// }
//
// btn.onclick = function() {
// 	console.log('Button Clicked Again')
// }
//
// btn.addEventListener('click',() => {
// 	console.log('Button Clicked with addEventListener')
// })
//
// btn.addEventListener('click',() => {
// 	console.log('2nd')
// })

const parent = document.getElementById('parent')
const child = document.getElementById('child')
const body = document.body


body.addEventListener('click',() => {
	console.log('Body Clicked')
})

parent.addEventListener('click',() => {
	console.log('Parent Clicked')
})

child.addEventListener('click',() => {
	console.log('Child Clicked')
})
