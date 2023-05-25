interface Observer<T> {
  inform(message: T): void;
}

interface News<T> {
  setNews(news: T): void;
  sendAll(): void;
  registration(subscriber: Observer<T>): void;
  cancelRegistration(subscriber: Observer<T>): void;
}

class TehnoNews<T> implements News<T> {
  news: any;
  events: Observer<T>[];

  constructor() {
    this.news = '';
    this.events = [];
  }

  setNews(news: T) {
    this.news = news;
    this.sendAll();
  }

  sendAll() {
    this.events.forEach(subs => subs.inform(this.news));
  }

  registration(subscriber: Observer<T>) {
    this.events.push(subscriber);
  }

  cancelRegistration(subscriber: Observer<T>) {
    this.events = this.events.filter(el => el !== subscriber);
  }
}

class Subscriber<T> implements Observer<T> {
  name: string;

  constructor() {
    this.name = '';
  }

  inform(message: T) {
    console.log(`${this.name}, есть свежая новость для вас: ${message}`);
  }
}

class Artem<T> extends Subscriber<T> {
  name = 'Артем';
}

class Julia<T> extends Subscriber<T> {
  name = 'Юля';
}

class Ivan<T> extends Subscriber<T> {
  name = 'Иван';
}

const tehnoNews = new TehnoNews<string>();
//Добавляем подпищиков
const artem = new Artem<string>();
tehnoNews.registration(artem);

const julia = new Julia<string>();
tehnoNews.registration(julia);

const ivan = new Ivan<string>();
tehnoNews.registration(ivan);
//Первая новость
tehnoNews.setNews('В iPhone 15 будет Type-C вместо Lightning');
//Иван отписался
tehnoNews.cancelRegistration(ivan);

console.log('');
//Вторая новость
tehnoNews.setNews('Новая версия Chat GPT умеет предсказывать будущее и снимать порчу, гадалки рискуют остаться без работы');
