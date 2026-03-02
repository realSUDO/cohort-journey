document.addEventListener('DOMContentLoaded',(event) => {

const inputElement = document.getElementById('username');

	function handleButtonClick() {
		const inputValue = inputElement.value;
		console.log("The user entered" , inputValue)
		let response ; 
		fetch(`https://api.github.com/users/${inputValue}/repos`)
		.then(response => {
			if (!response.ok){
				throw new Error("Network response was not ok : ") + response.statusText;
			}
				return response.json();
		})
			.then(data => {
				// work with the JSON data
				console.log(data);
				const newDiv = document.createElement('div');
				newDiv.textContent = `${data.length}`
				document.body.appendChild(newDiv)


			})
			.catch(error => {
				console.log("Fetch error : " , error);
			})
	

	}
	clickme.addEventListener('click',handleButtonClick);

})


