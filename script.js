// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  choseLength: 0,
  choseLower: 0,
  choseUpper: 0,
  choseNum: 0,
  choseSpecial: 0,
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
    "|",
    "~",
  ],
};

//returns a random value between 8 and 128
function randomPasswordLength() {
  do {
    value = Math.floor(Math.random() * 128) + 1;
  } while (value < 8);
  return value;
}

//runs prompts for user to select password criteria, generates the password, checks for proper character mix, and returns password
function generatePassword() {
  // ~~~ Begin variables and subfunction defintions ~~~

  var passwordLength; //a value between 8 - 128 given by user or random

  //chose* vars are set to true if user selects them
  var choseLower = false;
  var choseUpper = false;
  var choseNum = false;
  var choseSpecial = false;

  var selectedChars = []; //combines character types from pwdCharsAll object based on user selection
  var passwordArray = []; //each letter of password

  //has* vars used in the check phase to see if password actually contains at least one of each character type selected by user
  var hasLower = false;
  var hasUpper = false;
  var hasNum = false;
  var hasSpecial = false;

  var canReplace = []; // used in check phase so that characters are only replaced once
  var replaceIndex; // this character index will be spliced from canReplace after it's been substituted

  //called during check phase to add in character type if one is missing.
  function replaceChar(pwdCharsAllArray) {
    //picks random eligible index from canReplace to designate which index will be replaced in passwordArray
    replaceIndex = canReplace[Math.floor(Math.random() * canReplace.length)];

    //replace random index of passwordArray with random character from selected array in pwdChar
    passwordArray[replaceIndex] =
      pwdCharsAllArray[Math.floor(Math.random() * pwdCharsAllArray.length)];

    //remove replaceIndex from canReplace array so it can't be overwritten by subsequent character type checks
    for (let index = 0; index < canReplace.length; index++) {
      if (replaceIndex === canReplace[index]) {
        canReplace.splice(index, 1);
      }
    }
  }

  // ~~~ End variables and subfunction defintions ~~~

  // ~~~ opening message
  alert("We'll begin by setting your password criteria.");

  // ~~~ ask user for a password length or create random length
  if (
    confirm(
      "Click 'OK' if you'd like to choose a specific password length. Otherwise, a random length will be chosen."
    )
  ) {
    //check that user inputs a number between 8 - 128, else re-prompt
    while (
      Number.isFinite(passwordLength) === false ||
      passwordLength < 8 ||
      passwordLength > 128
    ) {
      passwordLength = Number(
        prompt("Enter number between 8 - 128 for your password length:")
      );
    }
  } else {
    passwordLength = randomPasswordLength();
  }

  // ~~~ ask user if they want to include lowercase letters
  if (confirm("Click 'OK' if you'd like to include lowercase characters.")) {
    choseLower = true;
  }

  // ~~~ ask user if they want to include upper letters
  if (confirm("Click 'OK' if you'd like to include uppercase characters.")) {
    choseUpper = true;
  }

  // ~~~ ask user if they want to include numbers
  if (confirm("Click 'OK' if you'd like to include numbers.")) {
    choseNum = true;
  }

  //ask user if they want to include special characters
  if (confirm("Click 'OK' if you'd like to include special characters.")) {
    choseSpecial = true;
  }

  // ~~~ confirm user's criteria are correct before generating password
  //user can cancel out at this point.
  if (
    confirm(
      "Confirm that you'd like a password with the following criteria: Length: " +
        passwordLength +
        ", Lowercase Letters: " +
        choseLower +
        ", Uppercase Letters: " +
        choseUpper +
        ", Numbers: " +
        choseNum +
        ", Special Characters: " +
        choseSpecial +
        "."
    )
  ) {
    // ~~~ Commence generating password in 3 steps ~~~

    //Step 1. Concat a combined array of eligble characters based on user criteria
    if (choseLower) {
      selectedChars = selectedChars.concat(pwdCharsAll.lowercaseLetters);
    }
    if (choseUpper) {
      selectedChars = selectedChars.concat(pwdCharsAll.uppercaseLetters);
    }
    if (choseNum) {
      selectedChars = selectedChars.concat(pwdCharsAll.numbers);
    }
    if (choseSpecial) {
      selectedChars = selectedChars.concat(pwdCharsAll.specialChar);
    }

    //Step 2. Generate random password from eligble characters
    for (var i = 0; i < passwordLength; i++) {
      //chooses a random letter from selectedChars for each value in passwordArray
      passwordArray[i] =
        selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }

    //Step 3. Check that each of the selected character types are actually in the password,
    //if character types are missing, add them.

    //set up canReplace so that any character in the password can be replaced to start.
    for (let index = 0; index < passwordArray.length; index++) {
      canReplace.push(index);
    }

    do {
      //reset has* booleans before each pass to ensure the check is accurate
      hasLower = false;
      hasUpper = false;
      hasNum = false;
      hasSpecial = false;

      //check for lowercase if part of criteria
      if (choseLower) {
        for (var i = 0; i < passwordArray.length; i++) {
          if (pwdCharsAll.lowercaseLetters.includes(passwordArray[i])) {
            hasLower = true;
          }
        }
      }
      //add lowercase character if there should be one
      if (choseLower !== hasLower) {
        replaceChar(pwdCharsAll.lowercaseLetters);
      }

      //check for uppercase if part of criteria
      if (choseUpper) {
        for (var i = 0; i < passwordArray.length; i++) {
          if (pwdCharsAll.uppercaseLetters.includes(passwordArray[i])) {
            hasUpper = true;
          }
        }
      }
      //add uppercase character if there should be one
      if (choseUpper !== hasUpper) {
        replaceChar(pwdCharsAll.uppercaseLetters);
      }

      //check for number if part of criteria
      if (choseNum) {
        for (var i = 0; i < passwordArray.length; i++) {
          if (pwdCharsAll.numbers.includes(passwordArray[i])) {
            hasNum = true;
          }
        }
      }
      //add number if there should be one
      if (choseNum !== hasNum) {
        replaceChar(pwdCharsAll.numbers);
      }

      //check for special character if part of criteria
      if (choseSpecial) {
        for (var i = 0; i < passwordArray.length; i++) {
          if (pwdCharsAll.specialChar.includes(passwordArray[i])) {
            hasSpecial = true;
          }
        }
      }
      //add special character if there should be one
      if (choseSpecial !== hasSpecial) {
        replaceChar(pwdCharsAll.specialChar);
      }
    } while (
      choseLower !== hasLower ||
      choseUpper !== hasUpper ||
      choseNum !== hasNum ||
      choseSpecial !== hasSpecial
    );
    // end of check step

    return passwordArray.join("");
  }
}

// ~~~ Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
