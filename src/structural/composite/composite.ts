class IceCream {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}

class IceCreamContainer {
  iceCreams: Array<IceCream>;
  constructor() {
    this.iceCreams = [];
  }
  add(iceCream: IceCream) {
    this.iceCreams.push(iceCream);
  }
  remove(iceCream: IceCream) {
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
const iceCreamWithJam = new IceCream('Мороженное с джемом', 15)
const iceCreamInGlass = new IceCream('Мороженное в стаканчику', 10);

// Создаем заказ
const order = new IceCreamContainer();


order.add(iceCreamInGlass);
order.add(iceCreamWithJam);
order.add(chocolateIceCream);

// Убираем мороженое добавленное по ошибке
// order.remove(chocolateIceCream);

console.log(`Сумма за весь заказ: ${order.getPrice()}.00 UAH`);