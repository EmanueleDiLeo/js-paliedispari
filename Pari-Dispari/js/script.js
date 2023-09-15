const button = document.querySelector(".btn");

button.addEventListener("click", function(){
  const userNumber = parseInt(document.querySelector("#number").value);
  const userText = document.querySelector("#even-odd").value;
  const message = check(userNumber, userText)

  document.querySelector("#output").innerHTML = message;
});


/**
 * 
 * @returns number
 */
function random(){
  return Math.ceil(Math.random() * 5);
}


/**
 * 
 * @param {number} sum 
 * @param {string} text 
 * @returns string
 */
function win(sum, text){
  let evenOdd;
  sum % 2 ? evenOdd = "dispari" : evenOdd = "pari";
  if(text === evenOdd){
    return "Ha vinto l'utente perchè la somma è " + sum + " ed è " + evenOdd;
  }
  else{
    return "Ha vinto il pc perchè la somma è " + sum + " ed è " + evenOdd;
  }
}


/**
 * 
 * @param {number} userNumber 
 * @returns string
 */
function check(userNumber, userText){
  let message;
  if(userNumber < 6 && userNumber > 0){
    const sum = userNumber + random();
    message = win(sum, userText);
    return message;
  }
  else{
    return "Hai Inserito un numero sbagliato";
  }
  
}