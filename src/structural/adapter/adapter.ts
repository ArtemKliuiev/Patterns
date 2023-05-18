class Cat {
  catInterface(): string {
    return 'Мяу-Мяу';
  }
}
class Dog {
  dogInterface(): string {
    return 'Гав-Гав'
  }
}
class DogAdapter {
  private dog: any;
  constructor(dog: any) {
    this.dog = dog;
  }

  catInterface(): string {
    return this.dog.dogInterface();
  }
}
class Talk {
  talking(cat: any): string {
    return cat.catInterface();
  }
}
//Проверка
//Создаем адаптер голоса собаки
const dogVoiceAdapter = new DogAdapter(new Dog());

//Оригинальное звучание кота
console.log(`Оригинальное звучание кота: ${new Talk().talking(new Cat())}`);

//Звучание кота по собачему без адаптера
// dogCatTalk.talking(dogVoice);//Error

//Звучание кота с использование адаптера
console.log(`Звучание кота с использование адаптера: ${new Talk().talking(dogVoiceAdapter)}`);