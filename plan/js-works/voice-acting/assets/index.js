function speak(text) {
	const message = new SpeechSynthesisUtterance();
	//message.lang = "ru-RU";
	message.lang = "en-EN";
	
	message.text = text;
	window.speechSynthesis.speak(message);
}

//const btnSpeack = document.querySelector("#speak");
const txtMessage = document.querySelector("#message");

const ok = () => {
	speak(txtMessage.value);
}


/*
btnSpeack.addEventListener("click", () => {
	speak(txtMessage.value);
})
*/