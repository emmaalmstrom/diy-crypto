import { caeserEncrypt, ceasarDecrypted } from "./diycrytp.js"

const secretmessege = "atackatsevenpm"
console.log(secretmessege, caeserEncrypt(secretmessege, 0))

const encryptedMsg = caeserEncrypt(secretmessege, 4)
const decryptedMsg = ceasarDecrypted(encryptedMsg, 4)
console.log(secretmessege, encryptedMsg, decryptedMsg)