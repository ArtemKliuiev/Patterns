"use strict";
;
//Фабрика японской кухни
class JapanFactory {
    createDishOne() {
        return new Sushi;
    }
    createDishTwo() {
        return new Rolls;
    }
}
;
//Фабрика итальянской кухни
class ItalianFactory {
    createDishOne() {
        return new Pizza;
    }
    createDishTwo() {
        return new Spaghetti;
    }
}
;
//Варианты меню (абстрактные варианты)
class JapanMenu {
    constructor() {
        this.food = '_';
    }
    japaneseFood() {
        return this.food;
    }
}
;
class ItalianMenu {
    constructor() {
        this.food = '_';
    }
    italianFood() {
        return this.food;
    }
}
;
//Блюда 
class Sushi extends JapanMenu {
    constructor() {
        super();
        this.food = 'sushi';
    }
}
;
class Rolls extends JapanMenu {
    constructor() {
        super();
        this.food = 'rolls';
    }
}
;
class Pizza extends ItalianMenu {
    constructor() {
        super();
        this.food = 'pizza';
    }
}
;
class Spaghetti extends ItalianMenu {
    constructor() {
        super();
        this.food = 'spaghetti';
    }
}
;
//Проверка, cоздание фабрик и объектов
const japanFactory = new JapanFactory();
const italianFactory = new ItalianFactory();
const sushi = japanFactory.createDishOne().japaneseFood();
const rolls = japanFactory.createDishTwo().japaneseFood();
const pizza = italianFactory.createDishOne().italianFood();
const spaghetti = italianFactory.createDishTwo().italianFood();
console.log(`Japanese food ${sushi} and ${rolls}`);
console.log(`Italian food ${pizza} and ${spaghetti}`);
// const error = italianFactory.createDishOne().japaneseFood();
