// Symbol.iterator

interface IteratorRes {
  value: number | undefined;
  done: boolean;
}

class CustomIterator {
  private length = 3;
  private index = 0;

  next(): IteratorRes {
    this.index++;
    if (this.index <= this.length) {
      return { value: this.index, done: false };
    }
    return { value: undefined, done: true };
  }

  [Symbol.iterator]() {
    return this;
  }
}

const customIterator = new CustomIterator();

console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
console.log(customIterator.next());
