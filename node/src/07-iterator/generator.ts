// function* genNums() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// const iterator = genNums();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* genNums() {
//   yield* [10, 20, 30]; // 有序结构，已经实现了 [Symbol.iterator]
// }

// const iterator = genNums();

// for (let n of iterator) {
//   console.log(n);
// }

class CustomIterator {
  private data: number[];

  constructor() {
    this.data = [10, 20, 30, 40];
  }

  *[Symbol.iterator]() {
    yield* this.data;
  }
}

const iterator = new CustomIterator();

for (const el of iterator) {
  console.log(el);
}

export {};
