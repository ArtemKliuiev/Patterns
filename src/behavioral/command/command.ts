interface IPilot {
  on(): void;
  off(): void;
}
class Autopilot implements IPilot {
  on() {
    console.log("Автопилот включен")
  }
  off() {
    console.log("Автопилот выключен")
  }
}
// Абстрактная команда
class Command<T> {
  autopilot: T
  constructor(autopilot: T) {
    this.autopilot = autopilot;
  }
  execute() { }
}

class OnAutopilot<T> extends Command<T> {
  autopilot: any
  constructor(autopilot: T) {
    super(autopilot);
  }
  execute() {
    this.autopilot.on();
  }
}

class OffAutopilot<T> extends Command<T> {
  autopilot: any
  constructor(autopilot: T) {
    super(autopilot);
  }
  execute() {
    this.autopilot.off();
  }
}
// Исполнитель команд
class SwitchAutopilot<T> {
  private command: any
  concreteCommand(command: T) {
    this.command = command;
  }
  executeCommand() {
    this.command.execute();
  }
}
//Проверка
const onAutopilot = new OnAutopilot(new Autopilot());
const offAutopilot = new OffAutopilot(new Autopilot());
const switchAutopilot = new SwitchAutopilot();
//Включить автопилот
switchAutopilot.concreteCommand(onAutopilot);
switchAutopilot.executeCommand();
//Выключить автопилот
switchAutopilot.concreteCommand(offAutopilot);
switchAutopilot.executeCommand();


