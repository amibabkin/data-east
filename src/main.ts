import { AnimalsTypes, AnimalCreator } from './modules/animalCreator';
import type { Animal } from './modules/animal';
import { Zoo } from './modules/zoo';

const zoo = Zoo.getInstance();

const zooAddAnimalProxy = new Proxy(zoo.addAnimal, {
  apply: function (target, thisArg, argumentsList: Animal[]) {
    target.call(zoo, argumentsList[0]);

    setZooInfoInHTML();
  },
});

const zooDeleteAnimalProxy = new Proxy(zoo.removeAnimal, {
  apply: function (target, thisArg, argumentsList: number[]) {
    target.call(zoo, argumentsList[0]);

    setZooInfoInHTML();
  },
});

const buttons = document.querySelectorAll('.animal__button');
const selectedAnimals = document.querySelector('.selected-animals');

buttons.length
  ? buttons.forEach((button) => {
      button.addEventListener('click', selectAnimalHandler);
    })
  : alert('no buttons on page');

function selectAnimalHandler(event: Event) {
  const targetButton = event.target as HTMLButtonElement;

  const animalTypeInfo = targetButton.getAttribute('animal-info') as AnimalsTypes;
  //TODO: добавить валидацию на инпуты
  const name = document.querySelector(`[animal-info="${animalTypeInfo}-name"]`) as HTMLInputElement;
  const age = document.querySelector(`[animal-info="${animalTypeInfo}-age"]`) as HTMLInputElement;

  if (selectedAnimals && name.value && age.value) {
    const uniqueId = Date.now().toString();

    const selectedAnimal = AnimalCreator.create(name.value, +age.value, +uniqueId, animalTypeInfo);

    zooAddAnimalProxy(selectedAnimal);

    name.value = '';
    age.value = '';

    const zooDiv = document.createElement('div');

    zooDiv.classList.add('selected-animals__selected-animal', 'selected-animal');

    zooDiv.id = uniqueId;

    zooDiv.innerHTML = `
      <div class="selected-animal__classification">
        <strong>name:</strong>
        ${selectedAnimal.animalClassification}
      </div>
      <div class="selected-animal__name">
        <strong>name:</strong>
        ${selectedAnimal.name}
      </div>
      <div class="selected-animal__age">
        <strong>age:</strong>
        ${selectedAnimal.age}
      </div>
      <button class="selected-animal__button button">delete</button>
    `;

    selectedAnimals.append(zooDiv);

    const removeButton = zooDiv.lastElementChild as Element | null;

    if (removeButton) {
      removeButton.id = uniqueId;

      removeButton.addEventListener('click', removeSelectedAnimalHandler);
    }
  } else {
    alert('please input age and name');
  }
}

function setZooInfoInHTML() {
  const foodPriceHTML = document.getElementById('food-expenses') as HTMLSpanElement | null;
  const areaRentPriceHTML = document.getElementById('area-rent') as HTMLSpanElement | null;
  const areaSquareHTML = document.getElementById('area-square') as HTMLSpanElement | null;

  const foodPrice = zoo.allFoodPrice();
  const areaRentPrice = zoo.allRentPrice();
  const areaSquare = zoo.areaSquare();

  if (foodPriceHTML && areaRentPriceHTML && areaSquareHTML) {
    foodPriceHTML.textContent = `${foodPrice}`;
    areaRentPriceHTML.textContent = `${areaRentPrice}`;
    areaSquareHTML.textContent = `${areaSquare}`;
  } else {
    alert('no element on page');
  }
}

function removeSelectedAnimalHandler(event: Event) {
  const targetButton = event.target as HTMLButtonElement;

  const selectedAnimal = document.getElementById(`${targetButton.id}`);

  zooDeleteAnimalProxy(+targetButton.id);

  selectedAnimal && selectedAnimal.remove();

  targetButton.removeEventListener('click', removeSelectedAnimalHandler);
}
