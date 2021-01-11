// Assignment Code
var generateBtn = document.querySelector("#generate");
const minCount = 8;
const maxCount = 128;
var passwordLength;
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*(){}[]=<>/,.|~?";
var numbers = "1234567890";
var options = {
        "upper": true, 
        "lower": true, 
        "special": true, 
        "numbers": true
    };
var acceptableTypes = [];

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
    showPrompt();
    getPasswordLength();
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
    acceptableTypes.length = 0;

    options.upper = confirm("Do you want to include Upper-case ?");
    options.lower = confirm("Do you want to include Lower-case ?");
    options.special = confirm("Do you want to include Special characters ?");
    options.numbers = confirm("Do you want to include Numbers ?");

    if (options.upper) {
        acceptableTypes.push('upper');
    } 
    if (options.lower) {
        acceptableTypes.push('lower');
    } 
    if (options.special) {
        acceptableTypes.push('special');
    }
    if (options.numbers) {
        acceptableTypes.push('numbers');
    } 

    if (!options.upper && !options.lower && !options.special && !options.numbers) {
        alert("Please select atleast one type!");
        showPrompt();
    }
}

// Get random character from acceptable string
function getRandomCharacterFrom(string) {
    if (string == "upper") {
        return upper[Math.floor(Math.random() * upper.length)];
    } else if (string == "lower") {
        return lower[Math.floor(Math.random() * lower.length)];
    } else if (string == "special") {
        return special[Math.floor(Math.random() * special.length)];
    } else if (string == "numbers") {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }
}

// Generate password based on user chosen options
function generatePassword() {
    var randomPassword = "";
    for (var i=0; i< passwordLength; i++) {
        var randomNo = Math.floor(Math.random() * acceptableTypes.length);  
        randomPassword += getRandomCharacterFrom(acceptableTypes[randomNo]);
        getRandomCharacterFrom["UpperCase"];
    }
    return randomPassword;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

