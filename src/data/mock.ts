import FilterEnum from "~enums/FilterEnum";
import TaskList from "~models/TaskList";
import Task from "~models/Task";

const mock: Task[] = [
  Task.createActive(1, "Estudar Next.js"),
  Task.createDone(2, "Limpar carro"),
  Task.createActive(3, "Estudar Clean Code"),
];

const data = new TaskList(mock, FilterEnum.NONE);
export default data;
