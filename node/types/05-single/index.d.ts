declare class SingleTon {
    private constructor();
    private static instance;
    static getInstance(): SingleTon | null;
}
declare let s1: SingleTon | null;
declare let s2: SingleTon | null;
