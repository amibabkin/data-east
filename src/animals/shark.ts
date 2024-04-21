import {
  Animal,
  AnimalClassification,
  AreaType,
  LivingConditions,
  NeighborsType,
  NutritionForm,
  FoodType,
} from '../modules/animal';

export class Shark extends Animal {
  constructor(
    public name: string,
    public age: number,
    public id: number,
  ) {
    super(
      AnimalClassification.Fish,
      name,
      age,
      id,
      AreaType.Aquarium,
      8,
      LivingConditions.Collective,
      NeighborsType.DifferentTypes,
      5,
      NutritionForm.Carnivorous,
      FoodType.Meat,
      1,
    );
  }

  public action() {
    console.log('Shark swims');
  }

  public voice() {
    console.log('Shark talks with body movements');
  }
}
