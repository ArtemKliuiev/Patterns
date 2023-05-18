"use strict";
class IceCream {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
class IceCreamContainer {
    constructor() {
        this.iceCreams = [];
    }
    add(iceCream) {
        this.iceCreams.push(iceCream);
    }
    remove(iceCream) {
        const index = this.iceCreams.indexOf(iceCream);
        this.iceCreams.splice(index, 1);
    }
    getPrice() {
        let sum = 0;
        for (let i = 0; i < this.iceCreams.length; i++) {
            const iceCream = this.iceCreams[i];
            sum = sum + iceCream.getPrice();
        }
        return sum;
    }
}
// Ассортимент
const chocolateIceCream = new IceCream('Шоколадное мороженное', 20);
const iceCreamWithJam = new IceCream('Мороженное с джемом', 15);
const iceCreamInGlass = new IceCream('Мороженное в стаканчику', 10);
// Создаем заказ
const order = new IceCreamContainer();
order.add(iceCreamInGlass);
order.add(iceCreamWithJam);
order.add(chocolateIceCream);
// Убираем мороженое добавленное по ошибке
// order.remove(chocolateIceCream);
console.log(`Сумма за весь заказ: ${order.getPrice()}.00 UAH`);
