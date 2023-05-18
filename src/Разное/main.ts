
interface Handler {
  setNext(handler: Handler): Handler;

  handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: any;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): any {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Банан') {
      return `Обезьяна: я хочу: ${request}.`;
    }
    return super.handle(request);

  }
}

class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Орех') {
      return `Белка: я хочу: ${request}.`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === 'Мясо') {
      return `Собака: я хочу: ${request}.`;
    }
    return super.handle(request);
  }
}

function clientCod(handler: Handler) {
  const foods = ['Орех', 'Банан', 'Коффе'];

  for (const food of foods) {
    console.log(`Клиент: кто хочет : ${food}?`);

    const result = handler.handle(food);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  ${food} остался нетронутым.`);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Цепочка: Обезьяна > Белка > Собака\n');
clientCod(monkey);
console.log('');
console.log('Подцепь: Белка > Собака\n');
clientCod(squirrel);