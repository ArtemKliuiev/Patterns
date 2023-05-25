"use strict";
class Phone {
    constructor(sharedState) {
        this.sharedState = sharedState;
    }
    operation(uniqueState) {
        console.log(`Отображения общего состояния ${JSON.stringify(this.sharedState)}, отображения уникального состояния ${JSON.stringify(uniqueState)}`);
    }
}
class PhoneFactory {
    constructor(initialPhone) {
        this.phone = {};
        for (const state of initialPhone) {
            this.phone[this.getKey(state)] = new Phone(state);
        }
    }
    getKey(state) {
        return state.join('_');
    }
    getPhone(sharedState) {
        const key = this.getKey(sharedState);
        if (!(key in this.phone)) {
            console.log(`Фабрика телефонов: не могу найти нужный телефон, по этому создаю новый `);
            this.phone[key] = new Phone(sharedState);
        }
        else {
            console.log(`Фабрика телефонов: данный телефон уже существует, так-что не нужно создавать новый`);
        }
        return this.phone[key];
    }
    listPhone() {
        const count = Object.keys(this.phone).length;
        console.log(`Список телефонов: есть ${count} телефонов`);
        for (const key in this.phone) {
            console.log(key);
        }
    }
}
//Телефоны которые есть в наличии
const factory = new PhoneFactory([
    //Первый телефон
    ['xiaomi', 'note 10 pro', 'black'],
    //Второй телефон
    ['iphone', '14pro', 'white'],
    //Третий телефон
    ['nokia', '3310', 'blue'],
]);
function newPhone(ff, brand, model, color) {
    const phoneInfo = ff.getPhone([brand, model, color]);
}
//Заказ телефона который есть в наличии
newPhone(factory, 'xiaomi', 'note 10 pro', 'black');
factory.listPhone();
console.log('\n');
//Заказ телефона которого нет в наличии
newPhone(factory, 'iphone', '6s', 'white');
factory.listPhone();
