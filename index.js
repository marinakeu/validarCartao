function cardValidator (cardNumberString) {
  let cardNumber = cardNumberString.split('');
  if (hasDifferentDigits(cardNumber) && digitValidator(cardNumber)) return true;
  return false;
}

function hasDifferentDigits (cardNumber) {
  if (cardNumber.length < 13 || cardNumber.length > 16 || cardNumber.every(digit => digit === cardNumber[0])) return false;  
  return true;
}
  
function digitValidator (cardNumber) {
  cardNumber.reverse();
  let multiplyAlternately = cardNumber.map(Number).map((element, index) => index % 2 !== 0 ? element * 2 : element);
  let decreaseIfGreaterThanTen = multiplyAlternately.map((element) => element > 9 ? element - 9 : element);
  let sum = decreaseIfGreaterThanTen.reduce((acc, element) => acc + element);
  let result = sum % 10 === 0;
  return result;
}

module.exports.cardValidator = cardValidator;