document.addEventListener("DOMContentLoaded", () => {

  // STORING ALL THE RELEVANT BUTTONS FOR USE ========== //
  const randomChoiceBtn = document.querySelector('.random-choice');
  const pickMyOwnBtn = document.querySelector('.pick-my-own');
  const resetBtn = document.querySelector('.reset');

  // STORING ALL RELEVANT CONTAINERS FOR USE ========== //
  const questionContainer = document.querySelector('.question-container');
  const resultContainer = document.querySelector('.result-container');
  const answerContainer = document.querySelector('.answer-container');

  // "GIVE ME SOMETHING RANDOM!" BUTTON IS CLICKED BY THE USER
  randomChoiceBtn.addEventListener('click', () => {
    randomChoiceBtn.classList.add('hide');    // HIDE THE RANDOM CHOICE BUTTON
    pickMyOwnBtn.classList.add('hide');       // HIDE THE PICK MY OWN BUTTON

    // GRAB A RANDOM NUMBER AND USE IT TO SELECT A PICKER AND BUILD IT
    const randomNumber = 4;
    // const randomNumber = getRandomNumber();
    const chosenPicker = availablePickers[randomNumber];
    buildMyPicker(chosenPicker);
  });

  // GATHER THE ANSWERS PROVIDED BY THE USER AND PASS THEM INTO THE
  // FUNCTION THAT RETURNS THE RESULT TO THE PAGE FOR THEM TO SEE
  const showMeBtn = document.querySelector('.show-me');
  showMeBtn.addEventListener('click', () => {
    // GRAB THE NAME OF THE PICKER AND STORE IT TO PASS INTO FUNCTION
    const questionContainer = document.querySelector('.question-container');
    const picker = questionContainer.dataset.name;

    // GRAB THE QUESTION ANSWER VALUES AND STORE THEM IN AN ARRAY
    const questions = document.querySelectorAll('.question');
    const selections = [];

    questions.forEach((question) => {
      selections.push(question.value)
    });

    // PASS APPROPRIATE VALUES INTO RESULTS FUNCTION
    showMyResults(picker, selections);
  });

  // RESET THE PICKER INTERFACE WHEN "LET'S GO AGAIN" IS CLICKED
  resetBtn.addEventListener('click', () => {
    // REMOVES ALL CHILDREN OF THE PARENT ANSWERS SECTION WHILE THEY EXIST
    while(answerContainer.firstChild) {
      answerContainer.removeChild(answerContainer.firstChild);
    }

    // REMOVES ALL CHILDEN OF THE PARENT QUESTION CONTAINER WHILE THEY EXIST
    while(questionContainer.firstChild) {
      questionContainer.removeChild(questionContainer.firstChild);
    }

    resultContainer.classList.add('hide');
    randomChoiceBtn.classList.remove('hide');
    pickMyOwnBtn.classList.remove('hide');
  });
});
