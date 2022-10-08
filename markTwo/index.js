//CLI Quiz - F.R.I.E.N.D.S Trivia
var readlineSync = require('readline-sync');

var colors = require('colors');
//colours used: cyan,blue,red

//Welcome user
var userName = readlineSync.question("What's your name? ");
console.log("Welcome ".blue + userName);
console.log("Lets begin with the ".blue + "F.R.I.E.N.D.S ".red + "Trivia".blue);
console.log("Type only 'a' or 'b'".cyan);
console.log("");
var score = 0;

//Array of questions
var questions = [
  {
    question: "Q1. What are the names of Ross and Monica's parents? \n a) Jack and Judy Geller \n b) Jack and Jill Geller \n Ans: ",
    answer: "a"
  },
  {
    question: "Q2.  What is the name of Phoebe's twin sister? \n a) Carol  \n b) Ursula \n Ans:  ",
    answer: "b"
  },
  {
    question: "Q3. Joey played Dr. Drake Ramoray on which soap opera show? \n a) Good Old days \n b) Days of Our Lives \n Ans:  ",
    answer: "b"
  },
  {
    question: "Q4. Who was the manager of Central Coffee shop? \n a) Gunther \n b) Barry \n Ans:  ",
    answer: "a"
  },
  {
    question: "Q5. What was the name of Ross pet monkey? \n a) Ben \n b) Marcel \n Ans:  ",
    answer: "b"
  },
  {
    question: "Q6. What form of self-defense does Ross try to teach Rachel and Phoebe? \n a) Unagi \n b) Karate \n Ans: ",
    answer: "a"
  },
  {
    question: "Q7. Chandler and Joey had two pets. What were they called? \n a) Chick Jr. and Duck Jr. \n b) Chuck and Duck \n Ans: ",
    answer: "a"
  },
  {
    question: "Q8. What was the name of Chandler and Ross college band? \n a) Flock of birds \n b) Way, No Way \n Ans: ",
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
    name: "Joey",
    score: 8
  },
  {
    name: "Chandler",
    score: 7
  },
  {
    name: "Ross",
    score: 6
  }
]

console.log("Thank you for playing :)".blue);
console.log("Final score: ".blue + score);
console.log("");

//Branching statement  
if (highscores[0].score === score) {
  console.log("Congrats!🎉 You broke the highscore".green);
  console.log("Send me the screenshot of your score and highscore list will be updated soon");
}
else if (highscores[1].score === score) {
  console.log("Congrats! You tied for the second place".green);
  console.log("Send me the screenshot of your score and highscore list will be updated soon");
}
else if (highscores[2].score === score) {
  console.log("Congrats! You tied for the third place".green);
  console.log("Send me the screenshot of your score and highscore list will be updated soon");
}
else {
  console.log("Great Job! Better luck next time".green);
}