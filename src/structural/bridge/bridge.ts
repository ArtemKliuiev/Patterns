//Абстракция
class Drinks {
  type: TypeDrink
  constructor(type: TypeDrink) {
    this.type = type;
  }
  operation() {
    return `Тут должено быть название напитка и типа напитка (класическа или диетическая кола)`;
  }
}
class DrinkPepsiCo extends Drinks {
  operation() {
    return `${this.type.operationType()} - Пепси-кола`
  }
}
class DrinkCocaCola extends Drinks {
  operation() {
    return `${this.type.operationType()} - Пепси-кола`
  }
}
//Реализация
interface TypeDrink {
  operationType(): string
}
class DietCola implements TypeDrink {
  operationType() {
    return 'Диетическая';
  }
}
class ClassicCola implements TypeDrink {
  operationType() {
    return 'Классическая';
  }
}
//Клиентский код
function clientCode(cola: any) {
  console.log(cola.operation());
}
//Проверка
clientCode(new DrinkCocaCola(new DietCola()));
clientCode(new DrinkPepsiCo(new ClassicCola()));







