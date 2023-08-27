export class Task {
  #name;
  #count;
  #id;
  constructor(name, count = 0) {
    this.#name = name;
    this.#count = count;
    this.#id = Date.now();
  }

  increaseCount() {
    this.#count += 1;
    return this.#count;
  }
  changeName(name) {
    this.#name = name;
    return this.#name;
  }
}

export const task = new Task('Помыть слона');
