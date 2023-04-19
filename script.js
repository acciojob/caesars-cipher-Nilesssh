function rot13(str) {
  // Split the input string into an array of characters.
  return str.split('')
    // For each character in the array:
    .map(function(char) {
      // Convert char to its ASCII code.
      var code = char.charCodeAt(0);
      // If the character is not an uppercase letter (ASCII codes 65-90), leave it as it is.
      if (code < 65 || code > 90) {
        return char;
      }
      // Otherwise, shift the letter 13 places forward or backward in the alphabet,
      // depending on whether its ASCII code is below or above 77 ('M').
      if (code < 78) {
        code += 13;
      } else {
        code -= 13;
      }
      // Convert the new ASCII code back to a character.
      return String.fromCharCode(code);
    })
    // Join the array of characters back into a string.
    .join('');
}