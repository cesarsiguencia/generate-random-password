var textArea = document.getElementById("password");
var generateBtn = document.querySelector("#generate");

var uppercaseArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialcharactersArray = ["!","@","#","$","%","^","&","*","(",")","-","+","=","{","}","[","]","|",":",";","?","/","`","~","<",">"];
var upperConfirm = true;
var lowerConfirm = true;
var numberConfirm = true;
var specialConfirm = true;
var characterLength = "";
var confirmedCharacters = [];

//click 'Generate Password' to begin function
generateBtn.onclick = function () {
  writePassword();
}

var writePassword = function () {
  alert("Welcome to Password Generator. Press OK to Start");
  
  //order list of functions triggered by button click
  lengthConfirm();
  characterConditions(); 
  generatePassword();
}


var lengthConfirm = function () {   
  characterLength = prompt("What is the length of the password?");
  console.log(characterLength);

  while(!/^[0-9]+$/.test(characterLength)){  //isNan(characterLength), only number answers will be accepted
    alert("You must enter a valid input");
    lengthConfirm();
  }

  characterLength = parseInt(characterLength); //parseInt confirms we are getting a numeric value

  if (characterLength > 128) {
    alert("Your password is too long. Please try again");
    lengthConfirm();
  }
  else if (characterLength < 8) {
    alert("Your password is too short. Please try again");
    lengthConfirm();
  }
}

var characterConditions = function(){
  
  uppercaseConfirm();
  lowercaseConfirm();
  numbersConfirm();
  specialsConfirm();
  clearPassword();
  
  // If user selects no character types for password, show error and do the process all over again
  if (!upperConfirm && !lowerConfirm && !numberConfirm && !specialConfirm) {
    alert("Your password MUST contain one set of characters letters. Please try again");
    characterConditions();
    } 
}


var uppercaseConfirm = function () {  

  upperConfirm = confirm("Would you like to have upper case letters in your password?");

  if (upperConfirm) {
    console.log(uppercaseArray);
    console.log("Your password will have uppercase letters");
  }
  else {
    alert("Your password will NOT contain uppercase letters");
  }
}


var lowercaseConfirm = function (){

  lowerConfirm = confirm("Would you like to have lowercase letters in your password?");

  if (lowerConfirm) {
    console.log(lowercaseArray);
    console.log("Your password will have lowercase letters");
  }
  else {   
    alert("Your password will NOT contain lowercase letters");
  }
}


var numbersConfirm = function (){

  numberConfirm = confirm("Would you like to have numbers in your password?");

  if (numberConfirm) {
    console.log("Yes numbers");
  }
  else {
    console.log("No numbers");
    alert("Your password will not contain numbers.");
  }
}


var specialsConfirm = function(){

  specialConfirm = confirm("Do you want special characters in your password?")
  if (specialConfirm) {
    console.log("Yes special characters");
  }
  else {
    console.log("No special characters");
    alert("Your password will not contain special characters.");
  } 
}


var clearPassword = function(){
  //if user wants a new password, the following fields are cleared out
  textArea.innerHTML = "";
  confirmedCharacters = [];
}


var generatePassword = function() {

  // pasting confirmed character arrays to the global array
  if (upperConfirm){
    confirmedCharacters = confirmedCharacters.concat(uppercaseArray);
  }

  if (lowerConfirm){
    confirmedCharacters = confirmedCharacters.concat(lowercaseArray);
  }

  if (numberConfirm){
    confirmedCharacters = confirmedCharacters.concat(numbersArray)
  }

  if (specialConfirm){
    confirmedCharacters = confirmedCharacters.concat(specialcharactersArray);
  }
  
  for (var i = 0; i < characterLength; i++) {
    //adding loop to grab random character from global array as many times as the characterLength
    var randomValue = confirmedCharacters[Math.floor(Math.random() * confirmedCharacters.length)];
    textArea.innerHTML += randomValue;
  }
}