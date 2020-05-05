const countLetters = (str) => {
  const newObject = {};
  str.split('').forEach((letter) => {
    newObject[letter] = newObject[letter] ? newObject[letter] + 1 : 1;
  });
  return newObject;
};
console.log(countLetters('Isadora Haas Hillebrand'));
module.exports = countLetters;

//count the frequency of each letter inside the string
// use split to devide each string into letters
// use forEach method to loop through string
