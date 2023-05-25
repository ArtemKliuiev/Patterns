"use strict";
class TextTransform {
    constructor(text, strategy) {
        this.text = text;
        this.strategy = strategy;
    }
    editingText() {
        console.log('TextTransform: я незнаю как, но стратегия это сделала)');
        const result = this.strategy.textTransform(text);
        console.log(result);
    }
}
class ConcreteStrategyA {
    textTransform(text) {
        return `Cтратегия: я только что изменила регистр этого тексата: ${text.toUpperCase()} \n`;
    }
}
class ConcreteStrategyB {
    textTransform(text) {
        return `Cтратегия: я только что изменила регистр этого тексата: ${text.toLowerCase()} \n`;
    }
}
const text = 'HeLlO wOrlD:)!';
const toUpperCase = new ConcreteStrategyA();
const toLowerCase = new ConcreteStrategyB();
const UpperCaseTransform = new TextTransform(text, toUpperCase);
UpperCaseTransform.editingText();
const LowerCaseTransform = new TextTransform(text, toLowerCase);
LowerCaseTransform.editingText();
