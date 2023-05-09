interface IProduct {
    name: string;
    fn1: () => void;
    fn2: () => void;
}
declare class Product1 implements IProduct {
    name: string;
    constructor(name: string);
    fn1(): void;
    fn2(): void;
}
declare class Product2 implements IProduct {
    name: string;
    constructor(name: string);
    fn1(): void;
    fn2(): void;
}
declare class Creator {
    create(type: string, name: string): Product1 | Product2;
}
