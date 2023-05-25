"use strict";
// Класс, представляющий контекст
class Order {
    setState(state) {
        console.log(state.stateOrder());
        if (state === stateA) {
            console.log('Ничего не делаем\n');
        }
        else if (state === stateB) {
            console.log('Идем на почту отправить заказ\n');
        }
        else if (state === stateC) {
            console.log('Сообщаем клиенту о прибытии заказа\n');
        }
    }
}
class State {
    constructor() {
        this.state = 'Тут должно быть состояние заказа';
    }
    stateOrder() {
        return this.state;
    }
}
// Конкретные классы состояний
class ConcreteStateA extends State {
    constructor() {
        super();
        this.state = 'Состояние: ожидание оплаты';
    }
}
class ConcreteStateB extends State {
    constructor() {
        super();
        this.state = 'Состояние: оплата подтверждена';
    }
}
class ConcreteStateC extends State {
    constructor() {
        super();
        this.state = 'Состояние: заказ прибыл в место выдачи';
    }
}
// Использование
const context = new Order();
const stateA = new ConcreteStateA();
const stateB = new ConcreteStateB();
const stateC = new ConcreteStateC();
// Устанавливаем состояние
context.setState(stateA);
context.setState(stateB);
context.setState(stateC);
