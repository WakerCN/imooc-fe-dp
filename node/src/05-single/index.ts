class SingleTon {
  private constructor() {}

  private static instance: SingleTon | null;

  public static getInstance() {
    if (this.instance === null) {
      SingleTon.instance = new SingleTon();
    }
    return this.instance;
  }
}

let s1 = SingleTon.getInstance();
let s2 = SingleTon.getInstance();

console.log(s1 === s2);
