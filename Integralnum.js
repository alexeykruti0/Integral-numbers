function isSquare(number) {
  // Negative numbers are not square numbers
  if (number < 0) {
    return false;
  }
  
  // 0 is a square number
  if (number === 0) {
    return true;
  }
  
  // Check if the square root is an integer
  var sqrt = Math.sqrt(number);
  return Number.isInteger(sqrt);
}
