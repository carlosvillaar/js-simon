//Prendo gli elementi dall'html
const countdown = document.querySelector('.countdown');
const numOneRandom = document.getElementById('num-random-one');
const numTwoRandom = document.getElementById('num-random-two');
const numThreeRandom = document.getElementById('num-random-three');
const numFourRandom = document.getElementById('num-random-four');
const input = document.querySelectorAll('input');
const button = document.getElementById('button');
const containerRandom = document.getElementById('container-random');
const containerForm = document.getElementById('container-form')
const alert = document.getElementById('alert');
const remember = document.querySelector('.remember');


//Timer
let counter = 10;
const timer = setInterval(() => {
  countdown.innerHTML = counter--
  if (counter < 0) { 
    clearInterval(timer);
    countdown.innerHTML = 'Tempo Scaduto!'
    containerRandom.classList.add('hidden');
    containerForm.classList.remove('hidden');
    remember.classList.add('hidden');
  }
}, 1000);



//Aggiungo i numeri random all'HTML e li pusho nell'array
const randomNumbers = [];
randomNumbers.push(numOneRandom.innerHTML = randomNumber(1,50));
randomNumbers.push(numTwoRandom.innerHTML = randomNumber(1,50));
randomNumbers.push(numThreeRandom.innerHTML = randomNumber(1,50));
randomNumbers.push(numFourRandom.innerHTML = randomNumber(1,50));

button.addEventListener('click', () => {
  const equalNumbers = [];
  //leggo i valori degli input
  for (i = 0; i < input.length; i++){
    if (randomNumbers.includes(parseInt(input[i].value))){
      equalNumbers.push(parseInt(input[i].value))
    } 
  }
  if (equalNumbers.length === 0){
    alert.innerHTML = `<p style="color: red; padding-top: 20px;">Alzheimer precoce? Non hai indovinato nessun numero. Riprova!</p>`
  } else if (equalNumbers.length >= 2){
    alert.innerHTML = `<p style="color: green; padding-top: 20px;">Bravissimo, hai indovinato ${equalNumbers.length} numeri. I numeri indovinati sono ${equalNumbers}.</p>`
    
  }else if ((equalNumbers.length = 1)) {
    alert.innerHTML = `<p style="color: orange; padding-top: 20px;">Poteva andare meglio, hai indovinato un numero. Il numero indovinato è ${equalNumbers}.</p>`
  }

  containerRandom.classList.remove('hidden')
  containerForm.classList.add('hidden')
})



//Funzioni
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



