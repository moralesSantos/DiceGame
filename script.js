var randomNumber1 = Math.random();
var randomNumber2 = Math.random();


randomNumber1 =  Math.floor(randomNumber1 * 6) + 1; 
randomNumber2 =  Math.floor(randomNumber2 * 6) + 1; 

console.log(randomNumber1); 

var imgSelector = document.querySelectorAll("img")[0];
var newSource = "images/dice" + randomNumber1 + ".png";
console.log(newSource); 
imgSelector.setAttribute("src", newSource);


var imgSelector2 = document.querySelectorAll("img")[1];
var newSource2 = "images/dice" + randomNumber2 + ".png";
console.log(newSource); 
imgSelector2.setAttribute("src", newSource2);

var anounceWinner = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    anounceWinner.innerHTML = "🚩 Play 1 Wins!"; 
} else if (randomNumber2 > randomNumber1){
    anounceWinner.innerHTML = "🚩 Play 2 Wins!"
} else{
    anounceWinner.innerHTML = "🚩Draw 🚩"
}



