"use strict";

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

function guessingGame() {
  alert("Welcome to the guessing game!");
  alert("You can only guess with a yes/y or no/n answer");

  let q1 = prompt("Is my name 'Diego'?");
  if (q1.toLowerCase() == "yes" || q1.toLowerCase() == "y") {
    alert("Correct! Yes, My name is Diego");
  } else {
    alert("Incorrect! My name is Diego");
  }
  let q2 = prompt("Am I from New Jersey?");
  if (q2.toLowerCase() == "yes" || q2.toLowerCase() == "y") {
    alert("Correct! Yes, I am from New Jersey");
  } else {
    alert("Incorrect! My I am from New Jersey");
  }
  let q3 = prompt("Am I 35 years old?");
  if (q3.toLowerCase() == "no" || q3.toLowerCase() == "n") {
    alert("Correct! I am  actually 30 years old");
  } else {
    alert("Incorrect! Cmon!, I am not 35 years old");
  }
  let q4 = prompt("Am I 5'10'' tall?");
  if (q4.toLowerCase() == "no" || q4.toLowerCase() == "n") {
    alert("Correct! I am actually 5'11''");
  } else {
    alert("Incorrect! I am not 5'10'' tall");
  }
  let q5 = prompt("Am I learning to code?");
  if (q5.toLowerCase() == "yes" || q5.toLowerCase() == "y") {
    alert("Correct! I am learning to code");
  } else {
    alert("Incorrect! I am learning to code");
  }
  alert(
    "You got " +
      (5 - (q1.toLowerCase() == "yes" || q1.toLowerCase() == "y")) +
      " out of 5 correct!"
  );
}
