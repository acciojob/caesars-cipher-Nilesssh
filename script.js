// Your Script here.
function rot13(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c >= 65 && c <= 90) {
      // uppercase letters
      result += String.fromCharCode(((c - 65 + 13) % 26) + 65);
    } else if (c >= 97 && c <= 122) {
      // lowercase letters
      result += String.fromCharCode(((c - 97 + 13) % 26) + 97);
    } else {
      // non-alphabetic characters
      result += str.charAt(i);
    }
  }
  return result;
}
