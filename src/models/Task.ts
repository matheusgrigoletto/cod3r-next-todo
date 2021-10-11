export default class Task {
  #id: number;
  #content: string;
  #done: boolean;

  constructor(id: number, content: string, done = false) {
    this.#id = id;
    this.#content = content;
    this.#done = done;
  }

  static createActive = (id: number, content: string) => new Task(id, content);

  static createDone = (id: number, content: string) =>
    new Task(id, content, true);

  static generateID(): number {
    const [min, max] = [1, 999999];
    return Math.floor(Math.random() * (max - min) + min);
  }

  get id() {
    return this.#id;
  }

  get content() {
    return this.#content;
  }

  get done() {
    return this.#done;
  }

  get active() {
    return !this.done;
  }

  markAsDone() {
    return Task.createDone(this.id, this.content);
  }

  activate() {
    return Task.createActive(this.id, this.content);
  }

  toggle() {
    return this.done ? this.activate() : this.markAsDone();
  }
}
