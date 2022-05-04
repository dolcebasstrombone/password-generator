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
var numberChara = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// empty arrays to be filled
var possibleChara = [];
var generatedChara = [];

// prompt user input and store info
//TODO need to limit password length (if-else the heck out of passwordInfo.length)(8-128)
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

//put possible characters into possible characters array
var generatePossibleChara = function () {
  if (passwordInfo.uppercase === true) {
    //add uppercaseChara to possibleChara
    possibleChara = possibleChara.concat(uppercaseChara);
  }
  if (passwordInfo.lowercase === true) {
    //add lowercaseChara to possibleChara
    possibleChara = possibleChara.concat(lowercaseChara);
  }
  if (passwordInfo.special === true) {
    //add specialChara to possibleChara
    possibleChara = possibleChara.concat(specialChara);
  }
  if (passwordInfo.number === true) {
    //add numberChara to possibleChara
    possibleChara = possibleChara.concat(numberChara);
  }
  return possibleChara;
};
generatePossibleChara();

//generate a character from possibleChara, loop to get the user-inputted password length
var generateRandomChara = function () {
  for (var i = 0; i < passwordInfo.length; i++) {
    //pull a randomChara from possibleChara
    var randomChara =
      possibleChara[Math.floor(Math.random() * possibleChara.length)];
    //store in generatedChara
    generatedChara = generatedChara.concat(randomChara);
  }
};
generateRandomChara();

//join separate charas into one string
var joinedChara = generatedChara.join("");
console.log(joinedChara);

var generatePassword = function () {
  //wrap all above code in this function
};

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
