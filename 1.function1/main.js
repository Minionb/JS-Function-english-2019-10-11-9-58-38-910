function reverseString(message) {
    var splitString = message.split(""); 

    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 

    return joinArray; 
}
 
reverseString("hello"); // should return 'olleh'