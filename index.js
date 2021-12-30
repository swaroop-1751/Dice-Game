var n = Math.random();
var randomNumber1 = Math.round(n*5)+1;
var randomDiceImage = (`dice${randomNumber1}.png`);
var randomImageSource = (`images/${randomDiceImage}`);
var finalImage1 = document.querySelectorAll("img")[0];
finalImage1.setAttribute("src" ,randomImageSource);

var n = Math.random();
var randomNumber2 = Math.round(n*5)+1;
var randomDiceImage = (`dice${randomNumber2}.png`);
var randomImageSource = (`images/${randomDiceImage}`);
var finalImage2 = document.querySelectorAll("img")[1];
finalImage2.setAttribute("src" ,randomImageSource);

  if (randomNumber1 > randomNumber2){
       document.querySelector("h1").innerHTML = " 🚩 Player 1 wins";
  }
  else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
  } else {
  document.querySelector("h1").innerHTML = "scores 🏁 equals";
}

