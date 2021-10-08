var readlineSync = require("readline-sync");
var chalk = require("chalk")
var score = 0;
var arr =
[
questionOne = {
  question: "What is my age?",
  answer: "29"
},

questionTwo = {
  question: "Who is my favourite singer?",
  answer: "ARIJIT SINGH"
},

questionThree = {
  question: "Do I own a guitar?",
  answer: "YES"
},

questionFour = {
  question: "What is the name of company I last worked for?",
  answer: "HDFC BANK"
},

questionFive = {
  question: "What is the name of bootcamp I am attending at present?",
  answer: "NEOGCAMP"
},

questionSix = {
  question: "Where do I live?",
  answer: "DAMOH"
},

questionSeven = {
  question: "What is my faourite color?",
  answer: "ORANGE"
},

questionEight = {
  question: "What is my favourite food?",
  answer: "DOSA"
}
];

var nameAnswer = readlineSync.question('What is your name?');
console.log('Welcome ' + nameAnswer);

for(var i=0;i<arr.length;i++)
  {
    var userAnswer = readlineSync.question(arr[i].question);
    
    if(userAnswer.toUpperCase() === arr[i].answer) 
      {
        console.log(chalk.green.bgBlack.underline("you are right"));
        score = score + 1;     
      }
    else
      {
        console.log(chalk.red.bgBlack.underline("You are wrong"));
      }
  };

console.log("your score is: ",score);

if(score>7)
  {
    console.log(chalk.blue.bgWhite("Yay! You have beaten the high score, please send a screenshot"));
  };
