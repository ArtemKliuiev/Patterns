"use strict";
class BiceBuilder {
    constructor() {
        this.bike = new Bice();
    }
    addElectricWheel(electricWheel) {
        this.bike.electricWheel = electricWheel;
        return this;
    }
    addBasket(basket) {
        this.bike.basket = basket;
        return this;
    }
    addNitroBoost(nitroBoost) {
        this.bike.nitroBoost = nitroBoost;
        return this;
    }
    addFlightMode(flightMode) {
        this.bike.flightMode = flightMode;
        return this;
    }
    build() {
        return this.bike;
    }
}
;
class Bice {
    constructor() {
        this.electricWheel = false;
        this.basket = false;
        this.nitroBoost = false;
    }
}
;
class BuilderDirector {
    defaultBice() {
        return new BiceBuilder();
    }
    greatBiceMod() {
        return new BiceBuilder().addBasket(true).addElectricWheel(true).build();
    }
    superBiceMod() {
        return new BiceBuilder().addNitroBoost(true).addFlightMode(true).build();
    }
}
//Проверка
const director = new BuilderDirector();
//Сборка велосипеда по умолчанию
console.log(director.defaultBice());
//Второй вариант сборки велосипеда
console.log(director.greatBiceMod());
//Третий вариант сборки велосипеда
console.log(director.superBiceMod());
