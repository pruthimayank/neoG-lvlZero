//CLI Quiz - DO YOU KNOW ME? 
var readlineSync = require('readline-sync');

var colors = require('colors');
//colours used: cyan,blue,red

//Welcome user
var userName = readlineSync.question("What's your name? ");
console.log("Welcome ".blue + userName);
console.log("Lets begin with the quiz: 'Do You Know MAYANK ?'".blue);
console.log("Type only 'a' or 'b'".cyan);
console.log("");
var score = 0;

//Array of questions
var questions = [
  {
    question: "Q1. Where do I live? \n a) Delhi \n b) Bangalore \n Ans: ",
    answer: "a"
  },
  {
    question: "Q2. What is my favourite colour? \n a) Yellow \n b) Blue \n Ans:  ",
    answer: "b"
  },
  {
    question: "Q3. What is my favourite sport? \n a) Cricket \n b) Football \n Ans:  ",
    answer: "b"
  },
  {
    question: "Q4. What is my zodiac sign? \n a) Pisces \n b) Leo \n Ans:  ",
    answer: "a"
  },
  {
    question: "Q5. What is my favourite season? \n a) Summer \n b) Winter \n Ans:  ",
    answer: "b"
  }
]

//Play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  //Branching statement
  if (userAnswer.toLowerCase()[0] === answer.toLowerCase()[0]) {
    console.log("You are right!".green);
    score++;
  }
  else {
    console.log("Oops, wrong one".red);
  }
  console.log("Current score: ".cyan + score);
  console.log("");
}

//Loop for calling function
for (i = 0; i < questions.length; i++) {
  var ques = questions[i].question;
  var ans = questions[i].answer;
  play(ques, ans);
}

//Array of highscores
var highscores = [
  {
    name: "Mayank",
    score: 5
  },
  {
    name: "",
    score: 4
  }
]

console.log("Thank you for playing :)".blue);
console.log("Final score: ".blue + score);
console.log("");

//Branching statement  
if (highscores[0].score === score) {
  console.log("Congrats! You tied for the first place".green);
  console.log("Send me the screenshot of your score and highscore list will be updated soon");
}
else if (highscores[1].score === score) {
  console.log("Congrats! You tied for the second place".green);
  console.log("Send me the screenshot of your score and highscore list will be updated soon");
}
else {
  console.log("Great Job! Better luck next time".red);
}