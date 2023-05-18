"use strict";
//Абстракция
class Drinks {
    constructor(type) {
        this.type = type;
    }
    operation() {
        return `Тут должено быть название напитка и типа напитка (класическа или диетическая кола)`;
    }
}
class DrinkPepsiCo extends Drinks {
    operation() {
        return `${this.type.operationType()} - Пепси-кола`;
    }
}
class DrinkCocaCola extends Drinks {
    operation() {
        return `${this.type.operationType()} - Пепси-кола`;
    }
}
class DietCola {
    operationType() {
        return 'Диетическая';
    }
}
class ClassicCola {
    operationType() {
        return 'Классическая';
    }
}
//Клиентский код
function clientCode(cola) {
    console.log(cola.operation());
}
//Проверка
clientCode(new DrinkCocaCola(new DietCola()));
clientCode(new DrinkPepsiCo(new ClassicCola()));
