// Clicca il tasto e mostra la frase di Mila
button = document.getElementById("button");

function clicca() {
  let phrases = ['Ciao sono Mila, la cagnolina biricchina!',
    'Amo stare tutto il giorno nella mia casina',
    'Che goduria scavare buche nel giardino!',
    'Voglio proteggere il mio fratellino Samuele',
    'Che paura i botti di Capodanno',
    'Non possono mancare le coccole dei miei padroncini',
    'Ho tanta paura dei cani più grandi di me',
    "Un biscottino è sempre un'ottima idea",
    'Di notte voglio sempre saltare sul letto',
    'Quanto odio farmi fare il bagnetto!', 
    'Lo sai che ho un profilo Tik Tok?',
    'Un giorno mi sono rotolata nel letame, il mio padroncino ha dovuto farmi un bel bagnetto!',
    'Quante feste faccio al ritorno dei miei padroni!',
    'Dammi un osso e lo custodirò fino al tuo ritorno',
    'Quando finisco la pappa vado sempre a farmi fare i complimenti',
  ];
  let random = Math.floor(Math.random() * phrases.length);

  function mila() {
    return phrases[random];
  }

  slogan.innerHTML = mila();
}


