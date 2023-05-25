interface PC {
  enter(password: string): void,
  shutdown(): void,

}

class InputPC implements PC {
  enter() {
    console.log("Добро пожаловать")
  }
  shutdown() {
    console.log("Завершение работы")
  }
}

class passwordCheck implements PC {
  pc: InputPC
  constructor(pc: InputPC) {
    this.pc = pc
  }
  enter(password: string) {
    if (this.examination(password)) {
      this.pc.enter()
    } else {
      console.log('Пароль неверный, доступ запрещен')
    }
  }
  examination(password: string) {
    return password === '2023'
  }
  shutdown() {
    this.pc.shutdown()
  }
}
//Проверка
const PC = new passwordCheck(new InputPC());
PC.enter('2023');//Добро пожаловать

PC.enter('0000');//Пароль неверный, доступ запрещен

PC.shutdown();//Завершение работы

