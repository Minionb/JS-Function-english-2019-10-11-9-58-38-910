function palindrome(message){
    var splitString = message.split(""); 

    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 

    var result = joinArray === message;

    return result;
    
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true