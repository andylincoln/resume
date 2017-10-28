// Function definitions
function isCSSGridSupported() {
	return CSS.supports("display", "grid");
}

function displayCSSGridWarning() {
	if(!isCSSGridSupported) {
		// Show warning at the top of the screen
		console.warn("CSS Grid is not supported in this browser");
	} else {
		console.log("CSS Grid is supported! 🙌🏻");
		document.querySelector("html").classList.add("css-grid");
	}
}
//	'Main' Function
(function() {
	displayCSSGridWarning();

 })();