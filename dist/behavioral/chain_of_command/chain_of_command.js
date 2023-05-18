"use strict";
class AbstractWorker {
    setNext(worker) {
        this.nextWorker = worker;
        return worker;
    }
    work(typeWork) {
        if (this.nextWorker) {
            return this.nextWorker.work(typeWork);
        }
        return null;
    }
}
class Painter extends AbstractWorker {
    work(typeWork) {
        if (typeWork === 'нарисовать') {
            return `Художник: я могу ${typeWork}`;
        }
        return super.work(typeWork);
    }
}
class Cook extends AbstractWorker {
    work(typeWork) {
        if (typeWork === 'приготовить еду') {
            return `Повар: я могу ${typeWork}`;
        }
        return super.work(typeWork);
    }
}
class Repairer extends AbstractWorker {
    work(typeWork) {
        if (typeWork === 'отремонтировать') {
            return `Ремонтник: я могу ${typeWork}`;
        }
        return super.work(typeWork);
    }
}
function clientCode2(worker) {
    const needToDo = ['нарисовать', 'приготовить еду', 'поубирать'];
    for (let i = 0; i < needToDo.length; i++) {
        const needWork = needToDo[i];
        console.log(`\nРаботодатель: кто может ${needWork}`);
        const result = worker.work(needWork);
        if (result) {
            console.log(`${result}`);
        }
        else {
            console.log(`Центр занятости: к сожалению никто не может ${needWork}`);
        }
    }
}
//Рабочие
const painter = new Painter();
const cook = new Cook();
const repairer = new Repairer();
painter.setNext(cook).setNext(repairer);
console.log('\nЦепочка: Художник, Повар, Ремонтник');
clientCode2(painter);
console.log('\nЦепочка: Повар, Ремонтник');
clientCode2(cook);
