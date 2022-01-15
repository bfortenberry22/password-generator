//Welcome user
var welcome = function(){
    window.alert("Welcome to Password Generator. This program will generate a password based on your set criteria.");
    passLength();

//Asked user about lowercase, uppercase, numberical and special characters
var passLength = function(){
    length = window.prompt("How many characters would you like in the password. Please choose a number between 8 and 128.");
    length = parseInt (length) //converts desired length from a string
   
var ask = function(){
    var lower = window.confirm("Would you like your password to include LOWERCASE letters?");
  
    var upper= window.confirm("Would you like your password to include UPPERCASE letters?");
    
    var num = window.confirm("Would you like your password to include NUMBERS?");
   
    var speci = window.confirm("Would you like your password to include SPECIAL CHARACTERS, such as ! @ # $ % ^ & *");

   
//Create Password
var generatePassword = function(charType){
    var result = " ";
    var characters = charType;
    var charactersLength = characters.length;
    for( var i =0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength))
    }

    console.log(result);
    window.alert("Your new password is " + result  )

}


/*CHARACTER BANK*/
var luns = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*.?/"
var lun = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!123456789"
var lus = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*.?/"
var lns = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*.?/"
var uns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*.?/"
var lu = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
var ln = "abcdefghijklmnopqrstuvwxyz123456789"
var ls = "abcdefghijklmnopqrstuvwxyz!@#$%^&*.?/"
var un = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
var us = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*.?/"
var ns = "123456789!@#$%^&*.?/"
var l = "abcdefghijklmnopqrstuvwxyz"
var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var n = "123456789"
var s = "!@#$%^&*.?/"


