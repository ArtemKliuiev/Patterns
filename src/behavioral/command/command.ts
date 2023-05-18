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
class Command {
  autopilot: any
  constructor(autopilot: any) {
    this.autopilot = autopilot;
  }
  execute() { }
}

class OnAutopilot extends Command {
  autopilot: any
  constructor(autopilot: any) {
    super(autopilot);
  }
  execute() {
    this.autopilot.on();
  }
}

class OffAutopilot extends Command {
  autopilot: any
  constructor(autopilot: any) {
    super(autopilot);
  }
  execute() {
    this.autopilot.off();
  }
}
// Исполнитель команд
class SwitchAutopilot {
  private command: any
  concreteCommand(command: any) {
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


