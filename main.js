// Clicca il tasto e mostra la frase di Mila
button = document.getElementById("button");
frase = document.getElementById("frase");

button.addEventListener("click", clicca);

function clicca() {
  let phrases = ['Ciao sono Mila, la cagnolina biricchina!', 'Amo stare tutto il giorno nella mia casina'];
  let random = Math.floor(Math.random() * phrases.length);

function mila() {
  return phrases[random]; 
}

frase.innerHTML = mila();
button.style.display = "none";
slogan.style.display = "none";
}


