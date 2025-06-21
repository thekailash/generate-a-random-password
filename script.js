let passwordInput = document.querySelector("#password");
let length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%*&*()_+~|*[]></-=";

let allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordInput.value = password;
}

function copyPassword(){
    passwordInput.select();
    document.execCommand("copy");
    passwordInput.value = "Copied!!";
}