declare class Subject {
    private state;
    private observers;
    getState(): number;
    setState(newState: number): void;
    /** 添加观察者 */
    attach(observer: Observer): void;
    /** 通知 */
    notity(): void;
}
declare class Observer {
    name: string;
    constructor(name: string);
    update(state: number): void;
}
declare const sub: Subject;
declare const observer1: Observer;
declare const observer2: Observer;
