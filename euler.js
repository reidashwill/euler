

const numberFinder = (num, totalArr = []) => {
  if (num === 0) {
    return totalArr.reduce(myFunc)
  } else if (num % 3 === 0 || num % 5 === 0) {
    totalArr.push(num)
    return numberFinder(num - 1, totalArr);
  } else {
    return (numberFinder(num - 1, totalArr))
  }
}
function myFunc(total, num) {
  return total + num;
}