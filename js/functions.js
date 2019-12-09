const availablePickers = ["romanceNovelTitle","rvName","superstarDiva","wweSuperstar","pirateName","slothName","yaBookTitle","superVillain","adventureTitle","mermaidName","eightiesBand"];

const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const month = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const zodiac = ["aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn","aquarius","pisces"];
const shirts = ["red","orange","yellow","green","purple","pink","brown","black","white","gray","multi-colored","other"];

// GENERATES A RANDOM NUMBER SO YOU CAN PICK A GENERATOR FROM THE LIST
const getRandomNumber = () => {
  return Math.floor(Math.random() * Math.floor(availablePickers.length));
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

// MONTH DROPDOWN BUILDER =========================== //
// CREATES A DROPDOWN USING THE 12 MONTHS OF THE YEAR //
const monthBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  month.forEach((value) => {
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value.toUpperCase();
    container.appendChild(newOption);
  });
};

// ZODIAC DROPDOWN BUILDER ========================== //
// CREATES A DROPDOWN USING THE 12 SIGNS ============ //
const zodiacBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  zodiac.forEach((value) => {
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value.toUpperCase();
    container.appendChild(newOption);
  });
};

// SHIRTS DROPDOWN BUILDER ========================== //
// CREATES A DROPDOWN USING SHIRT COLORS ============ //
const shirtsBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  shirts.forEach((value) => {
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value.toUpperCase();
    container.appendChild(newOption);
  });
};

// NUMBER DROPDOWN BUILDER ==================== //
// CREATES A DROPDOWN USING THE NUMBERS 1 TO 31 //
const numberBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  for(let i = 1; i <= 31; i++) {
    const newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i;
    container.appendChild(newOption);
  }
};

// DIGIT DROPDOWN BUILDER ==================== //
// CREATES A DROPDOWN USING THE NUMBERS 0 TO 9 //
const digitBuilder = (parentElement) => {
  // SET CONTAINING ELEMENT TO WHATEVER IS PASSED INTO FUNCTION
  const container = document.querySelector(`.${parentElement}`);

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  container.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  for(let i = 0; i <= 9; i++) {
    const newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i;
    container.appendChild(newOption);
  }
};

// BUILD THE CHOSEN PICKER WITH ALL OF ITS BITS AND PIECES
// NEEDS TO BE AT THE BOTTOM OF THE LIST SO IT CAN REFERENCE ADDITIONAL BUILD FUNCTIONS ABOVE IN THE FILE
const buildMyPicker = (chosenPicker) => {
  fetch(`/js/data/${chosenPicker}.json`) // GO GET THE DESIRED JSON FILE
    .then(function (data) { // PASS FILE INTO PROMISE AS 'data'
      return data.json(); // CONVERT FROM INITIAL STRING INTO JSON
    })
    .then(function (json) { // PASS JSON INTO PROMISE AS 'json' (MANIPULATE FROM HERE)
      const inputContainer = document.querySelector('.input-container');
      const questionContainer = document.querySelector('.question-container');

      // REVEAL THE INPUT CONTAINER THAT WAS HIDDEN ON PAGE LOAD
      inputContainer.classList.remove('hide');

      // LOOP OVER THE QUESTIONS FOR THE SELECTED PICKER AND OUTPUT TO THE PAGE
      json.questions.forEach((question, i) => {
        // CREATE A NEW SECTION ELEMENT TO HOLD THE LABEL AND INPUT
        const newSection = document.createElement('section');

        // CREATE A NEW LABEL AND GIVE IT ATTRIBUTES AND CONTENT
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', `${question.identifier}${i}`);
        newLabel.textContent = question.label;

        // CREATE A NEW SELECT AND GIVE IT CLASSES AND A UNIQUE NAME
        const newSelect = document.createElement('select');
        newSelect.classList.add('custom');
        newSelect.classList.add('question');
        newSelect.classList.add(`${question.identifier}${i}`);
        newSelect.setAttribute('name', `${question.identifier}${i}`);

        // APPEND ELEMENTS IN THE CORRECT ORDER
        newSection.appendChild(newLabel);
        newSection.appendChild(newSelect);
        questionContainer.appendChild(newSection);

        // ADD THE PICKER NAME TO THE SECTION CONTAINER
        questionContainer.dataset.name = chosenPicker;

        // GENERATE THE OPTION ELEMENTS BY REFERENCING A BUILDER FUNCTION ABOVE
        // NAME OF BUILDER FUNCTION COMES FROM THE DATA FILE FOR THE SELECTED PICKER
        const dropdown = question.dropdown;
        eval(dropdown)(`${question.identifier}${i}`);
      });
  });
};


// GATHER AND SHOW RESULTS AFTER SELECTIONS ARE MADE BY THE USER ========== //
const showMyResults = (picker, selections) => {
  // STORE RELEVANT CONTAINERS FOR MANIPULATION AS NEEDED
  const inputContainer = document.querySelector('.input-container');
  const resultContainer = document.querySelector('.result-container');
  const answerContainer = document.querySelector('.answer-container');

  // SHOW AND HIDE THE RELEVANT CONTAINERS
  inputContainer.classList.add('hide');
  resultContainer.classList.remove('hide');

  fetch(`/js/data/${picker}.json`) // GO GET THE DESIRED JSON FILE
    .then(function (data) { // PASS FILE INTO PROMISE AS 'data'
      return data.json(); // CONVERT FROM INITIAL STRING INTO JSON
    })
    .then(function (json) { // PASS JSON INTO PROMISE AS 'json' (MANIPULATE FROM HERE)
      const numberOfQuestions = json.questions.length;

      const finalAnswer = document.createElement('h2');
      finalAnswer.classList.add('final-answer');

      const answerIntro = document.createElement('p');
      answerIntro.classList.add('underline-intro');
      answerIntro.textContent = json.introduction;

      // PROVIDE AN EMPTY ARRAY FOR THE ANSWER VALUES AND PUSH THEM INTO IT VIA LOOP
      let answersArray = [];
      for(let i = 0; i < numberOfQuestions; i++) {
        answersArray.push(json.questions[i].answers[selections[i]]);
      }

      // DETERMINE THE FULL STRING OF THE FINAL ANSWER DEPENDENT ON THE PICKER USED
      let answerString = "";

      switch(picker) {
        case "rvName":
        case "superstarDiva":
        case "wweSuperstar":
        case "mermaidName":
          answerString = `${answersArray[0]} ${answersArray[1]}`;
          finalAnswer.textContent = answerString;
        break;

        case "pirateName":
          answerString = `${answersArray[0]} ${answersArray[1]} ${answersArray[2]}`;
          finalAnswer.textContent = answerString;
        break;

        case "romanceNovelTitle":
          answerString = `The ${answersArray[0]} ${answersArray[1]}'s ${answersArray[2]} ${answersArray[3]}`;
          finalAnswer.textContent = answerString;
        break;

        case "slothName":
          answerString = `${answersArray[0]} the ${answersArray[1]} ${answersArray[2]}`;
          finalAnswer.textContent = answerString;
        break;

        case "yaBookTitle":
          answerString = `${answersArray[0]}, ${answersArray[1]}, and Other ${answersArray[2]}`;
          finalAnswer.textContent = answerString;
        break;

        case "superVillain":
          answerString = `${answersArray[0]} ${answersArray[1]} the ${answersArray[2]} of ${answersArray[3]}`;
          finalAnswer.textContent = answerString;
        break;

        case "adventureTitle":
          answerString = `The ${answersArray[0]} ${answersArray[1]} in the ${answersArray[2]}`;
          finalAnswer.textContent = answerString;
        break;

        case "eightiesBand":
          answerString = `${answersArray[0]} & the ${answersArray[1]} ${answersArray[2]}`;
          finalAnswer.textContent = answerString;
        break;

        case "default":
        break;
      }

      // APPLY THE ANSWER TO THE PAGE
      answerContainer.appendChild(answerIntro);
      answerContainer.appendChild(finalAnswer);
    });
};

