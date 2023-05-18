interface Builder {
  addElectricWheel(electricWheel: boolean): any;
  addBasket(basket: boolean): any;
  addNitroBoost(nitroBoost: boolean): any;
  addFlightMode(flightMode: boolean): any;
  build(): Bice;
}

class BiceBuilder implements Builder {
  bike: Bice;
  constructor() {
    this.bike = new Bice();
  }
  addElectricWheel(electricWheel: boolean) {
    this.bike.electricWheel = electricWheel;
    return this;
  }
  addBasket(basket: boolean) {
    this.bike.basket = basket;
    return this;
  }
  addNitroBoost(nitroBoost: boolean) {
    this.bike.nitroBoost = nitroBoost;
    return this;
  }
  addFlightMode(flightMode: boolean) {
    this.bike.flightMode = flightMode;
    return this;
  }
  build() {
    return this.bike
  }
};

class Bice {
  electricWheel?: boolean;
  basket?: boolean;
  nitroBoost?: boolean;
  flightMode?: boolean;
  constructor() {
    this.electricWheel = false;
    this.basket = false;
    this.nitroBoost = false;
  }
};

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
const director = new BuilderDirector()
//Сборка велосипеда по умолчанию
console.log(director.defaultBice())
//Второй вариант сборки велосипеда
console.log(director.greatBiceMod())
//Третий вариант сборки велосипеда
console.log(director.superBiceMod())