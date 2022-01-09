// Assignment code here

var uppercaseArray = ["A","B"]
var lowercaseArray = ["a","b"]
var specialcharacterArray = ["!","@"]
var numberArray = [1,2,3,4,5,6,7,8,9,0]

// var testLetters = "TEST"
// var testNumbers = "1234"
// var testSpecial = "!@#$"


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

            if(upperConfirm === !true && lowerConfirm === !true){ 
              alert("Your password MUST contain alphabetical letters. Please try again");
              generatePassword();
            }else{
              console.log("Password has met criteria.");
            }
          }
        
         

          


        var numberConfirm = confirm("Would you like to have numbers in your password?");
          if(numberConfirm){
            console.log("Yes");
          }
          else {
            generatePassword();
          }

        var specialCharacters = confirm("Do you want special characters in your password?")
          if(specialCharacters){
            console.log("Yes");
          }
          else {
            generatePassword();
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