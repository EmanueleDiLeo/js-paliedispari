const button = document.querySelector(".btn");
let message;

button.addEventListener("click", function(){
  const text = document.querySelector("#text").value.toLowerCase().replaceAll(" ","");
  let checks = check(text);
  
  checks ? message = "La parola inserita è palindroma" : message = "La parola inserita non è palindroma";
  document.querySelector("#output").innerHTML = message;
});


/**
 * 
 * @param {string} text 
 * @returns boolean
 */
function check(text){
  counter = text.length - 1;
  for(let i = 0; i <= counter; i++){
    if(text.charAt(i) !== text.charAt(counter)){
      return false;
    }
    counter--;
  }
  return true;
}