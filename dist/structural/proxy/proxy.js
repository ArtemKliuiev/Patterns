"use strict";
class InputPC {
    enter() {
        console.log("Добро пожаловать");
    }
    shutdown() {
        console.log("Завершение работы");
    }
}
class passwordCheck {
    constructor(pc) {
        this.pc = pc;
    }
    enter(password) {
        if (this.examination(password)) {
            this.pc.enter();
        }
        else {
            console.log('Пароль неверный, доступ запрещен');
        }
    }
    examination(password) {
        return password === '2023';
    }
    shutdown() {
        this.pc.shutdown();
    }
}
//Проверка
const PC = new passwordCheck(new InputPC());
PC.enter('2023'); //Добро пожаловать
PC.enter('0000'); //Пароль неверный, доступ запрещен
PC.shutdown(); //Завершение работы
