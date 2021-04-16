const LENGTH = 100,
    ALPHA_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz",
    ALPHA = ALPHA_UPPER + ALPHA_LOWER,
    DIGIT = "0123456789",
    ALPHA_DIGIT = ALPHA + DIGIT;

module.exports = () => {
    const base = ALPHA_DIGIT.length;
    let key = "";
    for (let i = 0; i < LENGTH; i++) {
        const index = Math.floor(Math.random() * base);
        key += ALPHA_DIGIT[index];
    }
    return key;
};