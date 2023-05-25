"use strict";
class MiniEngine {
    info() {
        return `Двигатель объемом 0.7 литра`;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
class StandardEngine {
    info() {
        return `Двигатель объемом 2 литра`;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
class SuperEngine {
    info() {
        return `Двигатель объемом 8 литров`;
    }
    accept(visitor) {
        visitor.visit(this);
    }
}
class ConcreteEngineVisitor {
    visit(engine) {
        engine.export = console.log(`Экспортированные данные: ${engine.info()}`);
    }
}
// Создаем экземпляры классов
const miniEngine = new MiniEngine();
const standardEngine = new StandardEngine();
const superEngine = new SuperEngine();
// Создаем экземпляр посетителя
const engineVisitor = new ConcreteEngineVisitor();
// Применяем посетителя к каждому двигателю
miniEngine.accept(engineVisitor);
standardEngine.accept(engineVisitor);
superEngine.accept(engineVisitor);
