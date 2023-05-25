class Bike {
  getPrice(): number {
    return 1000
  }
  getBikeDescription(): string {
    return "Basic bike"
  }
}

//Декоратор добавляющий нитро-ускорение

class NitroBoost extends Bike {
  bike: Bike;
  constructor(bike: Bike) {
    super()
    this.bike = bike;
  }
  getPrice() {
    return this.bike.getPrice() + 500;
  }
  getBikeDescription() {
    return this.bike.getBikeDescription() + ' with nitro boost'
  }
}

//Декоратор добавляющий авто-пилот
class AutoPilot extends Bike {
  bike: Bike;
  constructor(bike: Bike) {
    super()
    this.bike = bike;
  }
  getPrice() {
    return this.bike.getPrice() + 1500;
  }
  getBikeDescription() {
    return this.bike.getBikeDescription() + ' with auto pilot'
  }
}

//Создаем велосипед
const bike = new Bike();
console.log(`${bike.getBikeDescription()} const: ${bike.getPrice()} USD`)
//Оборачиваем велосипед в декоратор
//Велосипед с нитро
const bikeWithNitroBoost = new NitroBoost(bike);
console.log(`${bikeWithNitroBoost.getBikeDescription()} const: ${bikeWithNitroBoost.getPrice()} USD`)
//Велосипед с автопилотом
const bikeWithAutoPilot = new AutoPilot(bike);
console.log(`${bikeWithAutoPilot.getBikeDescription()} const: ${bikeWithAutoPilot.getPrice()} USD`)
//Велосипед с нитро и с автопилотом(декоратор обварачиватся в другой декоратор)
const bikeWithNitroAndAutoPilot = new NitroBoost(new AutoPilot(bike));
console.log(`${bikeWithNitroAndAutoPilot.getBikeDescription()} const: ${bikeWithNitroAndAutoPilot.getPrice()} USD`)
