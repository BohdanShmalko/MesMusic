const CryptoJS = require("crypto-js");

const secretKey = "65B8630FFBA66AD9663690CF7545D9F8"

const encript = rowPassword => {
    return CryptoJS.AES.encrypt(rowPassword, secretKey).toString();
}

const decript = encriptPassword => {
    const bytes = CryptoJS.AES.decrypt(encriptPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = {encript, decript}