function cardValidator (cardNumberString) {
  let cardNumber = cardNumberString.split('');
  let sumCardNumber = parseInt(cardNumber.reduce((acc, element) => acc + element));
  if (cardNumber.length < 14 || sumCardNumber === 0) {
    return false;
  } else if (digitValidator(cardNumber)) {
    return true;
  } else {
    return false;
  }
}
  
function digitValidator (cardNumber) {
  cardNumber.reverse();
  let multiply = cardNumber.map(Number).map((element, index) => index % 2 !== 0 ? element * 2 : element);
  let decrease = multiply.map((element) => element > 9 ? element - 9 : element);
  let sum = decrease.reduce((acc, element) => acc + element);
  let result = sum % 10 === 0;
  return result;
}


module.exports.cardValidator = cardValidator;