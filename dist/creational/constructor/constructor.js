"use strict";
class Constructor {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    ;
    getPersonInfo() {
        return `My name is ${this.name}, i am ${this.age} year old and i live in ${this.location}`;
    }
    ;
}
;
//Проверка
const checkConstructor = new Constructor('Artem', 24, 'Lubny');
console.log(checkConstructor.getPersonInfo());
