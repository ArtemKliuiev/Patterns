interface Context<T> {
  setState(state: T): void
}

// Класс, представляющий контекст
class Order<T> implements Context<T> {
  setState(state: any) {
    console.log(state.stateOrder());

    if (state === stateA) {
      console.log('Ничего не делаем\n')
    } else if (state === stateB) {
      console.log('Идем на почту отправить заказ\n')
    }
    else if (state === stateC) {
      console.log('Сообщаем клиенту о прибытии заказа\n')
    }
  }
}

// Базовый класс состояния
interface IState {
  stateOrder(): string;
}

class State implements IState {
  state: string
  constructor() {
    this.state = 'Тут должно быть состояние заказа'
  }
  stateOrder() {
    return this.state
  }
}

// Конкретные классы состояний
class ConcreteStateA extends State {
  state: string
  constructor() {
    super();
    this.state = 'Состояние: ожидание оплаты';
  }
}

class ConcreteStateB extends State {
  state: string
  constructor() {
    super();
    this.state = 'Состояние: оплата подтверждена';
  }
}

class ConcreteStateC extends State {
  state: string
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