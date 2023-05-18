class Soda {
  newDrink() { }
}

class CocaColaNew extends Soda {
  newDrink(): string {
    return 'КОКА-КОЛУ';
  }
}

class FantaNew extends Soda {
  newDrink(): string {
    return 'ФАНТУ';
  }
}

class DrincFactory {
  createDrink(drink: any) {
    if (drink === 'cola') {
      return `Фабрика напитков создала новую: ${new CocaColaNew().newDrink()}`
    } else if (drink === 'fanta') {
      return `Фабрика напитков создала новую: ${new FantaNew().newDrink()}`
    }
  }
}
//Проверка
const cola = new DrincFactory().createDrink('cola');
const fanta = new DrincFactory().createDrink('fanta');
console.log(cola)
console.log(fanta)