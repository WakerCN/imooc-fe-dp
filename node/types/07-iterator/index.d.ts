declare class DataIterator {
    private data;
    private index;
    constructor(container: DataContainer);
    next(): number | null;
    hasNext(): boolean;
}
declare class DataContainer {
    data: number[];
    getIterator(): DataIterator;
}
declare const container: DataContainer;
declare const iterator: DataIterator;
