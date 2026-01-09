//*****Votre javascript devra faire en sorte que le deuxième paragraphe aie la classe info.*******

//1- récupérer tous les paragraph
//2- cibler le deuxiem paragraph
//3- applique la class info 

document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("p"); // return une list 
  paragraphs[1].classList.add("info");
});


