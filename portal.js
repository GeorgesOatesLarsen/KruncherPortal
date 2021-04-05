var rawpassphrase = window.location.search.split('&')[0];
var passphrase = CryptoJS.enc.Utf8.parse(rawpassphrase);
var salt = CryptoJS.enc.Base64.parse("K3V4W0JYR0JQeWowNm9Se1F2KDVtaXZoXz8qKV1TV0oodm1yRW8+cWBraExaa2gjRC8kNSEqdGs3PEBrckghPj8seEBZYkosRlsiOltPbGZRalsjPXlCTXlpbHNsMQ==");
var encryptionKey = CryptoJS.PBKDF2(passphrase, salt, {
    keySize: 12,
    iterations: 500,
});
encryptionKey.clamp();
var key = CryptoJS.lib.WordArray.create(encryptionKey.words.slice(0, 8));
var iv = CryptoJS.lib.WordArray.create(encryptionKey.words.slice(8));

//This is useful, if you are me, and you want to encrypt a payload within the console. : - )
function encryptPayload(payload) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(JSON.stringify(payload)), key, {iv: iv}).toString();
}
//This is what this application uses to retrieve connection info from hardcoded public data.
function decryptPayload(rawdata) {
    return JSON.parse(CryptoJS.AES.decrypt(rawdata, key, {iv: iv}).toString(CryptoJS.enc.Utf8));
}


