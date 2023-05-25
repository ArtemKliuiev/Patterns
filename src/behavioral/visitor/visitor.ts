interface Engine {
  accept(visitor: EngineVisitor): void;
  info(): string;
}

class MiniEngine implements Engine {
  info() {
    return `Двигатель объемом 0.7 литра`;
  }

  accept(visitor: EngineVisitor) {
    visitor.visit(this);
  }
}

class StandardEngine implements Engine {
  info() {
    return `Двигатель объемом 2 литра`;
  }

  accept(visitor: EngineVisitor) {
    visitor.visit(this);
  }
}

class SuperEngine implements Engine {
  info() {
    return `Двигатель объемом 8 литров`;
  }

  accept(visitor: EngineVisitor) {
    visitor.visit(this);
  }
}

interface EngineVisitor {
  visit(engine: Engine): void;
}

class ConcreteEngineVisitor implements EngineVisitor {
  visit(engine: any) {
    engine.export = console.log(`Экспортированные данные: ${engine.info()}`);
  }
}

// Создаем экземпляры классов
const miniEngine = new MiniEngine();
const standardEngine = new StandardEngine();
const superEngine = new SuperEngine();

// Создаем экземпляр посетителя
const engineVisitor: EngineVisitor = new ConcreteEngineVisitor();

// Применяем посетителя к каждому двигателю
miniEngine.accept(engineVisitor);
standardEngine.accept(engineVisitor);
superEngine.accept(engineVisitor);
