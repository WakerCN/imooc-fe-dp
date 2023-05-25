interface IteratorRes {
    value: number | undefined;
    done: boolean;
}
declare class CustomIterator {
    private length;
    private index;
    next(): IteratorRes;
    [Symbol.iterator](): this;
}
declare const customIterator: CustomIterator;
