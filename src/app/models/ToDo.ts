export class ToDo {
  name: string;
  done: boolean;
  category: string;

  constructor(name: string, done: boolean, category: string) {
    this.name = name;
    this.done = done;
    this.category = category;
  }
}
