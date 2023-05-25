class PhotoshopCaretaker {
  private mementos: Array<any>;
  private current: number;
  constructor() {
    this.mementos = [];
    this.current = -1;
  }

  save(memento: number) {
    this.mementos.push(memento);
    this.current++;
  }

  ctrl_z() {
    if (this.current >= 0) {
      this.current--;
      return this.mementos[this.current];
    }
    return undefined;
  }

  ctrl_alt_z() {
    if (this.current < this.mementos.length - 1) {
      this.current++;
      return this.mementos[this.current];
    }
    return undefined;
  }
}

class Photoshop {
  private photo: string;
  private caretaker: any
  constructor() {
    this.photo = 'Правка';
    this.caretaker = new PhotoshopCaretaker();
    this.caretaker.save(new PhotoshopMemento(this.photo));
  }

  editing(photo: string) {
    this.photo = photo;
    this.caretaker.save(new PhotoshopMemento(this.photo));
  }

  getResult() {
    return this.photo;
  }

  ctrl_z() {
    const memento = this.caretaker.ctrl_z();
    if (memento) {
      this.photo = memento.getResult();
    }
  }

  ctrl_alt_z() {
    const memento = this.caretaker.ctrl_alt_z();
    if (memento) {
      this.photo = memento.getResult();
    }
  }
}

interface Memento {
  getResult(): string
}

class PhotoshopMemento implements Memento {
  private photo: string
  constructor(photo: string) {
    this.photo = photo;
  }

  getResult() {
    return this.photo;
  }
}
//Проверка
const photoshop = new Photoshop();
const result = photoshop.getResult();
console.log(result);
//Правки
photoshop.editing("Еще правка");
console.log(photoshop.getResult());

photoshop.editing("Третья правка");
console.log(photoshop.getResult());
//Отменяем правки
photoshop.ctrl_z();
console.log(photoshop.getResult());

photoshop.ctrl_z();
console.log(photoshop.getResult());
//Возвращаем правки 
photoshop.ctrl_alt_z();
console.log(photoshop.getResult());

photoshop.ctrl_alt_z();
console.log(photoshop.getResult());
