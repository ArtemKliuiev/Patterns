"use strict";
class Autopilot {
    on() {
        console.log("Автопилот включен");
    }
    off() {
        console.log("Автопилот выключен");
    }
}
// Абстрактная команда
class Command {
    constructor(autopilot) {
        this.autopilot = autopilot;
    }
    execute() { }
}
class OnAutopilot extends Command {
    constructor(autopilot) {
        super(autopilot);
    }
    execute() {
        this.autopilot.on();
    }
}
class OffAutopilot extends Command {
    constructor(autopilot) {
        super(autopilot);
    }
    execute() {
        this.autopilot.off();
    }
}
// Исполнитель команд
class SwitchAutopilot {
    concreteCommand(command) {
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
