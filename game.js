// generate a random number between 1 to 100 
let randomnumber = Math.floor(Math.random()* 100) +1;
// variable attempts will keep track of attempts 
let attempts=0;

//function to check the users guess
function checkGuess(){
    const guessInput = document.getElementById('guess');
    const feedback = document.getElementById('feedback');
    const userGuess= Number(guessInput.value);
    if(!userGuess || userGuess <1 || userGuess >100){
        feedback.innerHTML= 'please enter a vaild number between 1 and 100';
        return;
    }
   attempts++;// increase the court of attempts by 1 
   if(userGuess === randomnumber)
   {
   feedback.innerHTML = ` congratuations ! you guessed the number is ${attempts} attempts `;



} else if(userGuess > randomnumber){
    feedback.innerHTML = "too high ! try again";

feedback.style.color='red';

} else{
    feedback.innerHTML = "Too Low ! Try again";
    feedback.style.color='red';
}

}

// reset game 
function resetGame(){
    randomnumber=Math.floor(Math.random()* 100) +1;
    attempts=0;
    document.getElementById('guess').value="";
    document.getElementById('feedback').innerHTML='';
}


