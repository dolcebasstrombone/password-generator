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

//generate password function
var generatePassword = function () {
  // get password length, called in the passwordInfo object
  var getPasswordLength = function () {
    var passwordLength = window.prompt(
      "How many characters would you like your password to be?"
    );
    if (passwordLength === "" || passwordLength === null) {
      passwordLength = window.prompt(
        "How many characters would you like your password to be?"
      );
    } else if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.");
      passwordLength = window.prompt(
        "How many characters would you like your password to be?"
      );
    }
    return passwordLength;
  };
  // get passwordInfo through window prompts and confirms
  var passwordInfo = {
    length: getPasswordLength(),
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
  if (
    passwordInfo.lowercase === false &&
    passwordInfo.uppercase === false &&
    passwordInfo.special === false &&
    passwordInfo.number === false
  ) {
    alert("You need to include at least one type of character.");
    generatePassword();
  };
  //put possible characters into possible characters array
  var generatePossibleChara = function () {
    if (passwordInfo.uppercase === true) {
      //add uppercaseChara to possibleChara
      possibleChara = possibleChara.concat(uppercaseChara)
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
  //generate a character from possibleChara, loop to get the user-inputted password length
  var generateRandomChara = function () {
    for (var i = 0; i < passwordInfo.length; i++) {
      //pull a randomChara from possibleChara
      var randomChara =
        possibleChara[Math.floor(Math.random() * possibleChara.length)];
      //store in generatedChara
      generatedChara = generatedChara.concat(randomChara);
    }
    return generatedChara;
  };
  //reset joinedChara and generatedChara to be empty
  joinedChara = [];
  generatedChara = [];
  //call functions to generate possible charas and then random charas
  generatePossibleChara();
  generateRandomChara();
  //join separate charas into one string
  var joinedChara = generatedChara.join("");
  return joinedChara;
};

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
