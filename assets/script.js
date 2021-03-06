//Welcome user
var welcome = function(){
    window.alert("Welcome to Password Generator. This program will generate a password based on your set criteria.");
    passLength();
}
//Prompt for link of function
var passLength = function(){
    length = window.prompt("How many characters would you like in the password. Please choose a number between 8 and 128.");
    //convert desired length from a string
    length = parseInt (length); 
    console.log(length + " characters");
    //validate user input to be sure it meets the criteria for length 
    if (length >= 8 && length <=128){
      ask();
    } else {
        window.alert("Please choose a password length between 8 and 128.")
        passLength();
    }
    return length;
}

//Confirm what types of characters are wanted in the password
var ask = function(){
    var lower = window.confirm("Would you like your password to include LOWERCASE letters?");
  
    var upper= window.confirm("Would you like your password to include UPPERCASE letters?");
    
    var num = window.confirm("Would you like your password to include NUMBERS?");
   
    var speci = window.confirm("Would you like your password to include SPECIAL CHARACTERS, such as ! @ # $ % ^ & *");

    //list of the different combinations of the choices ending with an else statement that will loop the function if no choices are made
    if (lower && upper && num && speci){
        generatePassword (luns);
    } else if (lower && upper && num){
        generatePassword(lun);
    } else if (lower && upper&& speci){
        generatePassword(lus);
    }else if (lower && num && speci){
        generatePassword(lns);
    }else if (upper && num && speci){
        generatePassword(uns);    
    } else if (lower && upper){
        generatePassword (lu);
    } else if (lower && num ){
        generatePassword(ln);
    } else if (lower && speci){
        generatePassword(ls);
    } else if (upper && num){
        generatePassword(un);
    }else if (upper && speci){
        generatePassword(us); 
    }else if (num && speci){
        generatePassword(ns);
    }else if (upper){
        generatePassword(u);
    }else if (lower){
        generatePassword(l);
    }else if (num){
        generatePassword(n);
    } else if (speci){
        generatePassword(s)
    //validates that at least one option is chosen
    }else{
        window.alert("Please choose at least one type of characters for the password.")
        ask();
    }
}
//Create Password
var generatePassword = function(charType){
    var result = " ";
    var characters = charType;
    var charactersLength = characters.length;
    for( var i =0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    
    //Displays password in alret window
    window.alert("Your new password is " + result  )

};


/*CHARACTER BANK*/
var luns = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*.?/";
var lun = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!123456789";
var lus = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*.?/";
var lns = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*.?/";
var uns = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*.?/";
var lu = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ln = "abcdefghijklmnopqrstuvwxyz123456789";
var ls = "abcdefghijklmnopqrstuvwxyz!@#$%^&*.?/";
var un = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
var us = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*.?/";
var ns = "123456789!@#$%^&*.?/";
var l = "abcdefghijklmnopqrstuvwxyz";
var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var n = "123456789";
var s = "!@#$%^&*.?/";


