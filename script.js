// Assignment code here

// character arrays
var uppercaseChara = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseChara = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialChara = [
  "!",
  ".",
  ",",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "/",
];
var numberChara = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// empty arrays
var possibleChara = [];
var generatedChara = [];

// prompt user input and store info
var passwordInfo = {
  length: window.prompt(
    "How many characters would you like your password to be?"
  ),
  uppercase: window.confirm(
    "Would you like your password to contain uppercase characters?"
  ),
  lowercase: window.confirm(
    "Would you like your password to contain lowercase characters?"
  ),
  special: window.confirm(
    "Would you like your password to contain special characters?"
  ),
  number: window.confirm("Would you like your password to contain numbers?"),
};

//put possible characters into possible characters array. no elses are needed
if (passwordInfo.uppercase = true) {
  //add uppercaseChara to possibleChara
};

if (passwordInfo.lowercase = true) {
  //add lowercaseChara to possibleChara
};

if (passwordInfo.special = true) {
  //add specialChara to possibleChara
};

if (passwordInfo.number = true) {
  //add numberChara to possibleChara
};

//generate a character from the possible chara array the number of times needed to reach the inputted # of chara (8-128)
var randomChara = function() {
  for (var i = 0; i < passwordInfo.length; i++) {
    //randomly pull from possibleChara
    Math.floor(Math.random * possibleChara.length);
    //store in generatedChara
  }
};

//join separate charas into one string
join(generatedChara);

//TODO: wrap this whole thing in a function called generatePassword

//END ASSIGNMENT CODE
//======================================================================================================================

// Get DOM references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
