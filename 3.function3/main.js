function alphabetSort(message){
    var splitString = message.split(""); 

    var sortArray = splitString.sort(); 

    var joinArray = sortArray.join(""); 

    return joinArray;
  }
  alphabetSort('hello'); // should return 'ehllo'
