class Singleton {
  private static instance: Singleton;
  public name: string;
  public age: string | number;
  private constructor() {
    //Даные сингелтона
    this.name = 'Artem';
    this.age = '24';
  }
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

//Проверка
const singl = Singleton;
const oneInstance = singl.getInstance();
const twoInstance = singl.getInstance();

console.log(oneInstance === twoInstance)//true

//Пример использования даных сингелтона
console.log(`My name is ${oneInstance.name}, and i am ${oneInstance.age} years old`);
