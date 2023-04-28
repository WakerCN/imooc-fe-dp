class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`my name is ${this.name},and I'm ${this.age} years old`);
  }
}

class Coder extends Person {
  public workname: string;

  constructor(name: string, age: number, work: string) {
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

export { Person };
