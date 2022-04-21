function convertToF(celsius) {
    var fahrenheit = (celsius * 9/5) +32;
    return fahrenheit;
  }
  convertToF(30);
  
  function reverseString(str) {
    var reversedStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

  