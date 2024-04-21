import {
  Animal,
  AnimalClassification,
  AreaType,
  LivingConditions,
  NeighborsType,
  NutritionForm,
  FoodType,
} from '../modules/animal';

export class Tiger extends Animal {
  constructor(
    public name: string,
    public age: number,
    public id: number,
  ) {
    super(
      AnimalClassification.Mammal,
      name,
      age,
      id,
      AreaType.Aviary,
      10,
      LivingConditions.Collective,
      NeighborsType.OneType,
      5,
      NutritionForm.Carnivorous,
      FoodType.Meat,
      1,
    );
  }
  public action() {
    console.log('Tiger running');
  }

  public voice() {
    console.log('Tiger roars');
  }
}
