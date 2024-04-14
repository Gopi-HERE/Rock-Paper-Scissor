let userP = 0;
let compP = 0;
const match = document.getElementById("match");
const winner = document.getElementById("winner");
const result = document.getElementById("result");
const userScore = document.getElementById("myScore");
const compScore = document.getElementById("compScore");
const reset = document.getElementById( "reset" );

const rps = ["rock","paper","scissor"];
let compChoice = ()=>{
    let index = Math.floor(Math.random()*3);
    return rps[index];
};
let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let user = choice.getAttribute("id");
        let comp = compChoice();
        if(user === comp){
            result.innerHTML = `Both You and Comp picked ${comp}. It's a tie!`;
        }
        else if ( (user==="rock" && comp==="scissor") || (user==="scissor" && comp==="paper") || (user==="paper" && comp==="rock")) {
            result.innerHTML = `You picked  ${user}, Comp picked ${comp}..You got the point`;
            userP++;
        }
        else{
            result.innerHTML = `You picked  ${user}, Comp picked ${comp}..Computer got the point`;
            compP++;
        }       
        userScore.innerHTML=`Your Score : ${userP}`;
        compScore.innerHTML=`Comp Score : ${compP}`; 
        if(userP===10){
            match.style.display="none";
            winner.style.display="block";
            winner.innerHTML =`Congratulations!! You won the game. Your score is 10 and Computer score is ${compP}`;
        }
        else if(compP==10) {
            match.style.display= "none";
            winner.style.display ="block";
            winner.innerHTML =`You are a LOSER!! Computer won the game. Computer's score is 10 and your score is ${userP}`;
        }
    })
})
reset.addEventListener('click',()=>{
    match.style.display="block";
    winner.style.display="none";
    userP=0;
    compP=0;
    result.innerHTML = "";
    userScore.innerHTML=`Your Score : ${userP}`;
    compScore.innerHTML=`Comp Score : ${compP}`; 
})