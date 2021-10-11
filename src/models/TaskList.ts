import Task from "./Task";
import FilterEnum from "~enums/FilterEnum";

export default class TaskList {
  #tasks: Task[] = [];
  #filter: FilterEnum;

  constructor(tasks: Task[], filter = FilterEnum.NONE) {
    this.#tasks = tasks;
    this.#filter = filter;
  }

  get items() {
    return this.#applyFilter(this.#tasks);
  }

  get length() {
    return this.items.length;
  }

  get filter() {
    return this.#filter;
  }

  filterActive(): TaskList {
    if (!this.showingActive()) {
      return new TaskList(this.#tasks, FilterEnum.ACTIVE);
    }

    return this;
  }

  filterDone(): TaskList {
    if (!this.showingDone()) {
      return new TaskList(this.#tasks, FilterEnum.DONE);
    }

    return this;
  }

  removeFilter(): TaskList {
    if (!this.showingAll()) {
      return new TaskList(this.#tasks, FilterEnum.NONE);
    }

    return this;
  }

  showingAll(): boolean {
    return this.#filter === FilterEnum.NONE;
  }

  showingActive(): boolean {
    return this.#filter === FilterEnum.ACTIVE;
  }

  showingDone(): boolean {
    return this.#filter === FilterEnum.DONE;
  }

  removeDone() {
    const activeTasks = this.#tasks.filter((task: Task) => task.active);
    return new TaskList(activeTasks, FilterEnum.NONE);
  }

  addTask(newTask: Task): TaskList {
    const tasks = [...this.#tasks, newTask];
    return new TaskList(tasks, this.#filter);
  }

  changeTask(modifiedTask: Task): TaskList {
    const tasks = this.#tasks.map((t: Task) =>
      t.id === modifiedTask.id ? modifiedTask : t,
    );
    return new TaskList(tasks, this.#filter);
  }

  #applyFilter(tasks: Task[]): Task[] {
    if (this.showingActive()) {
      return this.applyFilterActive(tasks);
    }

    if (this.showingDone()) {
      return this.#applyFilterDone(tasks);
    }

    return [...tasks];
  }

  applyFilterActive(tasks: Task[]): Task[] {
    return tasks.filter((task: Task) => task.active);
  }

  #applyFilterDone(tasks: Task[]): Task[] {
    return tasks.filter((task: Task) => task.done);
  }
}
