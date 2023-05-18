class Phone {
  private sharedState: any;

  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }
  operation(uniqueState: any): void {
    console.log(`Отображения обего состояния ${JSON.stringify(this.sharedState)}, отображения уникального состояния ${JSON.stringify(uniqueState)}`)
  }
}

class PhoneFactory {
  private phone: { [key: string]: Phone } = <any>{};

  constructor(initialPhone: string[][]) {
    for (const state of initialPhone) {
      this.phone[this.getKey(state)] = new Phone(state);
    }
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }

  getPhone(sharedState: string[]): Phone {
    const key = this.getKey(sharedState);

    if (!(key in this.phone)) {
      console.log(`Фабрика телефонов: не могу найти нужный телефон, по этому создаю новый `);
      this.phone[key] = new Phone(sharedState);
    } else {
      console.log(`Фабрика телефонов: данный телефон уже существует, так-что не нужно создавать новый`);
    }

    return this.phone[key];
  }
  listPhone(): void {
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

function newPhone(ff: PhoneFactory, brand: string, model: string, color: string) {
  console.log(`Новый телефон сохранен`);
  const phoneInfo = ff.getPhone([brand, model, color]);
}

newPhone(factory, 'samsung', 'j5', 'white');
newPhone(factory, 'samsung', 'j5', 'white');

newPhone(factory, 'samsung', 'j7', 'white');
factory.listPhone();

