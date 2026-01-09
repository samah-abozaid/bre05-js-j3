//*****Votre javascript devra faire en sorte que le mot contenu dans le <span> soit barré.*******
//************************


//**ici le code ne march pas java scripte excute avant le html pour ça il faut utilser  addEventListener 
// const span = document.querySelector("span");
// span.textDecoration="line-through"; 

// Le problème vient du moment d’exécution du script

// DOMContentLoaded règle le problème


document.addEventListener("DOMContentLoaded", () => {  
  const span = document.querySelector("span");
  span.style.textDecoration = "line-through";
});