document.addEventListener("DOMContentLoaded", () => {

  // console.log(romanceNovelTitle);

  // STORING ALL THE RELEVANT BUTTONS FOR USE ========== //
  const randomChoiceBtn = document.querySelector('.random-choice');
  const pickMyOwnBtn = document.querySelector('.pick-my-own');
  const resetBtn = document.querySelector('.reset');

  // STORING THE RELEVANT PAGE CONTAINERS FOR USE ========== //
  // const inputContainer = document.querySelector('.input-container');
  const resultContainer = document.querySelector('.result-container');

  // SELECT A RANDOM GENERATOR FROM THE AVAILABLE LIST WHEN THE
  // "GIVE ME SOMETHING RANDOM!" BUTTON IS CLICKED BY THE USER
  randomChoiceBtn.addEventListener('click', () => {
    randomChoiceBtn.classList.add('hide');    // HIDE THE RANDOM CHOICE BUTTON
    pickMyOwnBtn.classList.add('hide');       // HIDE THE PICK MY OWN BUTTON

    // const randomNumber = getRandomNumber();
    const randomNumber = 0;
    const chosenPicker = availablePickers[randomNumber];
    //console.log(chosenPicker);
    buildMyPicker(chosenPicker);
  });

  pickMyOwnBtn.addEventListener('click', () => {
    // inputContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
  });

  resetBtn.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    randomChoiceBtn.classList.remove('hide');
  });

});
