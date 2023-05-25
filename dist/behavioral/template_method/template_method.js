"use strict";
class Motorbike {
    templateMethod() {
        this.startAssembly();
        this.creationFrame();
        this.bikePainting();
        this.addEngine();
        this.addWheel();
    }
    startAssembly() { }
    creationFrame() {
        console.log('Изготовление рамы мотоцикла');
    }
    bikePainting() { }
    addEngine() { }
    addWheel() {
        console.log('Установка колес');
    }
}
class RedElectricMotorcycle extends Motorbike {
    startAssembly() {
        console.log('Начало сборки электро мотоцикла');
    }
    bikePainting() {
        console.log('Покраска в красный цвет');
    }
    addEngine() {
        console.log('Установка электродвигателя двигателя');
    }
}
class BlackMotorbike extends Motorbike {
    startAssembly() {
        console.log('Начало сборки стандартного черного мотоцикла');
    }
    bikePainting() {
        console.log('Покраска в черный цвет');
    }
    addEngine() {
        console.log('Установка стандартного двигателя');
    }
}
//Проверка
const motoCreation = (motorbike) => {
    motorbike.templateMethod();
};
//Создание красного электромотоцыкла
motoCreation(new RedElectricMotorcycle());
console.log('');
//Создание черного классического мотоцикла
motoCreation(new BlackMotorbike());
