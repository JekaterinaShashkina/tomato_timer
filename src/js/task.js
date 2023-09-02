export class Task {
  #name;
  #count;
  constructor(name, count = 0) {
    this.#name = name;
    this.#count = count;
    this.id = Math.floor(Math.random() * 100000000);
  }

  increaseCount() {
    this.#count += 1;
    return this.#count;
  }
  changeName(name) {
    this.#name = name;
    return this.#name;
  }
  get getTaskCount() {
    return this.#count;
  }
}

export const task = new Task('Помыть слона');
