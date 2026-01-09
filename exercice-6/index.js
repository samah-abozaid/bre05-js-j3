//****Votre javascript devra faire en sorte que le troisième paragraphe n'aie plus la classe info.***
    ///*************************

document.addEventListener("DOMContentLoaded", ()=>{
   const paragraph = document.querySelectorAll("p"); // return une list 
   for(let i=0; i<paragraph.length ; i++){
       paragraph[i].classList.remove("info"); 
   }
    
});

    
    
    