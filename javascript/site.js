document.addEventListener("DOMContentLoaded", () => {

  // STORING ALL THE RELEVANT BUTTONS FOR USE ========== //
  const randomChoiceBtn = document.querySelector('.random-choice');
  const pickMyOwnBtn = document.querySelector('.pick-my-own');
  const showMeBtn = document.querySelector('.show-me');
  const resetBtn = document.querySelector('.reset');

  // STORING THE RELEVANT PAGE CONTAINERS FOR USE ========== //
  const inputContainer = document.querySelector('.input-container');
  const resultContainer = document.querySelector('.result-container');

  // DEALING WITH THE DIFFERENT BUTTONS GETTING CLICKED ==========/
  randomChoiceBtn.addEventListener('click', () => {
    inputContainer.classList.remove('hide');
    randomChoiceBtn.classList.add('hide');
    pickMyOwnBtn.classList.add('hide');
  });

  showMeBtn.addEventListener('click', () => {
    inputContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
  });

  resetBtn.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    randomChoiceBtn.classList.remove('hide');
    pickMyOwnBtn.classList.remove('hide');
  });

});
