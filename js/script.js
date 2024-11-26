//Prendo gli elementi dall'html
const countdown = document.querySelector('.countdown');
const numOneRandom = document.getElementById('num-random-one');
const numTwoRandom = document.getElementById('num-random-two');
const numThreeRandom = document.getElementById('num-random-three');
const numFourRandom = document.getElementById('num-random-four');
const numOne = document.getElementById('num-one');
const numTwo = document.getElementById('num-two');
const numThree = document.getElementById('num-three');
const numFour = document.getElementById('num-four');
const button = document.getElementById('button');
const containerRandom = document.getElementById('container-random');
const containerForm = document.getElementById('container-form')


//Timer
let counter = 10;
const timer = setInterval(() => {
  countdown.innerHTML = counter--
  if (counter < 0) { 
    clearInterval(timer);
    containerRandom.classList.add('hidden')
    containerForm.classList.remove('hidden')
  }
}, 500);


//Aggiungo i numeri random all'HTML e li pusho nell'array
const randomNumbers = [];
randomNumbers.push(numOneRandom.innerHTML = randomNumber(1,50))
randomNumbers.push(numTwoRandom.innerHTML = randomNumber(1,50))
randomNumbers.push(numThreeRandom.innerHTML = randomNumber(1,50))
randomNumbers.push(numFourRandom.innerHTML = randomNumber(1,50))



//Funzioni

//numero random
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



