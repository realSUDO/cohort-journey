(() => {
	const allElements = document.querySelectorAll('[class*="moji-"]'); // moji-p-3
	/// returns a nodelist

	const elementArray = Array.from(allElements);

	// add more custom mojiCSs here like style , padding ,margin etc
	// write better classes with these categories..
	const mojiCss = {
		// background
		"moji-bg-red": "background-color:red",
		"moji-bg-blue": "background-color:blue",
		"moji-bg-grey": "background-color : grey",

		// color
		"moji-green": "color : green",
		"moji-red": "color : red",
		"moji-blue": "color : blue",

		// display
		"moji-flex": "display : flex",
		"moji-block": "display : block",
		"moji-inline-block": "display : inline-block",

		// justify content
		"moji-justify-center": "justify-content : center",
		"moji-justify-start": "justify-content : flex-start",
		"moji-justify-end": "justify-content : flex-end",

		// padding
		"moji-p-3": "padding : 3px",
		"moji-p-5": "padding : 5px",
		"moji-p-10": "padding : 10px",

		// margin
		"moji-m-3": "margin : 3px",
		"moji-m-5": "margin : 5px",
		"moji-m-10": "margin : 10px",

		// font size
		"moji-fs-12": "font-size : 12px",
		"moji-fs-16": "font-size : 16px",
		"moji-fs-20": "font-size : 20px",

		// border
		"moji-border-1": "border : 1px solid black",
		"moji-border-2": "border : 2px solid black",
		"moji-border-3": "border : 3px solid black",
	};

	function applyMojitoCss(ele) {
		const classes = ele.className; // string <h1 class="moji-bg-red moji-green" //
		const classList = classes.split(" "); // ['moji-bg-red', 'moji-green']

		let styleString = "";

		classList.forEach((x) => {
			if (mojiCss[x]) {
				styleString += `${mojiCss[x]};`; // "background-color:red ; color : green ;"
			}
		});

		if (styleString) {
			ele.setAttribute("style", styleString);
		}
	}

	window.addEventListener("DOMContentLoaded", () => {
		// elementArray.forEach((x)=>{
		// 	applyMojitoCss(x);
		// })
		elementArray.forEach(applyMojitoCss);
	});
})();
