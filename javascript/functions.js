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

  // CREATE NEW SELECT ELEMENT AND PROVIDE CLASS/NAME VALUES
  const newSelect = document.createElement('select');
  newSelect.classList.add('alphabet');
  newSelect.setAttribute('name', 'alphabet');

  // ADD BLANK OPTION ELEMENT TO TOP OF DROPDOWN
  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  newSelect.appendChild(blankOption);

  // LOOP THROUGH ALPHABET ARRAY AND CREATE OPTION ELEMENTS
  // ADD THE OPTION ELEMENT TO THE SELECT DROPDOWN
  alphabet.forEach((value) => {
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = value.toUpperCase();
    newSelect.appendChild(newOption);
  });
  // ADD THE DROPDOWN TO THE PAGE
  container.appendChild(newSelect);
};
