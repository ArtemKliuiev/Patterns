"use strict";
class Creator {
    create() {
        return `Я создатель напитков и я создал: ${this.factoryMethod().operation()}`;
    }
}
class CocaColaCreator extends Creator {
    factoryMethod() {
        return new CocaCola();
    }
}
class FantaCreator extends Creator {
    factoryMethod() {
        return new Fanta();
    }
}
class CocaCola {
    operation() {
        return 'КОКА-КОЛУ';
    }
}
class Fanta {
    operation() {
        return 'ФАНТУ';
    }
}
//Проверка
function client(creator) {
    console.log(creator.create());
}
client(new CocaColaCreator());
client(new FantaCreator());
