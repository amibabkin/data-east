// mammal -млекопит, reptile - пресмык, amphibian - земновод
export enum AnimalClassification {
  Mammal = 'mammal',
  Bird = 'bird',
  Reptile = 'reptile',
  Fish = 'fish',
  Amphibian = 'amphibian',
}

export class Animal {
  area: Area;
  living: Living;
  food: Food;

  constructor(
    public animalClassification: AnimalClassification,
    public name: string,
    public age: number,
    public id: number,
    private internalAreaType: AreaType,
    private internalAreaSize: number,
    private internalLivingConditions: LivingConditions,
    private internalNeighborsType: NeighborsType,
    private internalNeighborsNumber: number,
    private internalNutritionForm: NutritionForm,
    private internalFoodType: FoodType,
    private internalDailyFeedingSchedule: number,
  ) {
    this.area = new Area(internalAreaType, internalAreaSize);
    this.living = new Living(internalLivingConditions, internalNeighborsType, internalNeighborsNumber);
    this.food = new Food(internalNutritionForm, internalFoodType, internalDailyFeedingSchedule);
  }

  public action(): void {}
  public voice(): void {}
}

export enum AreaType {
  Aviary = 'aviary',
  AviaryWithWater = 'aviary-with-water',
  Terrarium = 'terrarium',
  Cage = 'cage',
  BirdCage = 'bird-cage',
  Aquarium = 'aquarium',
}
// вольер - aviary, вольер с водой, террариум, клетка, клетка для птиц, аквариум.
// условия проживания
export class Area {
  private rentPricePerMonth = 1000;
  //TODO: сделать цену за кубометр(для аквариума) - 120 за кубический метр

  constructor(
    private internalAreaType: AreaType,
    private internalAreaSize: number,
  ) {}

  set areaSize(value: number) {
    this.internalAreaSize = value;
  }
  get areaSize() {
    return this.internalAreaSize;
  }

  set areaType(value: AreaType) {
    this.internalAreaType = value;
  }
  get areaType() {
    return this.internalAreaType;
  }

  public rentAreaPrice() {
    return this.rentPricePerMonth * this.internalAreaSize;
  }
}

export enum LivingConditions {
  Single = 'single',
  Doubles = 'doubles',
  Collective = 'collective',
}
export enum NeighborsType {
  OneType = 'one-type',
  DifferentTypes = 'different-types',
}

export class Living {
  constructor(
    private internalLivingConditions: LivingConditions,
    private internalNeighborsType: NeighborsType,
    private internalNeighborsNumber: number,
  ) {}

  set livingConditions(value: LivingConditions) {
    this.internalLivingConditions = value;
  }
  get livingConditions() {
    return this.internalLivingConditions;
  }

  set neighborsType(value: NeighborsType) {
    this.internalNeighborsType = value;
  }
  get neighborsType() {
    return this.internalNeighborsType;
  }

  set neighborsNumber(value: number) {
    this.internalNeighborsNumber = value;
  }
  get neighborsNumber() {
    return this.internalNeighborsNumber;
  }
}

export enum NutritionForm {
  Herbivorous = 'herbivorous',
  Carnivorous = 'carnivorous',
  Mixed = 'mixed',
}
export enum FoodType {
  Meat = 'meat',
  Plant = 'plant',
  Feed = 'feed',
}

export class Food {
  private meatPrice = 50;
  private plantPrice = 30;
  private feedPrice = 25;
  //TODO: добавить типы кормов, определять кто по типу и какой корм какой стоимости нужен
  //TODO: добавить логику для питания типа mixed
  //TODO: price за кг? добавить логику - сколько нужно животному г\кг в день\неделю
  constructor(
    private internalNutritionForm: NutritionForm,
    private internalFoodType: FoodType,
    private internalDailyFeedingSchedule: number,
  ) {}
  //TODO: добавить проверки? количество кормлений животного в день не больше 10
  //TODO: добавить проверки если тип питания травоядный - мясом не кормить
  //TODO: get set - добавить логику; где нет логики сделать свойства public?

  set nutritionForm(value: NutritionForm) {
    this.internalNutritionForm = value;
  }
  get nutritionForm() {
    return this.internalNutritionForm;
  }

  set foodType(value: FoodType) {
    this.internalFoodType = value;
  }
  get foodType() {
    return this.internalFoodType;
  }

  set dailyFeedingSchedule(value: number) {
    this.internalDailyFeedingSchedule = value;
  }
  get dailyFeedingSchedule() {
    return this.internalDailyFeedingSchedule;
  }

  public calcMeatPricePerMonth() {
    return this.meatPrice * this.internalDailyFeedingSchedule * 30;
  }
  public calcPlantPricePerMonth() {
    return this.plantPrice * this.internalDailyFeedingSchedule * 30;
  }
  public calcFeedPricePerMonth() {
    return this.feedPrice * this.internalDailyFeedingSchedule * 30;
  }
}
