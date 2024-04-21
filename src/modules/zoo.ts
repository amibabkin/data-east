import { Animal, NutritionForm } from './animal';

export enum ZooMethodsType {
  AddAnimal = 'addAnimal',
  DeleteAnimal = 'deleteAnimal',
}

export class Zoo {
  private static instance: Zoo;
  private internalAnimals: Animal[] = [];

  private constructor() {}

  public static getInstance(): Zoo {
    if (!this.instance) {
      Zoo.instance = new Zoo();
    }

    return Zoo.instance;
  }

  get animals() {
    return this.internalAnimals;
  }

  public addAnimal(animal: Animal) {
    this.internalAnimals.push(animal);
  }

  public removeAnimal(id: number) {
    this.internalAnimals = this.internalAnimals.filter((animal) => animal.id != id);
  }

  public allFoodPrice() {
    return this.internalAnimals.reduce((acc, curr) => {
      if (curr.food.nutritionForm === NutritionForm.Carnivorous) {
        return acc + curr.food.calcMeatPricePerMonth();
      } else if (curr.food.nutritionForm === NutritionForm.Herbivorous) {
        return acc + curr.food.calcPlantPricePerMonth();
      }
      return acc;
      //TODO: добавить ветку для NutritionForm.mixed
    }, 0);
  }

  public allRentPrice() {
    return this.internalAnimals.reduce((acc, curr) => acc + curr.area.rentAreaPrice(), 0);
  }

  public areaSquare() {
    return this.internalAnimals.reduce((acc, curr) => acc + curr.area.areaSize, 0);
  }
}
