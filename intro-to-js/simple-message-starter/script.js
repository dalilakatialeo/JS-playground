function showMessage() {
    let message = document.getElementById("message-text").value;
    let name = document.getElementById("message-name").value;
    let messageBox = document.getElementById("message-box");
    // messageBox.innerText = message + " - " + name;
    // formatted string below
    messageBox.innerText = `${message} ${name}` 
}

// when the window loads, it's going to do something
window.onload = function() {
    let speechBubbleElement = document.createElement("div");
    speechBubbleElement.classList.add("speech-bubble");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
}