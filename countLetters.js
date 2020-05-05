const countLetters = (str) => {
  // your code should go here
  let object = {};
  let splitStr = str.split('');

  for (let i = 0; i < splitStr.length; i++) {
    if (object[splitStr[i]]) {
      object[splitStr[i]]++;
    } else {
      object[splitStr[i]] = 1;
    }
  }
  return object;
};

console.log(countLetters('hellllllo'));

//receiving a string
//create an empty object
//need to be split using .split()
//it becomes an array
//iterate with a for loop into every element
//use the reduce method
//count every element of the string

//object[element[i]] = ?
module.exports = countLetters;

hello = { h: 0, e: 1, l: 2, l: 3, 0: 4 };
