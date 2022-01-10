// Assignment code here



var result           = '';
var uppercaseArray= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
var numbersArray= "0123456789";
var specialcharactersArray= "!@#$%^&*()_+{}[]\|;:',./<>?";

var upperConfirm = true;
var lowerConfirm = true;
var numberConfirm = true;
var specialConfirm = true;

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
  var passwordLength = function(){    //  ONE
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
    else {    //TWO
    // USER WILL BE ASKED ABOUT UPPER AND LOWER CASE LETTER
      var generatePassword = function() {    //THREE

        
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
          else {   //FOUR
            alert("Your password will NOT contain lowercase letters")

            if(upperConfirm === false && lowerConfirm === false){ 
              alert("Your password MUST contain alphabetical letters. Please try again");
              generatePassword();
            }else{
              console.log("Password has met criteria.");
            }
          }  ///FOUR FUNCTION ENDS
        
        //STILL UNDER GENERATE PASSWORD FUNCTION 

  
        var numberConfirm = confirm("Would you like to have numbers in your password?");
          if(numberConfirm){
            console.log("Yes numbers");
          }
          else {
            console.log("No numbers");
            alert("Your password will not contain numbers.");
          }

        var specialConfirm = confirm("Do you want special characters in your password?")
          if(specialConfirm){
            console.log("Yes special characters");
          }
          else {
            console.log("No special characters");
            alert("Your password will not contain special characters.");
        }
    
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
  
  function passwordConditions(length) {

    for ( var i = 0; i < length; i++ ) {

  
      var finalPasswordLength = (uppercaseArray + lowercaseArray + numbersArray + specialcharactersArray).length;
      result += (uppercaseArray + lowercaseArray + numbersArray + specialcharactersArray).charAt(Math.floor(Math.random() * finalPasswordLength));
      }
    
   
   return result;
  }


console.log(passwordConditions(characterLength));
document.querySelector("#password").innerHTML = "";
document.querySelector("#password").innerHTML = passwordConditions(result);

passwordConditions(length)

} // THREE GENERATE PASSWORD ENDS
      
generatePassword ();
}
  
} //passwordLength FUNCTION ENDS

passwordLength();







} //writePassword function ends
 // make sure to call password function


 

writePassword();

// DONT  NEEED IT???   generateBtn.addEventListener("click", writePassword);

// Add event listener to generate button

} //click declaration ends



