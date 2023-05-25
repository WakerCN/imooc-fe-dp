class DataIterator {
  private data: number[];
  private index = 0;

  constructor(container: DataContainer) {
    this.data = container.data;
  }

  next(): number | null {
    if (this.hasNext()) {
      return this.data[this.index++];
    }
    return null;
  }

  hasNext(): boolean {
    if (this.index > this.data.length) {
      return false;
    }
    return true;
  }
}

class DataContainer {
  data = [10, 20, 30, 40, 50];
  getIterator() {
    return new DataIterator(this);
  }
}

const container = new DataContainer();
const iterator = container.getIterator();

while (iterator.hasNext()) {
  const el = iterator.next();
  console.log("el: ", el);
}
