abstract class Creator {
  public abstract factoryMethod(): Drink;
  public create(): string {
    return `Я создатель напитков и я создал: ${this.factoryMethod().operation()}`;
  }
}

class CocaColaCreator extends Creator {
  public factoryMethod(): Drink {
    return new CocaCola();
  }
}
class FantaCreator extends Creator {
  public factoryMethod(): Drink {
    return new Fanta();
  }
}
interface Drink {
  operation(): string;
}

class CocaCola implements Drink {
  public operation(): string {
    return 'КОКА-КОЛУ';
  }
}

class Fanta implements Drink {
  public operation(): string {
    return 'ФАНТУ';
  }
}
//Проверка
function client(creator: Creator) {
  console.log(creator.create());
}

client(new CocaColaCreator());
client(new FantaCreator());




