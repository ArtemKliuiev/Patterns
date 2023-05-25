abstract class Motorbike {
  templateMethod() {
    this.startAssembly();
    this.creationFrame();
    this.bikePainting();
    this.addEngine();
    this.addWheel();
  }
  protected startAssembly(): void { }
  protected creationFrame(): void {
    console.log('Изготовление рамы мотоцикла')
  }
  protected bikePainting(): void { }
  protected addEngine(): void { }
  protected addWheel(): void {
    console.log('Установка колес')
  }
}
class RedElectricMotorcycle extends Motorbike {
  protected startAssembly(): void {
    console.log('Начало сборки электро мотоцикла')
  }
  protected bikePainting(): void {
    console.log('Покраска в красный цвет')
  }
  protected addEngine(): void {
    console.log('Установка электродвигателя двигателя')
  }
}
class BlackMotorbike extends Motorbike {
  protected startAssembly(): void {
    console.log('Начало сборки стандартного черного мотоцикла')
  }
  protected bikePainting(): void {
    console.log('Покраска в черный цвет')
  }
  protected addEngine(): void {
    console.log('Установка стандартного двигателя')
  }
}
//Проверка
const motoCreation = (motorbike: Motorbike) => {
  motorbike.templateMethod()
}
//Создание красного электромотоцыкла
motoCreation(new RedElectricMotorcycle());
console.log('');
//Создание черного классического мотоцикла
motoCreation(new BlackMotorbike())
