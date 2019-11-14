function countWords(message){
    var splitString = message.split(" "); 
    WordsNumber = splitString.length;
    return WordsNumber;
  }
  countWords('Good morning, I love JavaScript.'); // should return 5