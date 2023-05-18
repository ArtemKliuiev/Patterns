interface PC {
  enter(password: any): void,
  shutdown(): void,

}

class PasswordPC implements PC {
  enter() {
    console.log("Добро пожаловать")
  }
  shutdown() {
    console.log("Завершение работы")
  }
}

class passwordCheck implements PC {
  pc: any
  constructor(pc: any) {
    this.pc = pc
  }
  enter(password: any) {
    if (this.examination(password)) {
      this.pc.enter()
    } else {
      console.log('Пароль неверный, доступ запрещен')
    }
  }
  examination(password: any) {
    return password === '2023'
  }
  shutdown() {
    this.pc.shutdown()
  }
}
//Проверка
const PC = new passwordCheck(new PasswordPC());
PC.enter('2023');//Добро пожаловать

PC.enter('0000');//Пароль неверный, доступ запрещен

PC.shutdown();//Завершение работы

