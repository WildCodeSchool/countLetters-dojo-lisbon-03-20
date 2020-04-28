const countLetters = (str) => {
    let characterCounter = {}

    str.split('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] in characterCounter) {
            characterCounter[str[i]] += 1;
        } else {
            characterCounter[str[i]] = 1;
        }
    }

    return characterCounter;
}

module.exports = countLetters;