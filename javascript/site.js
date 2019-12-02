document.addEventListener("DOMContentLoaded", () => {

  // STORING ALL THE RELEVANT BUTTONS FOR USE ========== //
  const randomChoiceBtn = document.querySelector('.random-choice');
  const pickMyOwnBtn = document.querySelector('.pick-my-own');

  // "GIVE ME SOMETHING RANDOM!" BUTTON IS CLICKED BY THE USER
  randomChoiceBtn.addEventListener('click', () => {
    randomChoiceBtn.classList.add('hide');    // HIDE THE RANDOM CHOICE BUTTON
    pickMyOwnBtn.classList.add('hide');       // HIDE THE PICK MY OWN BUTTON

    // GRAB A RANDOM NUMBER AND USE IT TO SELECT A PICKER AND BUILD IT
    const randomNumber = 0;
    const chosenPicker = availablePickers[randomNumber];
    buildMyPicker(chosenPicker);
  });

  // GATHER THE ANSWERS PROVIDED BY THE USER AND PASS THEM INTO THE
  // FUNCTION THAT RETURNS THE RESULT TO THE PAGE FOR THEM TO SEE
  const showMeBtn = document.querySelector('.show-me');
  showMeBtn.addEventListener('click', () => {
    // GRAB THE NAME OF THE PICKER AND STORE IT TO PASS INTO FUNCTION
    const sectionContainer = document.querySelector('.section-container');
    const picker = sectionContainer.dataset.name;
    console.log(`the picker name is: ${picker}`);

    // GRAB THE QUESTION ANSWER VALUES AND STORE THEM IN AN ARRAY
    const questions = document.querySelectorAll('.question');
    const answers = [];

    questions.forEach((question) => {
      answers.push(question.value)
    });

    console.log(answers);

    // PASS APPROPRIATE VALUES INTO RESULTS FUNCTION
    showMyResults(picker, answers);
  });
});
