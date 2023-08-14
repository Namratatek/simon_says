document.addEventListener("keypress",function(){
    if(started==false){
        console.log("gamestarted");
        started=true;
        levelUp();
    }
})

let btns =["red","green","yellow","blue"];

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);//unimportant
    
    btnflash(randBtn);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}
let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    let userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns();
}

function checkAns(){
    // console.log(`curr level is ${level}`);
    let idx = level-1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            levelUp();
        }
    }else{
        h2.innerText = `Game Over! press any key to start`;
        //flashbg();
    }
}
document.querySelector("body").style.backgroundColor ="red";
        
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor  ="white";
            let audio= new Audio('sounds/negative_beeps-6008.mp3');
             audio.play();
        }, 150);