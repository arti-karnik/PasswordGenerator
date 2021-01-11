// Assignment Code
var generateBtn = document.querySelector("#generate");
const minCount = 8;
const maxCount = 128;
var passwordLength;
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*(){}[]=<>/,.|~?";
var numbers = "1234567890";
var options = {
        "upper": true, 
        "lower": true, 
        "special": true, 
        "numbers": true
    };

var acceptableCharacters = "";

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    showPrompt();
    getPasswordLength();
    console.log(passwordLength);
    writePassword()
});

// Show Prompts to get Password length
function getPasswordLength() {
    passwordLength = prompt("Please Enter length of Password"); 

    if (parseInt(passwordLength) < minCount || parseInt(passwordLength) > maxCount) {
        alert("Password length should be between " + minCount + " and " + maxCount);
        getPasswordLength();
    } 
}

// Show Prompts for including Upper-case, Lower-case, Special characters and Numbers
function showPrompt() {
    acceptableCharacters = "";
    options.upper = confirm("Do you want to include Upper-case ?");
    options.lower = confirm("Do you want to include Lower-case ?");
    options.special = confirm("Do you want to include Special characters ?");
    options.numbers = confirm("Do you want to include Numbers ?");

    if (options.upper) {
        acceptableCharacters += upperLetters;
    } 
    if (options.lower) {
        acceptableCharacters += lowerLetters;
    } 
    if (options.special) {
        acceptableCharacters += special;
    }
    if (options.numbers) {
        acceptableCharacters += numbers;
    } 
    console.log(acceptableCharacters);

    if (!options.upper && !options.lower && !options.special && !options.number) {
        alert("Please select atleast one type!");
        showPrompt();
    }
}

// Get random character from acceptable string
function getRandomCharacterFrom(string) {
    return string[Math.floor(Math.random() * string.length)];
}

// Generate password based on user chosen options
function generatePassword() {
    var randomPassword = "";
    for (var i=0; i< passwordLength; i++) {
        randomPassword +=  getRandomCharacterFrom(acceptableCharacters);
    }
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

