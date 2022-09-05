console.log('Hello Javascript!!!')

const options = ['Rock', 'Paper', 'Scissor']

let min = 0;
let max = 2;
let selectedValue;
let result = [];
const userSelection = +prompt('Enter 0 for Rock \n 1 for Paper \n 2 for Scissor');

getComputerChoice = () => {
    return Math.floor(Math.random()*(2-0+1)+0);
}

console.log('Generated random: ', getComputerChoice());
console.log('User\'s input: ', userSelection);

console.log("Computer selected: ", options[getComputerChoice()])

console.log("User selected: ", options[userSelection])

alert(`You selected: $(options[userSelection]) \n Computer selected: $(options[getComputerChoice()])`);