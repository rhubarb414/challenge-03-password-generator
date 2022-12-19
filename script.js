// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  chooseLength: 0,
  chooseLower: 0,
  chooseUpper: 0,
  chooseNum: 0,
  chooseSpecial: 0,
};

var pwdCharsAll = {
  lowercaseLetters: ['a','b','c','d','e','f','g','h','i','k','j',
  'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  uppercaseLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 
  'K', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [0,1,2,3,4,5,6,7,8,9],
  specialChar: ['!','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','^','_','`','|','~'],

}

var pwdCharsSelect = [];

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




// function chooseLower() {
//   return confirm("Click 'OK' if you'd like to include lowercase characters.");
// }

// chooseLower = chooseLower();

// function chooseUpper(){}
// function chooseNum(){}
// function chooseSpecial(){}


//returns a random value between 8 and 128
function randomPasswordLength() {
  do {
    value = Math.floor(Math.random() * 128) + 1;
  }
  while (value< 8);
  console.log(value);
  return value;
  }

  //runs prompts for user to select password criteria, generates the password, and returns it
function generatePassword() {
  var passwordArray = [];
  var passwordLength; //a value between 8 - 128 given by user or random
  var chooseLower = false; 
  var chooseUpper = false; 
  var chooseNum = false; 
  var chooseSpecial = false; 

  alert("We'll begin by setting your password criteria.");

  // ask user for a password length or create random length
  if (confirm("Click 'OK' if you'd like to choose a specific password length. Otherwise, a random length will be chosen.")) {
    passwordLength = prompt("Enter number between 8 - 128 for your password length:");
  } else {
    passwordLength = randomPasswordLength();
  }

  //ask user if they want to include lowercase letters
  if (confirm("Click 'OK' if you'd like to include lowercase characters.")) {
   chooseLower = true;
  }

  //ask user if they want to include upper letters
  if (confirm("Click 'OK' if you'd like to include uppercase characters.")) {
   chooseUpper = true;
  }

  //ask user if they want to include numbers
  if (confirm("Click 'OK' if you'd like to include numbers.")) {
    chooseNum = true;
  }

  //ask user if they want to include special characters
   if (confirm("Click 'OK' if you'd like to include special characters.")) {
    chooseSpecial = true;
  }
 
 




  
  

  //
  // can delete "password" and use return to pass the actual password to the var "password" in writePassword()
  //so:
  // return(passwordArray.join(''));
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





//-------------//

// working code for random lowercase password //

/*
alert("We'll begin by setting your password criteria.");

// prompt user for a password length or create random length
if (confirm("Click 'OK' if you'd like to choose a specific password length. Otherwise, a random length will be chosen.")) {
  passwordLength = prompt("Enter number between 8 - 128 for your password length:");
  for (var i = 0; i < passwordLength; i++) {
    //chooses a random letter from lowercaseLetters for each value in passwordArray
    passwordArray[i] = pwdCharsAll.lowercaseLetters[Math.floor(Math.random() * pwdCharsAll.lowercaseLetters.length)];
  } 
} else {
  passwordLength = randomPasswordLength();
  for (var i = 0; i < passwordLength; i++) {
  passwordArray[i] = pwdCharsAll.lowercaseLetters[Math.floor(Math.random() * pwdCharsAll.lowercaseLetters.length)];
}

}
*/
