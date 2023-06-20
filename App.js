//Question_01:
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName);

// Question_02:
var x = prompt("Please enter your favorite mobile phone:");
var xLength = x.length;
document.write("The length of your input is: " + xLength);

//Question_03:
var word = "Pakistani";
var indexOfWord = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("The index of 'n': " + indexOfWord);

//Question_04:
var word = "Hello World";
var lastIndex = word.lastIndexOf("l");
document.write("String: " + word + "<br>");
document.write("The last index of 'l' : " + lastIndex);

//Question_05:
var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3 : " + character);

//Question_06:

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName);

//Question_07:
var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write("City: " + word + "<br>");
document.write("After replacement: " + newWord);

//Question_08:
var message = "Ali and Sami are best friends. They play cricket and football together.";
var afterReplacement = message.replace(/and/g, "&");
document.write("Message: " + message + "<br>");
document.write("After Replacement: " + afterReplacement);

//Question_09:
var str = "472";
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
var num = parseInt(str);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num);

//Question_10:
var x = prompt("Enter your input:");
var UpperCase = x.toUpperCase();
document.write("User Input: " + x + "<br>");
document.write("Upper Case: " + UpperCase);

//Question_11:

var userInput = prompt("Enter your input:");
var titleCaseInput = userInput.toLocaleUpperCase();
document.write("Title case input: " + titleCaseInput);

//Question_12:
var num = 35.36;
var numString = num.toString();
var result = numString.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + result);

//Question_13:

var username = prompt("Enter your username:");
if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
    alert("Please enter a valid username without special symbols [@ . , !]");
}
else {
    alert("Username: " + username);
}

//Question_14:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter an item of bakery:");
var lowerUserInput = userInput.toLowerCase();
var lowerArray = A.map(function(item) {
  return item.toLowerCase();
});
var found = lowerArray.includes(lowerUserInput);
if (found) {
  alert("Yes, '" + userInput + "' is available in the list.");
} else {
  alert("No, '" + userInput + "' is not found in the list.");
}

//Question_15:
var password = prompt("Please enter your password:");
if (
  password.length >= 6 &&               
  /[a-zA-Z]/.test(password) &&             
  /[0-9]/.test(password) &&                 
  !/^[0-9]/.test(password)                
) {
  alert("Password is valid!");
} else {
  alert("Please enter a valid password!");
}

//Question_16:
var university = "University of Karachi";
var words = university.split(" ");
var characters = [];
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  var wordCharacters = word.split("");
  characters = characters.concat(wordCharacters);
}
document.write("Array: " + characters.join(", "));

//Question_17:
var userInput = prompt("Enter your input:");
var lastCharacter = userInput.charAt(userInput.length - 1);
document.write("Last character: " + lastCharacter);

//Question_18:
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var lowerSentence = sentence.toLowerCase();
var lowerWord = wordToCount.toLowerCase();
var words = lowerSentence.split(" ");

var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === lowerWord) {
    count++;
  }
}

document.write("Number of occurrences of the word '" + wordToCount + "': " + count);


