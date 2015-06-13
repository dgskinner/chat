var viewPanel = document.getElementById("view-panel");

var textBox = document.getElementById("text-box");

var lineContainer = document.createElement("div");
lineContainer.className = "line-container";

function isNotEmpty(text) {
	for (var i = 0; i < text.length; i++) {
		if (text[i] !== " ") {
			return true;
		}
	}
	return false;
}

function scrollDown() {
	viewPanel.scrollTop += 1000;
}

textBox.addEventListener("keydown", function(event) {
	if (event.keyCode === 13 && isNotEmpty(event.target.value)) {		
		var textBubble = document.createElement("div");
		textBubble.className = "bubble";
		textBubble.innerHTML = event.target.value;
		event.target.value = "";
		if (event.ctrlKey && event.altKey) {
			textBubble.className += " left";
		}
		var newLineContainer = lineContainer.cloneNode();
		newLineContainer.appendChild(textBubble)
		viewPanel.appendChild(newLineContainer);
		scrollDown();
	}
});