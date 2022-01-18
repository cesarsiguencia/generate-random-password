// TODO: Rename this! These are not arrays (or use arrays)
var result = '';
var uppercaseArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ]
var lowercaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialcharactersArray = ["@","#","$","%","<","^","<"]


var upperConfirm = true;
var lowerConfirm = true;
var numberConfirm = true;
var specialConfirm = true;
var characterLength = "";


// var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
// var numbersList = "0123456789";
// var specialcharactersList = "!@#$%^&*()_+{}[]\|;:',./<>?";




var generateBtn = document.querySelector("#generate")


generateBtn.onclick = function () {
  writePassword();
};


var writePassword = function () {
  alert("Welcome to Password Generator. Press OK to Start")

  // NOT DEFINED var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  // NOT DEFINED var password = generatePassword();



  
lengthConfirm();
};

  


var lengthConfirm = function () {   
  characterLength = prompt("What is the length of the password?");
  console.log(characterLength);

  while(!/^[0-9]+$/.test(characterLength)){
    alert("You must enter a valid input");
    lengthConfirm();
  }

 
  if (characterLength > 128) {
    alert("Your password is too long. Please try again");
    lengthConfirm();
  } 
  else if (characterLength < 8) {
    console.log(characterLength);
    alert("Your password is too short. Please try again");
    lengthConfirm();
  }

  else {  
    uppercaseConfirm();
    console.log(characterLength);
    return characterLength
  }

};



var uppercaseConfirm = function () {  


  upperConfirm = confirm("Would you like to have upper case letters in your password?");


  if (upperConfirm) {
    console.log(uppercaseArray);
    console.log("Your password will have uppercase letters")
    
  }
  else {
    alert("Your password will NOT contain uppercase letters")
  }


lowercaseConfirm();
return upperConfirm;
};


var lowercaseConfirm = function (){

  lowerConfirm = confirm("Would you like to have lowercase letters in your password?");
  if (lowerConfirm) {
    console.log(lowercaseArray);
    console.log("Your password will have lowercase letters")
    lowerConfirm.return;
  }
  else {   
    alert("Your password will NOT contain lowercase letters")
  }


numbersConfirm();   
return lowerConfirm; 
};


var numbersConfirm = function (){

  numberConfirm = confirm("Would you like to have numbers in your password?");
  if (numberConfirm) {
    console.log("Yes numbers");
  }
  else {
    console.log("No numbers");
    alert("Your password will not contain numbers.");
  }


specialsConfirm();
return numberConfirm; 
};


var specialsConfirm = function(){

  specialConfirm = confirm("Do you want special characters in your password?")
  if (specialConfirm) {
    console.log("Yes special characters");
  }
  else {
    console.log("No special characters");

    if (upperConfirm === false && lowerConfirm === false && numberConfirm === false && specialConfirm === false ) {
    alert("Your password MUST contain one set of characters letters. Please try again");
    uppercaseConfirm();
    } 
    else {
    console.log("Password has met criteria.");
    alert("Your password will not contain special characters.");
    } 
  } 

generatePassword();
return specialConfirm;

};


var generatePassword = function(characterLength) {


  // if (upperConfirm === true){
  //   var randomUpper = uppercaseArray[Math.floor(Math.random()* uppercaseArray.length)];
  //   console.log(randomUpper);
  //   return result;
  // }

  // if (lowerConfirm === true){
  //   var randomLower = lowercaseArray[Math.floor(Math.random()* lowercaseArray.length)];
  //   console.log(randomUpper);
  //   return result;
  // }

  // if (numberConfirm === true){
  //   var randomNumber = numbersArray[Math.floor(Math.random()* numbersArray.length)];
  //   console.log(randomNumber);
  //   return result;
  // }

  // if (specialConfirm === true){
  //   var randomSpecial = specialcharactersArray[Math.floor(Math.random()* specialcharactersArray.length)];
  //   console.log(randomSpecial);
  //   return result;
  // }

  
  
  for (var i = 0; i < characterLength; i++) {

  

    var finalPasswordLength = (uppercaseArray + lowercaseArray + numbersArray + specialcharactersArray).length;
    result += (uppercaseArray + lowercaseArray + numbersArray + specialcharactersArray).charAt(Math.floor(Math.random() * finalPasswordLength));
  }

pastePassword(characterLength);
return result;


}

var pastePassword = function (characterLength){

  console.log(generatePassword(characterLength));
  document.querySelector("#password").innerHTML = "";
  document.querySelector("#password").innerHTML = generatePassword(result);

};
// generatePassword(characterLength);











//writePassword function ends
// make sure to call password function






  //STILL UNDER GENERATE PASSWORD FUNCTION 




  // if (uppercase) {
  //   elementArray.concat(uppercaseArray)
  // }

  // var lowercase = confirm("do you want lowercase in your password?")
  // console.log(lowercase)



  // var numbers = confirm("Do you want numbers in your password?")
  // console.log(numbers)

  // for (i = 0; i < passwordLength, i++){
  //   1. math.floor(math.random) using length of element array to determine upper and lower bound.
  //   2. another for loop, by using math.random, we are going to say get the value of element at the  randomly generated index
  //   elementArray()


  //ELSE OF 2ND FUNCTION ENDS






  // DONT  NEEED IT???   generateBtn.addEventListener("click", writePassword);

  // Add event listener to generate button

//click declaration ends



