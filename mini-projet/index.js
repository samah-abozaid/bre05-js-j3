/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

function grid1()
{
 let grids = document.querySelectorAll(".grid");
 grids[0].style.backgroundColor="#020e13";
}

/////******************************
function grid2()
{
let grids = document.querySelectorAll(".grid"); // cibler tous les grid 

let divs = grids[1].querySelectorAll("div");  //cibler les div de grid 2

 for(let i=0; i< divs.length ;i++){  // parcourir dans les divs 
 
     if(i%2===0){
         divs[i].style.backgroundColor="#4cee7e";
     }else{
        divs[i].style.backgroundColor="#efec4f"; 
     }
 }
}
//*************************
function grid3()
{
let grids = document.querySelectorAll(".grid");
let divs= grids[2].querySelectorAll("div");
    divs[0].style.backgroundColor="#e85b69";
    divs[1].style.backgroundColor="#eca45c";
    divs[2].style.backgroundColor="#efec4f";
    divs[3].style.backgroundColor="#4cee7e";
    divs[4].style.backgroundColor="#427cf5";
    divs[5].style.backgroundColor="#956caf";

}
///************************
function grid4() {
  // Tous les divs de la 4ème section sauf le 5ème
  const blackDivs = document.querySelectorAll(".grid:nth-of-type(4) div:not(:nth-of-type(5))");

  blackDivs.forEach(div => {
    div.style.backgroundColor = "#020e13"; // noir
  });

  // Le 5ème div de la 4ème section
  const vertDiv = document.querySelector(".grid:nth-of-type(4) div:nth-of-type(5)");
  vertDiv.style.backgroundColor = "#4cee7e"; // vert
}

function grid5()
{
let grids = document.querySelectorAll(".grid");
let divs= grids[4].querySelectorAll("div");
    divs[0].style.backgroundColor="#427cf5";
    divs[1].style.backgroundColor="#427cf5";
    divs[2].style.backgroundColor="#427cf5";
    divs[3].style.backgroundColor="#956caf";
    divs[4].style.backgroundColor="#e85b69";
    divs[5].style.backgroundColor="#956caf";
    divs[6].style.backgroundColor="#eca45c";
    divs[7].style.backgroundColor="#efec4f";
    divs[8].style.backgroundColor="#eca45c";
}

function grid6()
{
let grids = document.querySelectorAll(".grid");
let divs= grids[5].querySelectorAll("div");
    divs[0].style.background="linear-gradient(to bottom, #956caf, #4a90e2)";
    divs[1].style.background="linear-gradient(to bottom, #956caf, #4a90e2)";
    divs[2].style.background="linear-gradient(to bottom, #956caf, #4a90e2)";
    divs[3].style.background="linear-gradient(to bottom, #4cee7e, #f2ff5c)";
    divs[4].style.background ="linear-gradient(to bottom, #4cee7e, #f2ff5c)";
    divs[5].style.background="linear-gradient(to bottom, #4cee7e, #f2ff5c)";
    divs[6].style.background="linear-gradient(to bottom, #eca45c, #e74c3c)";
    divs[7].style.background="linear-gradient(to bottom, #eca45c, #e74c3c)";
    divs[8].style.background="linear-gradient(to bottom, #eca45c, #e74c3c)";

}

grid1();
document.addEventListener("DOMContentLoaded", () => {
grid2();
});
grid3();
grid4();
grid5();
grid6();
Soft-wrap