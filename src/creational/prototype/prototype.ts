
class Prototype {
  public name: string;
  public age: number;
  constructor(name: string = 'Artem', age: number = 24) {
    this.name = name;
    this.age = age;
  }
  public clone() {
    return new Prototype(this.name, this.age);
  }
}


//Проверка
const newPrototype = new Prototype();
const onePrototype = newPrototype.clone();
console.log(`My name is ${onePrototype.name}, i am ${onePrototype.age} year old`);

//Добавление даных
const newObject = { city: "Lubny" }
const twoPrototype = { ...onePrototype, ...newObject };
console.log(`My name is ${twoPrototype.name}, i am ${twoPrototype.age} year old, and i live in ${twoPrototype.city}`);



