
function caeserEncrypt(message, num) {

    // översätt varje tecken till ett nummer
    const charCodes = []

    for (let i = 0; i < message.length; i++) {
        charCodes.push(message[i].charCodeAt(0))
    }

    // shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + num

    }

    let encryptedMessage = ""
    // översätt numret till tecken
    for (let i = 0; i < charCodes.length; i++) {
        encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])

    }

    return encryptedMessage
}

function ceasarDecrypted(encryptedMSG, num) {
    
    // översätt varje tecken till ett nummer
    const charCodes = []

    for (let i = 0; i < encryptedMSG.length; i++) {
        charCodes.push(encryptedMSG[i].charCodeAt(0))
    }

    // shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - num

    }

    let decryptedMessage = ""
    // översätt numret till tecken
    for (let i = 0; i < charCodes.length; i++) {
        decryptedMessage = decryptedMessage + String.fromCharCode(charCodes[i])

    }
    
    return decryptedMessage
}


const secretmessege = "atackatsevenpm"
console.log(secretmessege, caeserEncrypt(secretmessege, 0))

const encryptedMsg = caeserEncrypt(secretmessege, 4)
const decryptedMsg = ceasarDecrypted(encryptedMsg, 4)
console.log(secretmessege, encryptedMsg, decryptedMsg)