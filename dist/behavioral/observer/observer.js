"use strict";
class TehnoNews {
    constructor() {
        this.news = '';
        this.events = [];
    }
    setNews(news) {
        this.news = news;
        this.sendAll();
    }
    sendAll() {
        this.events.forEach(subs => subs.inform(this.news));
    }
    registration(subscriber) {
        this.events.push(subscriber);
    }
    cancelRegistration(subscriber) {
        this.events = this.events.filter(el => el !== subscriber);
    }
}
class Subscriber {
    constructor() {
        this.name = '';
    }
    inform(message) {
        console.log(`${this.name}, есть свежая новость для вас: ${message}`);
    }
}
class Artem extends Subscriber {
    constructor() {
        super(...arguments);
        this.name = 'Артем';
    }
}
class Julia extends Subscriber {
    constructor() {
        super(...arguments);
        this.name = 'Юля';
    }
}
class Ivan extends Subscriber {
    constructor() {
        super(...arguments);
        this.name = 'Иван';
    }
}
const tehnoNews = new TehnoNews();
//Добавляем подпищиков
const artem = new Artem();
tehnoNews.registration(artem);
const julia = new Julia();
tehnoNews.registration(julia);
const ivan = new Ivan();
tehnoNews.registration(ivan);
//Первая новость
tehnoNews.setNews('В iPhone 15 будет Type-C вместо Lightning');
//Иван отписался
tehnoNews.cancelRegistration(ivan);
console.log('');
//Вторая новость
tehnoNews.setNews('Новая версия Chat GPT умеет предсказывать будущее и снимать порчу, гадалки рискуют остаться без работы');
