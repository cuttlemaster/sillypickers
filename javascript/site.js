document.addEventListener("DOMContentLoaded", () => {

  // STORING ALL THE RELEVANT BUTTONS FOR USE ========== //
  const randomChoiceBtn = document.querySelector('.random-choice');
  const showMeBtn = document.querySelector('.show-me');
  const resetBtn = document.querySelector('.reset');

  // STORING THE RELEVANT PAGE CONTAINERS FOR USE ========== //
  const inputContainer = document.querySelector('.input-container');
  const resultContainer = document.querySelector('.result-container');

  // DEALING WITH THE DIFFERENT BUTTONS GETTING CLICKED ==========/
  randomChoiceBtn.addEventListener('click', () => {
    inputContainer.classList.remove('hide');
    randomChoiceBtn.classList.add('hide');
  });

  showMeBtn.addEventListener('click', () => {
    inputContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
  });

  resetBtn.addEventListener('click', () => {
    resultContainer.classList.add('hide');
    randomChoiceBtn.classList.remove('hide');
  });

  console.log(questionAnswerObject.answers.question1.a);
});
