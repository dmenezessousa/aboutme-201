"use strict";
//Prompt User for the user's name and greet them based on the they input and time zone
function greetUser() {
  const maxCount = 10;
  let name = prompt("What is your name?");
  let today = new Date();
  let hourNow = today.getHours();
  let greeting = "";
  if (name == null || name == "") {
    alert("Please enter your name");
    if (maxCount > 0) {
      greetUser();
    }
  } else if (isNaN(name) == false) {
    alert("Please enter a valid name");
    if (maxCount > 0) {
      greetUser();
    }
  } else if ((hourNow > 18 && name != null) || name != "") {
    greeting = "Hello " + name + "," + " Good evening and Wecolme!";
  } else if ((hourNow > 12 && name != null) || name != "") {
    greeting = "Hello " + name + "," + " Good afternoon and Wecolme!";
  } else if ((hourNow > 0 && name != null) || name != "") {
    greeting = "Hello " + name + "," + " Good morning and Wecolme!";
  } else {
    greeting = "Welcome " + name + "," + "!";
  }
  document.write("<h3>" + greeting + "</h3>");
}

//Prompt user for a guessing game about me. Store users input and gives feedback to them
function guessingGame() {
  // //Variables
  let maxTry = 4;
  let totalTries = 0;
  let totalQuestions = 7;
  let maxTries = 6;
  const answers = [
    "cereal",
    "meat",
    "fruit",
    "beans",
    "bread",
    "pasta",
    "rice",
    "soup",
    "onions",
    "potatoes",
    "milk",
    "vegetables",
  ];
  let number = Math.floor(Math.random() * 10) + 1;

  //Prompt user for a guess
  alert("Welcome to the guessing game!");

  //Loop through the max tries
  let q1 = prompt("Is my name 'Diego'?");
  if (q1.toLowerCase() == "yes" || q1.toLowerCase() == "y") {
    alert("Correct! Yes, My name is Diego");
  } else {
    alert("Incorrect! My name is Diego");
    totalTries++;
  }
  let q2 = prompt("Am I from New Jersey?");
  if (q2.toLowerCase() == "yes" || q2.toLowerCase() == "y") {
    alert("Correct! Yes, I am from New Jersey");
  } else {
    alert("Incorrect! My I am from New Jersey");
    totalTries++;
  }
  let q3 = prompt("Am I 35 years old?");
  if (q3.toLowerCase() == "no" || q3.toLowerCase() == "n") {
    alert("Correct! I am  actually 30 years old");
  } else {
    alert("Incorrect! Cmon!, I am not 35 years old");
    totalTries++;
  }
  let q4 = prompt("Am I 5'10'' tall?");
  if (q4.toLowerCase() == "no" || q4.toLowerCase() == "n") {
    alert("Correct! I am actually 5'11''");
  } else {
    alert("Incorrect! I am not 5'10'' tall");
    totalTries++;
  }
  let q5 = prompt("Am I learning to code?");
  if (q5.toLowerCase() == "yes" || q5.toLowerCase() == "y") {
    alert("Correct! I am learning to code");
  } else {
    alert("Incorrect! I am learning to code");
    totalTries++;
  }

  let q6 = prompt("Guess a number between 1 and 10");
  while (q6 != number && maxTry > 0) {
    maxTry--;
    if (q6 == " " || q6 == null || q6 == undefined) {
      alert("Please enter a number");
    } else if (isNaN(q6)) {
      alert("Please enter a number");
    } else {
      if (q6 == number) {
        alert("Correct! The number was " + number);
      } else if (maxTry == 0) {
        alert("You have no more tries left! The number was " + number);
        totalTries++;
        break;
      } else if (q6 > number) {
        alert("Too high! Try again");
      } else if (q6 < number) {
        alert("Too low! Try again");
      }
    }
    q6 = prompt("Guess a number between 1 and 10");
  }

  for (let i = 0; i < maxTries; i++) {
    let q7 = prompt("Guess a food item");
    if (q7 == null || q7 == "") {
      alert("Please enter a food item");
    } else if (answers.includes(q7)) {
      alert("Correct! " + q7 + " is a food item in this list");

      break;
    } else {
      alert("Incorrect! " + q7 + " is not a food item in this list");
      totalTries++;
    }

    if (i == maxTries - 1) {
      alert("You have no more tries left! The food items are: " + answers);
    }
  }
  alert(
    "You got questions right: " + (totalQuestions - totalTries) + " out of 7"
  );
}
