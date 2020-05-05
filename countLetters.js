const countLetters = (str) => {
    // your code should go here 
    let result = {};
    str = str.split('')

    for (let i = 0; i < str.length; i++) {
        if (str[i] in result) {
            result[str[i]] += 1
        } else {
            result[str[i]] = 1
        }
    }
    return result;
}

module.exports = countLetters;

console.log(countLetters('hello'))

// Pseudocode
// 1. create and empty object which will eventually store the result
// 2. we need to split the string using .split('')
// 3. This will create an array
//  4. we can go through the array (map / for / forEach)
// 5. we need to check at each iteration if the key in the object exists
// 6. if it exists we increment its value by 1 
// 7. else we create a key value pair and initial the value to 1 
// 8. we need to return the result object 

