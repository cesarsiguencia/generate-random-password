// Assignment code here

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = [1,2,3,4,5,6,7,8,9,0];
var specialcharacterArray = ["!","@","#","$","%","^","&","*","(",")","-","+"];


// var testLetters = "TEST"
// var testNumbers = "1234"
// var testSpecial = "!@#$"


function makeid(length) {
  var result           = '';
  var upperCase       = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numberList = "0123456789";
  var specialList = "!@#$%^&*()_+{}[]\|;:',./<>?";
  var charactersLength = (upperCase + lowerCase + numberList + specialList).length;
  for ( var i = 0; i < length; i++ ) {
    result += (upperCase + lowerCase + numberList + specialList).charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(makeid(8));




// Get references to the #generate element
var generateBtn = document.querySelector("#generate").onclick = function (writePassword) {

  
  





// Write password to the #password input
var writePassword = function() {
  alert("Welcome to Password Generator. Press OK to Start")

  // NOT DEFINED var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  // passwordText.value = password;

 // NOT DEFINED var password = generatePassword();

  //USER WILL BE ASKED ABOUT LENGTH OF PASSWORD
  var passwordLength = function(){
    var characterLength = prompt("What is the length of the password?");
    console.log(characterLength);

    if (characterLength < 8){
      alert("Your password is too short. Please try again");
      passwordLength();
    }
    else if (characterLength > 128){
      alert("Your password is too long. Please try again");
      passwordLength();
    }
    else {
    // USER WILL BE ASKED ABOUT UPPER AND LOWER CASE LETTER
      var generatePassword = function() {

        
        var upperConfirm = confirm("Would you like to have upper case letters in your password?");

      
          if(upperConfirm){
            console.log(uppercaseArray);
            console.log("Your password will have uppercase letters")

          }
          else {
            alert("Your password will NOT contain uppercase letters")
          }

        var lowerConfirm = confirm("Would you like to have lowercase letters in your password?");
          if(lowerConfirm){
            console.log(lowercaseArray);
            console.log("Your password will have lowercase letters")
          }
          else {
            alert("Your password will NOT contain lowercase letters")

            if(upperConfirm === false && lowerConfirm === false){ 
              alert("Your password MUST contain alphabetical letters. Please try again");
              generatePassword();
            }else{
              console.log("Password has met criteria.");
            }
          }
        
         

          


        var numberConfirm = confirm("Would you like to have numbers in your password?");
          if(numberConfirm){
            console.log("Yes numbers");
          }
          else {
            console.log("No numbers");
            alert("Your password will not contain numbers.");
          }

        var specialCharacters = confirm("Do you want special characters in your password?")
          if(specialCharacters){
            console.log("Yes special characters");
          }
          else {
            console.log("No special characters");
            alert("Your password will not contain special characters.");
        }
      }
      


  //   if (uppercase) {
  //     elementArray.concat(uppercaseArray)
  //   }

    // var lowercase = confirm("do you want lowercase in your password?")
    // console.log(lowercase)

    

    // var numbers = confirm("Do you want numbers in your password?")
    // console.log(numbers)

    //for (i = 0; i < passwordLength, i++){
      //1. math.floor(math.random) using length of element array to determine upper and lower bound.
      //2. another for loop, by using math.random, we are going to say get the value of element at the  randomly generated index
      //elementArray()


  } //generatePassword declaration ends
  generatePassword ();
  
  } //passwordLength 
  passwordLength();
} //writePassword function ends
 // make sure to call password function
writePassword();

// DONT  NEEED IT???   generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

} //click declaration ends



  
// Here is what I need to do
// Have a first page that opens password generatorr
// when the prompts of the password is displayed
// then the user gets to select what they would like to include in passwords
// when asked for the length of the password, it should be between 8-128 specialCharacteres
// when i tell the system what characters I wantt it should tell me I need atcharacter type