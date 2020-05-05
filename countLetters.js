const countLetters = (str) => {
    let result = {}
    const arr = str.split('')
    let newResult = arr.map((letter) => {
        if( result[letter] === undefined ){
            result[letter] = 1;
        } else {
            result[letter]= result[letter] + 1
        }
    })
    return result;
}

module.exports = countLetters;

//create a result object
//Iterate trough the str (for loop or map)
// create an object with the char as key, and the count as value
//count the number of times a char is present in the str

//console.log(countLetters('hello'))

// returns:
// {
//     'h': 1,
//     'e': 1,
//     'l': 2,
//     'o': 1,
// }