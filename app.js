"use strict";
//Prompt User for the user's name and greet them based on the they input and time zone
function greetUser() {
  const maxCount = 10; //Max count for the for loop
  let name = prompt("What is your name?");
  let today = new Date(); //Create a new date object
  let hourNow = today.getHours(); //Get the current hour
  let greeting = "";
  if (name == null || name == "") {
    //If the user does not enter a name, prompt them to enter one
    alert("Please enter your name");
    if (maxCount > 0) {
      greetUser();
    }
  } else if (isNaN(name) == false) {
    //If the user enters a number, prompt them to enter a name
    alert("Please enter a valid name");
    if (maxCount > 0) {
      greetUser();
    }
  } else if ((hourNow > 18 && name != null) || name != "") {
    //If the current hour is greater than 18, greet the user with evening
    greeting = "Hello " + name + "," + " Good evening and Wecolme!";
  } else if ((hourNow > 12 && name != null) || name != "") {
    //If the current hour is greater than 12, greet the user with afternoon
    greeting = "Hello " + name + "," + " Good afternoon and Wecolme!";
  } else if ((hourNow > 0 && name != null) || name != "") {
    //If the current hour is greater than 0, greet the user with morning
    greeting = "Hello " + name + "," + " Good morning and Wecolme!";
  } else {
    //If the current hour is less than 0, greet the user with night
    greeting = "Welcome " + name + "," + "!";
  }
  document.write("<h3>" + greeting + "</h3>"); //Write the greeting to the page
}

//Prompt user for a guessing game about me. Store users input and gives feedback to them
function guessingGame() {
  //Variables
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
  let number = Math.floor(Math.random() * 10) + 1; //Generate a random number between 1 and 10

  //Prompt user for a guess
  alert("Welcome to the guessing game!");

  //Prompt the user for these questions
  let q1 = prompt("Is my name 'Diego'?");
  if (q1.toLowerCase() == "yes" || q1.toLowerCase() == "y") {
    //If the user answers yes, give them a positive feedback
    alert("Correct! Yes, My name is Diego");
  } else {
    alert("Incorrect! My name is Diego");
    totalTries++;
  }
  let q2 = prompt("Am I from New Jersey?");
  if (q2.toLowerCase() == "yes" || q2.toLowerCase() == "y") {
    //If the user answers yes, give them a positive feedback
    alert("Correct! Yes, I am from New Jersey");
  } else {
    alert("Incorrect! My I am from New Jersey");
    totalTries++;
  }
  let q3 = prompt("Am I 35 years old?");
  if (q3.toLowerCase() == "no" || q3.toLowerCase() == "n") {
    //If the user answers no, give them a positive feedback
    alert("Correct! I am  actually 30 years old");
  } else {
    alert("Incorrect! Cmon!, I am not 35 years old");
    totalTries++;
  }
  let q4 = prompt("Am I 5'10'' tall?");
  if (q4.toLowerCase() == "no" || q4.toLowerCase() == "n") {
    //If the user answers no, give them a positive feedback
    alert("Correct! I am actually 5'11''");
  } else {
    alert("Incorrect! I am not 5'10'' tall");
    totalTries++;
  }
  let q5 = prompt("Am I learning to code?");
  if (q5.toLowerCase() == "yes" || q5.toLowerCase() == "y") {
    //If the user answers yes, give them a positive feedback
    alert("Correct! I am learning to code");
  } else {
    alert("Incorrect! I am learning to code");
    totalTries++;
  }
  //Asks the user to guess a number between 1 and 10
  let q6 = prompt("Guess a number between 1 and 10");
  //While loop to keep asking the user to guess a number until they guess the correct number
  while (q6 != number && maxTry > 0) {
    //While loop to keep asking the user to guess a number until they guess the correct number
    maxTry--; //Decrement the maxTry by 1
    if (q6 == " " || q6 == null || q6 == undefined) {
      //If the user inputs nothing, alert them to enter a number
      alert("Please enter a number");
    } else if (isNaN(q6)) {
      //If the user inputs a non-number, alert them to enter a number
      alert("Please enter a number");
    } else {
      if (q6 == number) {
        //If the user guesses the correct number, alert them to guess the correct number
        alert("Correct! The number was " + number);
      } else if (maxTry == 0) {
        //If the user has no more tries, alert them to guess the correct number
        alert("You have no more tries left! The number was " + number);
        totalTries++; //Increment the totalTries by 1
        break;
      } else if (q6 > number) {
        //If the user guesses a number greater than the correct number, alert them to guess a number less than the correct number
        alert("Too high! Try again");
      } else if (q6 < number) {
        //If the user guesses a number less than the correct number, alert them to guess a number greater than the correct number
        alert("Too low! Try again");
      }
    }
    q6 = prompt("Guess a number between 1 and 10");
  }

  //For loop to keep asking the user to guess a food item until they guess the correct food item
  for (let i = 0; i < maxTries; i++) {
    let q7 = prompt("Guess a food item"); //Prompt the user for a food item
    if (q7 == null || q7 == "") {
      //If the user does not enter a food item, prompt them to enter one
      alert("Please enter a food item"); //Alert the user to enter a food item
    } else if (answers.includes(q7)) {
      alert("Correct! " + q7 + " is a food item in this list"); //Alert the user if they guess the correct food item
      break;
    } else {
      alert("Incorrect! " + q7 + " is not a food item in this list"); //Alert the user if they guess the incorrect food item
      totalTries++;
    }

    if (i == maxTries - 1) {
      alert("You have no more tries left! The food items are: " + answers); //Alert the user if they have no more tries left
    }
  }
  alert(
    "You got questions right: " + (totalQuestions - totalTries) + " out of 7" //Alert the user how many questions they got right
  );
}
