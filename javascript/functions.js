const availablePickers = ["romanceNovelTitle"];

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];

// GENERATES A RANDOM NUMBER SO YOU CAN PICK A GENERATOR FROM THE LIST
const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(10));
};

// ALPHABET DROPDOWN BUILDER ============================= //
// CREATES A DROPDOWN USING THE 26 LETTERS OF THE ALPHABET //
const alphabetBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  alphabet.forEach((value) => {
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value.toUpperCase();
    container.appendChild(newOption);
  });
};

// BUILD THE CHOSEN PICKER WITH ALL OF ITS BITS AND PIECES
// NEEDS TO BE AT THE BOTTOM OF THE LIST SO IT CAN REFERENCE ADDITIONAL BUILD FUNCTIONS ABOVE IN THE FILE
const buildMyPicker = (chosenPicker) => {

  fetch(`/javascript/data/${chosenPicker}.json`) // GO GET THE DESIRED JSON FILE
    .then(function (data) { // PASS FILE INTO PROMISE AS 'data'
      return data.json(); // CONVERT FROM INITIAL STRING INTO JSON
    })
    .then(function (json) { // PASS JSON INTO PROMISE AS 'json'
      const pageContainer = document.querySelector('.container');

      // CREATE INPUT CONTAINER AND ADD THE INTRODUCTION PARAGRAPH ABOVE INPUTS
      const inputContainer = document.createElement('div');
      inputContainer.classList.add('input-container');
      const introParagraph = document.createElement('p');
      introParagraph.textContent = 'First, let\'s gather a few bits of information...';
      inputContainer.appendChild(introParagraph);

      // ADD THE CREATED INPUT CONTAINER TO THE PAGE
      pageContainer.appendChild(inputContainer);

      json.questions.forEach((question) => {
        // CREATE A NEW SECTION ELEMENT TO HOLD THE LABEL AND INPUT
        const newSection = document.createElement('section');

        // CREATE A NEW LABEL AND GIVE IT ATTRIBUTES AND CONTENT
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', `${question.identifier}${question.increment}`);
        newLabel.textContent = question.label;

        // CREATE A NEW SELECT AND GIVE IT CLASSES AND A UNIQUE NAME
        const newSelect = document.createElement('select');
        newSelect.classList.add('custom');
        newSelect.classList.add(`${question.identifier}${question.increment}`);
        newSelect.setAttribute('name', `${question.identifier}${question.increment}`);

        // APPEND ELEMENTS IN THE CORRECT ORDER
        newSection.appendChild(newLabel);
        newSection.appendChild(newSelect);
        inputContainer.appendChild(newSection);

        // GENERATE THE OPTION ELEMENTS BY REFERENCING A BUILDER FUNCTION ABOVE
        // NAME OF BUILDER FUNCTION COMES FROM THE DATA FILE FOR THE SELECTED PICKER
        const dropdown = question.dropdown;
        eval(dropdown)(`${question.identifier}${question.increment}`);
      });
  }).finally(function () { // END OF THE 'PROMISE CHAIN' / LAST THING THAT HAPPENS
    // STORE THE CONTAINER HOLDING THE QUESTION (BECAUSE IT'S OUT OF SCOPE ABOVE)
    const questionContainer = document.querySelector('.input-container');

    // CREATE BUTTON TO FIND THE ANSWER
    const showMeBtn = document.createElement('button');
    showMeBtn.classList.add('show-me');
    showMeBtn.textContent = "Show Me!";

    // ADD BUTTON TO THE CONTAINER BELOW THE QUESTIONS
    questionContainer.appendChild(showMeBtn);
  });
};


// GATHER AND SHOW RESULTS AFTER SELECTIONS ARE MADE BY THE USER ========== //
const showMyResults = () => {};

