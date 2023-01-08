module.exports = function reverse (n) {
  let numToStr = n + '';
  if (n > 0) {
    return +numToStr.split("").reverse().join("");
  } else return +numToStr.slice(1).split("").reverse().join("");
  
}
