class ArrayQueue {
  constructor(capacity = 13) {
    this.data = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(value) {
    if (this.count === this.capacity) {
      console.log("Черга переповнена, елемент не додано:", value);
      return false;
    }
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Черга порожня");
      return undefined;
    }
    const value = this.data[this.head];
    this.data[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return value;
  }

  print() {
    const items = [];
    for (let i = 0; i < this.count; i++) {
      items.push(this.data[(this.head + i) % this.capacity]);
    }
    console.log("Черга (масив):", items.length ? items.join(" <- ") : "порожня");
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Черга порожня");
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    this.count--;
    return value;
  }

  print() {
    const items = [];
    let current = this.head;
    while (current) {
      items.push(current.value);
      current = current.next;
    }
    console.log("Черга (вузли):", items.length ? items.join(" <- ") : "порожня");
  }
}

function demo(name, queue) {
  console.log(`\n===== ${name} =====`);
  queue.print();
  console.log("Розмір:", queue.size());

  [8, 4, 5, 6, 9].forEach((v) => queue.enqueue(v));
  console.log("Після додавання 8, 4, 5, 6, 9:");
  queue.print();
  console.log("Розмір:", queue.size());

  console.log("Видалено:", queue.dequeue());
  console.log("Видалено:", queue.dequeue());
  queue.print();
  console.log("Розмір:", queue.size());

  queue.enqueue(15);
  queue.enqueue(9);
  console.log("Після додавання 15, 9:");
  queue.print();

  while (!queue.isEmpty()) queue.dequeue();
  console.log("Після повного очищення:");
  queue.print();
  queue.dequeue();
}

demo("Черга на масиві", new ArrayQueue(13));
demo("Черга на вузлах", new LinkedQueue());
