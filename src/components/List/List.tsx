import styles from "./List.module.css";

import TaskList from "~models/TaskList";
import Task from "~models/Task";
import ListItem from "~components/ListItem/ListItem";

interface ListProps {
  taskList: TaskList;
  onChange: (taskList: TaskList) => void;
}

const List = (props: ListProps) => {
  const { taskList } = props;

  const renderTasks = () => {
    return taskList.items.map((task: Task) => (
      <ListItem
        key={task.id}
        value={task.content}
        done={task.done}
        changeStatus={() => {
          const taskModified = task.toggle();
          const newTaskList = taskList.changeTask(taskModified);
          props.onChange(newTaskList);
        }}
      />
    ));
  };

  return (
    <section>
      <ul className={styles.List}>{renderTasks()}</ul>
    </section>
  );
};

export default List;
