//Конструктор по созданию звездных кораблей
class StarshipConstructor {
  preparingСonveyor() {
    console.log("Подготавливаем конвейер")
  }
  installingFrame() {
    console.log("Устанавливаем каркас корабля на конвейер")
  }
  installingEngine() {
    console.log("Устанавливаем двигатель")
  }
  installingBoost() {
    console.log("Устанавливаем ускоритель для гиперпрыжков")
  }
  releaseСonveyor() {
    console.log("Освобождаем конвейер для следующего корабля")
  }
}
//Фасад упрощающий сборку корабля
class StarshipFacade {
  starship: StarshipConstructor;
  constructor(starship: StarshipConstructor) {
    this.starship = starship
  }
  assembleStarship(): string {
    this.starship.preparingСonveyor();
    this.starship.installingFrame();
    this.starship.installingEngine();
    this.starship.installingBoost();
    this.starship.releaseСonveyor();
    return "Сборка завершена"
  }
}

//Создаем новый фасад, и создаем в нем новый конструктор по созданию кораблей, как аргумент

const newStarship = new StarshipFacade(new StarshipConstructor());
console.log(newStarship.assembleStarship())