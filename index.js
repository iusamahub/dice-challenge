var randomNumber1 = Math.floor(Math.random()*6)+1; // 1-6

var randomDice = "dice" + randomNumber1 + ".png"; // Dice1.png - Dice6.png

var randomImageSource = "./images/" + randomDice; // ./images/Dice1.png - ./images/Dice6.png

image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random()*6)+1; // 1-6

var randomDice2 = "dice" + randomNumber2 + ".png"; // Dice1.png - Dice6.png

var randomImageSource2 = "./images/" + randomDice2; // ./images/Dice1.png - ./images/Dice6.png

image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins"
}else{
    document.querySelector("h1").innerText = "Player 2 wins"
}
