"use strict";
class Phone {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }
  operation(uniqueState) {
    console.log(`Отображения обего состояния ${JSON.stringify(this.sharedState)}, отображения уникального состояния ${JSON.stringify(uniqueState)}`);
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
    console.log(`Фабрика телефонов: есть ${count} телефонов`);
    for (const key in this.phone) {
      console.log(key);
    }
  }
}
const factory = new PhoneFactory([
  ['xiaomi', 'note 10 pro', 'black'],
  ['iphone', '14pro', 'white'],
  ['nokia', '3310', 'blue'],
]);
factory.listPhone();
function newPhone(ff, brand, model, color) {
  console.log(`Новый телефон сохранен`);
  const phoneInfo = ff.getPhone([brand, model, color]);
}
newPhone(factory, 'samsung', 'j5', 'white');
newPhone(factory, 'samsung', 'j5', 'white');
newPhone(factory, 'samsung', 'j7', 'white');
factory.listPhone();
