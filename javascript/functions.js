const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];



// ALPHABET DROPDOWN BUILDER ============================= //
// CREATES A DROPDOWN USING THE 26 LETTERS OF THE ALPHABET //
const alphabetBuilder = (parentElement) => {
  const container = document.querySelector(`.${parentElement}`);

  const newSelect = document.createElement('select');
  newSelect.classList.add('alphabet');
  newSelect.setAttribute('name', 'alphabet');

  const blankOption = document.createElement('option');
  blankOption.textContent = '--';
  newSelect.appendChild(blankOption);

  alphabet.forEach((value) => {
    const newOption = document.createElement('option');

    newOption.value = value;
    newOption.textContent = value.toUpperCase();

    newSelect.appendChild(newOption);
  });

  container.appendChild(newSelect);
};
