// Assignment code here




// Get references to the #generate element
var generateBtn = document.querySelector("#generate").onclick = function (writePassword) {
  

var uppercaseArray = ["A","B"]
var lowercaseArray = ["a","b"]
var specialcharacterArray = ["!","@"]
var numberArray = [1,2,3,4,5,6,7,8,9,0]





// Write password to the #password input
var writePassword = function() {

  alert("Welcome to Password Generator. Press OK to Start")
  // NOT DEFINED var password = generatePassword();

  

  //var passwordText = document.querySelector("#password");

  // passwordText.value = password;

  var generatePassword = function() {

 // NOT DEFINED var password = generatePassword();
  var passwordLength = prompt("What is the length of the password?")
  console.log(passwordLength)

  if (passwordLength < 8){
    alert("Your password is too short. Please try again");
    generatePassword();

  } else if (passwordLength > 128){
    alert("Your password is too long. Please try again");
    generatePassword();
  } else {
    var uppercase = confirm("do you want uppercase in your password?")
    console.log(uppercase);
  }
    if (uppercase) {
      elementArray.concat(uppercaseArray)
    }
    var lowercase = confirm("do you want lowercase in your password?")
    console.log(lowercase)

    var specialCharacters = confirm("Do you want special characters in your password?")
    console.log(specialCharacters)

    var numbers = confirm("Do you want numbers in your password?")
    console.log(numbers)

    //for (i = 0; i < passwordLength, i++){
      //1. math.floor(math.random) using length of element array to determine upper and lower bound.
      //2. another for loop, by using math.random, we are going to say get the value of element at the  randomly generated index
      //elementArray()
    }

    generatePassword();
  }

 

 // make sure to call password function
writePassword();

// DONT  NEEED IT???   generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

};
