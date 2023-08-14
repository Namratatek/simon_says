let gameseq=[];
let userseq=[];
let btns =["red","green","yellow","blue"];

let started=false;
let level=0;

let h2= document.querySelector("h2");
//let body=document.querySelector("body");
function btnflash(btn){
        btn.classList.add("flash");
        setTimeout(function (){
            btn.classList.remove("flash");
        },250);

    }

function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    
    btnflash(randBtn);
}

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("gamestarted");
        started=true;
        levelUp();
    }
})
// function flashbg(){
//     body.classList.add("flashbg");
//         setTimeout(function (){
//             body.classList.remove("flashbg");
//         },250);
// }

function checkAns(idx){
    // console.log(`curr level is ${level}`);
    
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b> ${level} <b> <br> Press any key to start`;
        let audio= new Audio('sounds/negative_beeps-6008.mp3');
             audio.play();
        reset();
        //flashbg();
    }
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    level=0;
    userseq=[];
    gameseq=[];
}


