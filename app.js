let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//Função para fazer a máquina escolher entre pedra, papel ou tesolra
function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

//Função para converter as escolhas em strings
function convertToWord(letter){
  if(letter === "r") return "Pedra";
  if(letter === "p") return "Papel";
  return "Tesolra";
}

//Função usada quando o usuário vence
function win(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} vence ${convertToWord(computer)}${smallCompWord} . Você venceu! 🔥`;
  //Criar uma luz verde caso o usuário vença
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

//Função usada quando o usuário perder
function lose(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} perde para ${convertToWord(computer)}${smallCompWord}. Você perdeu! 💩`;
  //Criar uma luz vermelha caso o usuário perca
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

//Função usada quando o jogo empatar
function draw(user, computer){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(user)}${smallUserWord} é igual ${convertToWord(computer)}${smallCompWord}. Empatou!`
  //Criar uma luz cinsa para quando o jogo empatar
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

//Função para decidir quem vence com base nas escolhas
function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

//Função principal que registra os dados do clique
function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();
