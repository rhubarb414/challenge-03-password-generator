// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  chooseLength: 0,
  chooseLower: 0,
  chooseUpper: 0,
  chooseNum: 0,
  chooseSpecial: 0,
};

var pwdChar = {
  lowercaseLetters: ['a','b','c','d','e','f','g','h','i','k','j',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
  'K', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  specialChar: ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','^','_','`','|','~'],

}

/**** psuedo code 
 * generatePassword = function() {
 *  for num in passwordLength {
 *    passwordLength[i] = character.random
 *  }
 * if (passwordCriteria.lowerCase) {
 *  check password for lowercase
 * } else {
 *  character.lowerCase = password[random number <= password.length-1];
 * };
 * 
 * if (password.Criteria.upperCase)
 * 
 * 
 * 
 * checkPassword = function() {
 * if (passwordCriteria.upperCase) {
 *  }
 * 
 * 
 * 
*/
// function chooseLength(){
//  if (confirm(
//   "Click 'OK' if you'd like to choose a specific password length. Otherwise, a random length from 8 - 128 characters will be chosen."
// )){
//   prompt("Type a value between 8 - 128 to set the length of your password")

// }}

// function chooseLower() {
//   return confirm("Click 'OK' if you'd like to include lowercase characters.");
// }

// chooseLower = chooseLower();

// function chooseUpper(){}
// function chooseNum(){}
// function chooseSpecial(){}

function generatePassword() {
  var passwordArray = [];

  alert("We'll begin by setting your password criteria.");

  // get password length from user
  var passwordLength = prompt("Enter number between 8 - 128 for your password length:");
  for (var i = 0; i < passwordLength; i++) {
    passwordArray[i] = pwdChar.lowercaseLetters[i];
  } 

  //
  // can delete "password" and use return to pass the actual password to the var "password" in writePassword()
  password = passwordArray.join('');
    console.log(password);
  return(password);
  
}
  // chooseLength();
  // chooseLower();
  // chooseUpper();
  // chooseNum();
  // chooseSpecial();

// console.log(chooseLower);

// alert(
//   "Please confirm that you'd like a password with these criteria:" +
//     passwordCriteria.chooseLength
// );

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
