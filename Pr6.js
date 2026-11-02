class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  #top = null;
  #size = 0;

  push(value) {
    this.#top = new Node(value, this.#top);
    this.#size++;
  }

  pop() {
    if (this.#top === null) throw new Error("Стек порожній");
    const value = this.#top.data;
    this.#top = this.#top.next;
    this.#size--;
    return value;
  }

  peek() {
    if (this.#top === null) throw new Error("Стек порожній");
    return this.#top.data;
  }

  clear() {
    this.#top = null;
    this.#size = 0;
  }

  count() {
    let n = 0;
    for (let node = this.#top; node !== null; node = node.next) n++;
    return n;
  }

  size() {
    return this.#size;
  }

  toString() {
    const items = [];
    for (let node = this.#top; node !== null; node = node.next) items.push(node.data);
    return items.length ? `[top] ${items.join(" -> ")} [bottom]` : "[порожній стек]";
  }
}

const s = new Stack();
console.log("Новий стек:", String(s), "| size() =", s.size());

console.log("\n--- push(): додаємо 11, 22, 33 (як на Рис. 2) ---");
[11, 22, 33].forEach(v => { s.push(v); console.log(`push(${v})  ->`, String(s)); });

console.log("\n--- peek() і toString() (елементи не видаляються) ---");
console.log("peek()     =", s.peek());
console.log("toString() =", s.toString());

console.log("\n--- size() і count() ---");
console.log("size()  =", s.size());
console.log("count() =", s.count());

console.log("\n--- pop(): беремо елементи з вершини ---");
console.log("pop() =", s.pop(), " ->", String(s));
console.log("pop() =", s.pop(), " ->", String(s));
console.log("size() =", s.size());

console.log("\n--- clear() ---");
s.push(7); s.push(8);
console.log("перед clear():", String(s), "| size() =", s.size());
s.clear();
console.log("після clear():", String(s), "| size() =", s.size(), "| count() =", s.count());

console.log("\n--- pop() / peek() на порожньому стеку ---");
for (const op of ["pop", "peek"]) {
  try { s[op](); } catch (e) { console.log(`${op}() -> помилка: ${e.message}`); }
}