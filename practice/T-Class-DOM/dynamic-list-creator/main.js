const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
	if (input.value === "") {
		alert("na karein janaab")
		return;
	}
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.textContent = "Delete";
	delBtn.classList.add("delete");

	li.textContent = input.value;
	li.appendChild(delBtn);
	
	delBtn.addEventListener("click", () => {
		li.remove();
	});
	list.appendChild(li);
	input.value = "";
})

// Assignment : double click to rename 

list.addEventListener("dblclick", (el) => {
	if (el.target.tagName === "LI") {
		const li = el.target;
		const currentText = li.firstChild.textContent;
		const inputField = document.createElement("input");
		inputField.type = "text";
		inputField.value = currentText;
		li.firstChild.replaceWith(inputField);
		inputField.focus();

		inputField.addEventListener("blur", () => {
			const newText = inputField.value;
			const textNode = document.createTextNode(newText);
			inputField.replaceWith(textNode);
		});
	}
});		
