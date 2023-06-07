function* traverse(elList: Element[]): any {
  for (const elem of elList) {
    yield elem;

    const children = Array.from(elem.children);
    if (children.length) {
      yield* traverse(children);
    }
  }
}

const container = document.getElementById("container");
if (container) {
  for (const node of traverse([container])) {
    console.log(node);
  }
}

export {};
