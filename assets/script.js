//Possible characters

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]
// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


function generatePassword() {

  var possChars = []
  
  var numChars = askUser();

  function askUser(){
    var len = prompt("How many characters in your password?")
  
    if (len > 7 && len < 128) {
      confirm("You would like your password to be " + len + " characters long?");
    }
      else if (len === null) {
        alert("Input must be a number between 8-128.")
    }
      else {
        numChars = askUser();
    }
  }
  }

  console.log(numChars)

  var useLower = confirm("Include lowercase?")
  var useUpper = confirm("Include uppercase?")
  var useNumber = confirm("Include numbers?")
  var useSpecial = confirm("Include special characters?")

  if (useLower) {possChars=possChars.concat(lower)};
  if (useUpper) {possChars=possChars.concat(upper)};
  if (useNumber) {possChars=possChars.concat(number)};
  if (useSpecial) {possChars=possChars.concat(special)};

  if (possChars.length === 0) {
    alert("No characters chosen. Please try again.")
  }
  return possChars
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

