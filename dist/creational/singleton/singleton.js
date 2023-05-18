"use strict";
class Singleton {
    constructor() {
        //Даные сингелтона
        this.name = 'Artem';
        this.age = '24';
    }
    static getInstance() {
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
console.log(oneInstance === twoInstance); //true
//Пример использования даных сингелтона
console.log(`My name is ${oneInstance.name}, and i am ${oneInstance.age} years old`);
