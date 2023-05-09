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
  private girlfriend: string;

  constructor(name: string, age: number, work: string, girlFriend?: string) {
    super(name, age);
    this.workname = work;
    this.girlfriend = girlFriend || "xxx";
  }

  work() {
    console.log(`do work  --->  ${this.workname}`);
  }

  showGrilfriend() {
    console.log(`${this.name} girldfriend is ${this.girlfriend}`);
  }
}

const waker = new Person("waker", 24);
const fontendWorker = new Coder("waker", 23, "coding", "cn");

waker.showInfo();
fontendWorker.showInfo();
fontendWorker.work();
fontendWorker.showGrilfriend();

export { Person };

// ----------------------- 重载 start ----------------------- //
interface IStyleInfo {
  [key: string]: any;
}
class Jquery {
  css(key: string, value: any): void;
  css(styleInfo: IStyleInfo): void;
  css(keyInfo: string | IStyleInfo, value?: any) {}
}

const jq = new Jquery();
jq.css({ a: 1 });
jq.css("font-size", 16);
// ------------------------ 重载 end ------------------------ //
