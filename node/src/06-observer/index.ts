class Subject {
  private state: number = 0;
  private observers: Observer[] = [];

  getState(): number {
    return this.state;
  }

  setState(newState: number) {
    this.state = newState;
    this.notity();
  }

  /** 添加观察者 */
  attach(observer: Observer) {
    this.observers.push(observer);
  }

  /** 通知 */
  notity() {
    this.observers.forEach((observer) => {
      observer.update(this.state);
    });
  }
}

class Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(state: number) {
    console.log(`observer update ${this.name} ${state}`);
  }
}

const sub = new Subject();
const observer1 = new Observer("waker");
const observer2 = new Observer("cn");

sub.attach(observer1);
sub.attach(observer2);

sub.setState(2);
