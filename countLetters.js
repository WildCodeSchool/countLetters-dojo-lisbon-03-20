const countLetters = (str) => {
  let result = {};
  const arr = str.split("");
  const res = arr.map((el, i) => {
    console.log(el);

    if (el in result) {
      result[el] = result[el] + 1;
    } else {
      result[el] = 1;
    }
  });
  console.log(result);
  return result;
};

countLetters("hello");

module.exports = countLetters;

//create empty results object
//transform the string in an array by using split
//iterate in the array string with a map or foreach
//
