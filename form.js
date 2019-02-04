document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const animalDBListItem = createAnimalListItem(event.target);
  // const animalList = document.querySelector('#animal-db');
  // animalList.appendChild(animalDBListItem);

  event.target.reset();
};

const createAnimalListItem = function (form) {

  const table = document.querySelector("#myTable");
  var row = table.insertRow(-1); // insert new row at bottom of table
  var name_cell = row.insertCell(0);
  var species_cell = row.insertCell(1);
  var gender_cell = row.insertCell(2);
  var continent_cell = row.insertCell(3);

  //const animalDBListItem = document.createElement('li');
  const animalDBListItem = row;
  //animalDBListItem.classList.add('animal-list-item');

  //const name = document.createElement('h2');
  const name = name_cell;
  name.textContent = form.name.value;
  animalDBListItem.appendChild(name);

  //const species = document.createElement('h3');
  const species = species_cell;
  species.textContent = form.species.value;
  animalDBListItem.appendChild(species);

  //const gender = document.createElement('p');
  const gender = gender_cell;
  gender.textContent = form.gender.value;
  animalDBListItem.appendChild(gender);

  //const continent = document.createElement('p');
  const continent = continent_cell;
  continent.textContent = form.continent.value;
  animalDBListItem.appendChild(continent);

  return animalDBListItem;
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#myTable');
  // animalList.innerHTML = '';
  for(var i = 1;i<animalList.rows.length;){
            animalList.deleteRow(i);
        };
}
