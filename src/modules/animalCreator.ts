import Animals from '../animals';

export type AnimalsTypes = 'tiger' | 'shark' | 'parrot';

export class AnimalCreator {
  private static animalList = {
    tiger: Animals.Tiger,
    shark: Animals.Shark,
    parrot: Animals.Parrot,
  };

  public static create(name: string, age: number, id: number, role: AnimalsTypes) {
    //FIXME: (с html атрибута может прийти значение, не входящее в AnimalsTypes)
    const Fabric = AnimalCreator.animalList[role];

    const instance = new Fabric(name, age, id);

    return instance;
  }
}
