var viewPanel = document.getElementById("view-panel");

var textBox = document.getElementById("text-box");

var lineContainer = document.createElement("div");
lineContainer.className = "line-container";

var textBubble = document.createElement("div");
textBubble.className = "bubble";

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

var cannedResponses = [
	"Listen to your heart. There's nothing else you can do.",
	"Just because it burns doesn't mean you're gonna die. You've gotta get up and try.",
	"Don't stop believeing. Hold on to the feeling.",
	"Get up, stand up. Don't give up the fight.",
	"It's a beautiful day. Don't let it get away.",
	"Live right now, just be yourself. It doesn't matter if it's good enough for someone else.",
	"What doesn't kill you makes you stronger, stand a little taller.",
	"You're a firework. Come on, show them what you're worth.",
	"Dream on. Dream until you're dreams come true.",
	"Today is where your book begins. The rest is still unwritten.",
	"All that glitters is gold. Only shooting starts break the mold.",
	"All your life, you were only waiting for this moment to arise."
]

function computerResponse() {
	var randIndex = Math.floor(Math.random() * cannedResponses.length);
	var newTextBubble = textBubble.cloneNode();
	newTextBubble.className += " left";
	newTextBubble.innerHTML = cannedResponses[randIndex];
	var newLineContainer = lineContainer.cloneNode();
	newLineContainer.appendChild(newTextBubble);	
	viewPanel.appendChild(newLineContainer);
	scrollDown();
}

textBox.addEventListener("keydown", function(event) {
	if (event.keyCode === 13 && isNotEmpty(event.target.value)) {		
		var newTextBubble = textBubble.cloneNode();
		newTextBubble.innerHTML = event.target.value;
		event.target.value = "";
		var newLineContainer = lineContainer.cloneNode();
		newLineContainer.appendChild(newTextBubble);
		viewPanel.appendChild(newLineContainer);
		setTimeout(computerResponse, 500);
		scrollDown();
	}
});