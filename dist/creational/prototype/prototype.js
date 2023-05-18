"use strict";
class Prototype {
    constructor(name = 'Artem', age = 24) {
        this.name = name;
        this.age = age;
    }
    clone() {
        return new Prototype(this.name, this.age);
    }
}
//Проверка
const newPrototype = new Prototype();
const onePrototype = newPrototype.clone();
console.log(`My name is ${onePrototype.name}, i am ${onePrototype.age} year old`);
//Добавление даных
const newObject = { city: "Lubny" };
const twoPrototype = Object.assign(Object.assign({}, onePrototype), newObject);
console.log(`My name is ${twoPrototype.name}, i am ${twoPrototype.age} year old, and i live in ${twoPrototype.city}`);
