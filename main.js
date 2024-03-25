// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
import inquirer from "inquirer";
import chalk from "chalk";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game");
const answer = await inquirer.prompt([{
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(chalk.green("Congratulation! you guessed right number"));
}
else {
    console.log(chalk.red("Better luck next time"));
}
