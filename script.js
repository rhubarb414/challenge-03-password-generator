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
  lowercaseLetters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "j",
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
  ],
  uppercaseLetters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "J",
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
  ],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialChar: [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "^",
    "_",
    "`",
    "|",
    "~",
  ],
};

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
  } while (value < 8);
  console.log(value);
  return value;
}

//runs prompts for user to select password criteria, generates the password, and returns it
function generatePassword() {
  var passwordLength; //a value between 8 - 128 given by user or random
  var chooseLower = false;
  var chooseUpper = false;
  var chooseNum = false;
  var chooseSpecial = false;
  var selectedChars = []; //combines character types from pwdCharsAll based on user criteria
  var passwordArray = [];
  var hasLower = false;
  var hasUpper = false;
  var hasNum = false;
  var hasSpecial = false;
  var canReplace = []; // used so that characters are only replaced once during the check phase
  var replaceIndex = null; // this index will be popped from canReplace after a substitution

  alert("We'll begin by setting your password criteria.");

  // ask user for a password length or create random length
  if (
    confirm(
      "Click 'OK' if you'd like to choose a specific password length. Otherwise, a random length will be chosen."
    )
  ) {
    //issue here if user cancels the prompt to enter a value. Also, if they don't enter a value between 8 -128.
    //perhaps I can add a for loop after this that checks before proceeding with the other criteria.
    passwordLength = prompt(
      "Enter number between 8 - 128 for your password length:"
    );
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

  //confirm user's criteria are correct
  if (
    confirm(
      "Confirm that you'd like a password with the following criteria: Length: " +
        passwordLength +
        ", Lowercase Letters: " +
        chooseLower +
        ", Uppercase Letters: " +
        chooseUpper +
        ", Numbers: " +
        chooseNum +
        ", Special Characters: " +
        chooseSpecial +
        "."
    )
  ) {
    console.log("generate password");

    //~~Commence generating password~~

    //Step 1. Make a combined array of eligble characters based on user criteria
    if (chooseLower) {
      selectedChars = selectedChars.concat(pwdCharsAll.lowercaseLetters);
    }
    if (chooseUpper) {
      selectedChars = selectedChars.concat(pwdCharsAll.uppercaseLetters);
    }
    if (chooseNum) {
      selectedChars = selectedChars.concat(pwdCharsAll.numbers);
    }
    if (chooseSpecial) {
      selectedChars = selectedChars.concat(pwdCharsAll.specialChar);
    }
    console.log("selectedChars: ", selectedChars);
  }

  //Step 2. Generate random password from eligble characters
  for (var i = 0; i < passwordLength; i++) {
    //chooses a random letter from selectedChars for each value in passwordArray
    passwordArray[i] =
      selectedChars[Math.floor(Math.random() * selectedChars.length)];
  }
  console.log("first password: ", passwordArray);

  //Step 3. Check that each of the selected character types are actually in the password

  //set up canReplace so that any character can be replaced to start.
  for (let index = 0; index < passwordArray.length; index++) {
    canReplace.push(index);
  }

  console.log(canReplace);

  do {
    //check lowercase
    if (chooseLower) {
      for (var i = 0; i < passwordArray.length; i++) {
        if (pwdCharsAll.lowercaseLetters.includes(passwordArray[i])) {
          console.log(
            'lowercase letter  "',
            passwordArray[i],
            '" at index ',
            i
          );
          hasLower = true;
        }
      }
    }

    //replace lowercase
    if (chooseLower !== hasLower) {
      console.log("missing lowercase: ", passwordArray);

      //picks random eligible index from canReplace to designate which index will be replaced in passwordArray
      replaceIndex = canReplace[Math.floor(Math.random() * canReplace.length)];
      console.log("replaceIndex ", replaceIndex);

      //replace random index of passwordArray with random lowercase letter
      passwordArray[replaceIndex] =
        pwdCharsAll.lowercaseLetters[
          Math.floor(Math.random() * pwdCharsAll.lowercaseLetters.length)
        ];
      console.log("added lowercase letter", passwordArray);

      //remove replaceIndex from canReplace so it can't be overwritten by other character type checks
      for (let index = 0; index < canReplace.length; index++) {
        if (replaceIndex === canReplace[index]) {
          canReplace.splice(index, 1);
        }
      }
      console.log("new canReplace, ", canReplace);
    }

    //check uppercase
    if (chooseUpper) {
      for (var i = 0; i < passwordArray.length; i++) {
        if (pwdCharsAll.uppercaseLetters.includes(passwordArray[i])) {
          console.log(
            'uppercase letter  "',
            passwordArray[i],
            '" at index ',
            i
          );
          hasUpper = true;
        }
      }
    }
    //replace uppercase

    if (chooseUpper !== hasUpper) {
      console.log("missing uppercase: ", passwordArray);

      //picks random eligible index from canReplace to designate which index will be replaced in passwordArray
      replaceIndex = canReplace[Math.floor(Math.random() * canReplace.length)];
      console.log("replaceIndex ", replaceIndex);

      //replace random index of passwordArray with random uppercase letter
      passwordArray[replaceIndex] =
        pwdCharsAll.uppercaseLetters[
          Math.floor(Math.random() * pwdCharsAll.uppercaseLetters.length)
        ];
      console.log("added uppercase letter", passwordArray);

      //remove replaceIndex from canReplace so it can't be overwritten by other character type checks
      for (let index = 0; index < canReplace.length; index++) {
        if (replaceIndex === canReplace[index]) {
          canReplace.splice(index, 1);
        }
      }
      console.log("new canReplace, ", canReplace);
    }

    //original
    // if (chooseUpper !== hasUpper) {
    //   console.log("missing uppercase: ", passwordArray);
    //   //replace random index of passwordArray with random uppercase letter
    //   passwordArray[Math.floor(Math.random() * passwordArray.length)] =
    //     pwdCharsAll.uppercaseLetters[
    //       Math.floor(Math.random() * pwdCharsAll.uppercaseLetters.length)
    //     ];
    //   console.log("added uppercase letter", passwordArray);

    //check number
    if (chooseNum) {
      for (var i = 0; i < passwordArray.length; i++) {
        if (pwdCharsAll.numbers.includes(passwordArray[i])) {
          console.log('number "', passwordArray[i], '" at index ', i);
          hasNum = true;
        }
      }
    }

    //replace number
    if (chooseNum !== hasNum) {
      console.log("missing number: ", passwordArray);

      //picks random eligible index from canReplace to designate which index will be replaced in passwordArray
      replaceIndex = canReplace[Math.floor(Math.random() * canReplace.length)];
      console.log("replaceIndex ", replaceIndex);

      //replace random index of passwordArray with random number
      passwordArray[replaceIndex] =
        pwdCharsAll.numbers[
          Math.floor(Math.random() * pwdCharsAll.numbers.length)
        ];
      console.log("added number", passwordArray);

      //remove replaceIndex from canReplace so it can't be overwritten by other character type checks
      for (let index = 0; index < canReplace.length; index++) {
        if (replaceIndex === canReplace[index]) {
          canReplace.splice(index, 1);
        }
      }
      console.log("new canReplace, ", canReplace);
    }
    // original
    // //replace number
    // if (chooseNum !== hasNum) {
    //   console.log("missing number: ", passwordArray);
    //   //replace random index of passwordArray with random number
    //   passwordArray[Math.floor(Math.random() * passwordArray.length)] =
    //     pwdCharsAll.numbers[
    //       Math.floor(Math.random() * pwdCharsAll.numbers.length)
    //     ];
    //   console.log("added number", passwordArray);

    //check special
    if (chooseSpecial) {
      for (var i = 0; i < passwordArray.length; i++) {
        if (pwdCharsAll.specialChar.includes(passwordArray[i])) {
          console.log('special char  "', passwordArray[i], '" at index ', i);
          hasSpecial = true;
        }
      }
    }

    //replace special
    if (chooseSpecial !== hasSpecial) {
      console.log("missing special char: ", passwordArray);

      //picks random eligible index from canReplace to designate which index will be replaced in passwordArray
      replaceIndex = canReplace[Math.floor(Math.random() * canReplace.length)];
      console.log("replaceIndex ", replaceIndex);

      //replace random index of passwordArray with random uppercase letter
      passwordArray[replaceIndex] =
        pwdCharsAll.specialChar[
          Math.floor(Math.random() * pwdCharsAll.specialChar.length)
        ];
      console.log("added specialChar", passwordArray);

      //remove replaceIndex from canReplace so it can't be overwritten by other character type checks
      for (let index = 0; index < canReplace.length; index++) {
        if (replaceIndex === canReplace[index]) {
          canReplace.splice(index, 1);
        }
      }
      console.log("new canReplace, ", canReplace);
    }
    //original
    //replace special
    // if (chooseSpecial !== hasSpecial) {
    //   console.log("missing special char: ", passwordArray);
    //   //replace random index of passwordArray with random uppercase letter
    //   passwordArray[Math.floor(Math.random() * passwordArray.length)] =
    //     pwdCharsAll.specialChar[
    //       Math.floor(Math.random() * pwdCharsAll.specialChar.length)
    //     ];
    //   console.log("added specialChar", passwordArray);
    // }

    //!!!! linear process can overwrite added characters without changing the 'has' value to false.
    // results in pwd that doesn't meet criteria
    // perhaps need to choose randomly from an array of passwordLength.length [0,1,2,3,4,5,6,7] to make the substitution,
    // and then remove that value from the array so it doesn't get overwritten.
  } while (
    chooseLower !== hasLower ||
    chooseUpper !== hasUpper ||
    chooseNum !== hasNum ||
    chooseSpecial !== hasSpecial
  );

  //   passwordArray.forEach(letter) => {
  //     if (pwdCharsAll.lowercaseLetters.includes(letter)) {
  //       console.log('lowercase letter, ' letter);
  //     }
  //   }
  // }

  //
  // can delete "password" and use return to pass the actual password to the var "password" in writePassword()
  //so:
  // return(passwordArray.join(''));
  password = passwordArray.join("");
  console.log(password);
  return password;
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
