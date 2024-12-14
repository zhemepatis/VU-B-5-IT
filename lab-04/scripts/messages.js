$(document).ready(_ => {
    $("#close-msg-btn").click(_ => hideMessage())
})

var messageTimeout;

function showMessage(msg, type, duration = 5000) {
    container = $(".msg-container")
    textElement = $(".msg-txt")

    if (type === "err")
        container.css("background", "orange")
    else if(type === "msg")
        container.css("background", "green")

    textElement.text(msg)
    container.show()

    // setting timeout
    if (messageTimeout)
        clearTimeout(messageTimeout)

    messageTimeout = setTimeout(() => {
        hideMessage()
    }, duration)
}

function hideMessage() {
    container = $(".msg-container")
    textElement = $(".msg-txt")

    container.hide()
    textElement.text("")
}