"use strict";
//Посредник
class SomeAirport {
    constructor(oneTransport, twoTransport) {
        this.airplane = oneTransport;
        this.airplane.setMediator(this);
        this.helicopter = twoTransport;
        this.helicopter.setMediator(this);
    }
    getTransport(transport) {
        if (transport == 'самолет') {
            console.log('Аэропорт: посадка самолета разрешена\n');
        }
        else if (transport == 'вертолет') {
            console.log('Аэропорт: посадка вертолета разрешена\n');
        }
    }
}
class AirTransport {
    constructor(airport) {
        this.airport = airport;
    }
    setMediator(airport) {
        this.airport = airport;
    }
}
class Airplane extends AirTransport {
    landingPlane() {
        console.log('Самолет: запрашиваю разрешение на посадку');
        this.airport.getTransport('самолет');
    }
}
class Helicopter extends AirTransport {
    landingHelicopter() {
        console.log('Вертолет: запрашиваю разрешение на посадку');
        this.airport.getTransport('вертолет');
    }
}
const airplane = new Airplane();
const helicopter = new Helicopter();
const airport = new SomeAirport(helicopter, airplane);
//Самолет запрашиваю разрешение
airplane.landingPlane();
//Вертолет запрашиваю разрешение
helicopter.landingHelicopter();
