"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`my name is ${this.name},and I'm ${this.age} years old`);
    }
}
exports.Person = Person;
class Coder extends Person {
    constructor(name, age, work) {
        super(name, age);
        this.workname = work;
    }
    work() {
        console.log(`do work  --->  ${this.workname}`);
    }
}
const waker = new Person("waker", 24);
const fontendWorker = new Coder("waker", 23, "coding");
waker.showInfo();
fontendWorker.showInfo();
fontendWorker.work();
//# sourceMappingURL=demo01.js.map