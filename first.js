let userScore=document.querySelector("#user");
let compScore=document.querySelector("#comp");

let user_score=0;
let comp_score=0;

const msg=document.querySelector("#msg");
const playAgainBtn = document.querySelector("#playAgain");

const choices=document.querySelectorAll(".choice");
console.log(choices);

const genCompChoice=()=>{
    const choiceslist=["rock","paper","scissor"];
    const i=Math.floor(Math.random()*3);
    console.log("comp choice:"+ choiceslist[i]);
    return choiceslist[i];
}

const drawGame=()=>{
    console.log("It was a draw");
    msg.style.backgroundColor="#081b31";
    msg.innerText="Game was a Draw! Have another go?";
    playAgainBtn.style.display = "block";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++;
        userScore.innerText=user_score;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        console.log("User wins!");
    }
    else{
        comp_score++;
        compScore.innerText=comp_score;
        msg.innerText=`You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        console.log("computer wins");
    }
    playAgainBtn.style.display = "block";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
           const userChoice=choice.getAttribute("Id");
           console.log("user choice:"+userChoice);
           playGame(userChoice);
    });
});

const playGame=(userChoice=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
          drawGame();
    }
    else{
        userWin=true;
        if(userChoice==="paper"){
            userWin=compChoice=="scissor"?false : true;
        }
        else if (userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;}
        else {
            userWin=compChoice==="rock"? false: true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
})
playAgainBtn.addEventListener("click", ()=>{
    msg.innerText="Play your move !";
    msg.style.backgroundColor="#081b31";
    playAgainBtn.style.display="none";
    userScore.innerText="0";
    compScore.innerText="0";
});
