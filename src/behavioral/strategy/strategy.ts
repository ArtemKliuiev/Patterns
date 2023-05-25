"use strict";
class TextTransform {
  text: string;
  private strategy: Strategy;
  constructor(text: string, strategy: Strategy) {
    this.text = text;
    this.strategy = strategy;
  }
  editingText() {
    console.log('TextTransform: я незнаю как, но стратегия это сделала)');
    const result = this.strategy.textTransform(text);
    console.log(result)

  }
}
interface Strategy {
  textTransform(text: string): string
}
class ConcreteStrategyA implements Strategy {
  textTransform(text: string) {
    return `Cтратегия: я только что изменила регистр этого тексата: ${text.toUpperCase()} \n`;
  }
}
class ConcreteStrategyB implements Strategy {
  textTransform(text: string) {
    return `Cтратегия: я только что изменила регистр этого тексата: ${text.toLowerCase()} \n`;
  }
}
const text = 'HeLlO wOrlD:)!'
const toUpperCase = new ConcreteStrategyA();
const toLowerCase = new ConcreteStrategyB();

const UpperCaseTransform = new TextTransform(text, toUpperCase);
UpperCaseTransform.editingText();

const LowerCaseTransform = new TextTransform(text, toLowerCase);
LowerCaseTransform.editingText();