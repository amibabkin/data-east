import {
  Animal,
  AnimalClassification,
  AreaType,
  LivingConditions,
  NeighborsType,
  NutritionForm,
  FoodType,
} from '../modules/animal';

export class Parrot extends Animal {
  constructor(
    public name: string,
    public age: number,
    public id: number,
  ) {
    super(
      AnimalClassification.Bird,
      name,
      age,
      id,
      AreaType.BirdCage,
      1,
      LivingConditions.Collective,
      NeighborsType.OneType,
      5,
      NutritionForm.Herbivorous,
      FoodType.Feed,
      1,
    );
  }

  public action() {
    console.log('Parrot fly');
  }

  public voice() {
    console.log('Parrot swears');
  }
}
