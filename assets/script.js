//Welcome user
var welcome = function(){
    window.alert("Welcome to Password Generator. This program will generate a password based on your set criteria.");
    passLength();

//Asked user about lowercase, uppercase, numberical and special characters
var passLength = function(){
    length = window.prompt("How many characters would you like in the password. Please choose a number between 8 and 128.");
    length = parseInt (length) //converts desired length from a string
    console.log(length + " characters");
   
var ask = function(){
    var lower = window.confirm("Would you like your password to include LOWERCASE letters?");
  
    var upper= window.confirm("Would you like your password to include UPPERCASE letters?");
    
    var num = window.confirm("Would you like your password to include NUMBERS?");
   
    var speci = window.confirm("Would you like your password to include SPECIAL CHARACTERS, such as ! @ # $ % ^ & *");

    //listed the different combinations of the choices ending with an else statement that will loop the function if no choices are made
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

    console.log(result);
    window.alert("Your new password is " + result  )
}
