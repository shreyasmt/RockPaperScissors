let userScore = 0;
let computerScore = 0;
const userScore_ele = document.getElementById("user-score");
const computerScore_ele = document.getElementById("computer-score");

const score_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randon = Math.floor(Math.random() * 3);
    return choices[randon];
}

function convertoword(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function wins(user, computer){
    userScore++;
    userScore_ele.innerHTML = userScore;
    computerScore_ele.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    const glowdiv = document.getElementById(user);
    result_div.innerHTML = `${convertoword(user)}${smalluserword} beats ${convertoword(computer)}${smallcompword}. You Win!`
    glowdiv.classList.add('greenglow');
    setTimeout(() => glowdiv.classList.remove('greenglow'), 300);
}
function lose(user, computer){
    computerScore++;
    userScore_ele.innerHTML = userScore;
    computerScore_ele.innerHTML = computerScore;
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    const glowdiv = document.getElementById(user);
    result_div.innerHTML = `${convertoword(user)}${smalluserword} loses ${convertoword(computer)}${smallcompword}. You Lost....`
    glowdiv.classList.add('redglow');
    setTimeout(() => glowdiv.classList.remove('redglow'), 300);
}
function draw(user, computer){
    const smalluserword = "user".fontsize(3).sup();
    const smallcompword = "comp".fontsize(3).sup();
    const glowdiv = document.getElementById(user);
    result_div.innerHTML = `${convertoword(user)}${smalluserword} equals ${convertoword(computer)}${smallcompword}. It's a Draw....`
    glowdiv.classList.add('grayglow');
    setTimeout(() => glowdiv.classList.remove('grayglow'), 300);
}

function game(userChoice){
    const computerchoice = getComputerChoice();
    switch(userChoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerchoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerchoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice,computerchoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click',() => game("s"));

}
main();



