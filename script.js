
function caeserEncrypt(message) {

    // översätt varje tecken till ett nummer
    const charCodes = []

    for (let i = 0; i < message.length; i++) {
        charCodes.push(message[i].charCodeAt(0))
    }

    // shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + 1

    }

    let encryptedMessage = ""
    // översätt numret till tecken
    for (let i = 0; i < charCodes.length; i++) {
        encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])

    }

    return encryptedMessage
}

const secretmessege = "atackatsevenpm"

console.log(secretmessege, caeserEncrypt(secretmessege))