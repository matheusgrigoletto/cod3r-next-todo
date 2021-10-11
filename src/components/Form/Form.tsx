import React, { PropsWithChildren } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Task from "~models/Task";

import styles from "./Form.module.css";

interface FormProps {
  onCreate: (task: Task) => void;
}

const Form = (props: PropsWithChildren<FormProps>) => {
  const [taskContent, setTaskContent] = React.useState("");

  const handleChange = ({ target }: any) => {
    setTaskContent(target.value);
  };

  const createNewTask = (event: any) => {
    event.preventDefault();

    if (taskContent.trim()) {
      const novaTarefa = Task.createActive(Task.generateID(), taskContent);
      props.onCreate(novaTarefa);
      setTaskContent("");
    }
  };

  return (
    <form className={styles.Form} onSubmit={createNewTask}>
      <input
        type="text"
        value={taskContent}
        onChange={handleChange}
        placeholder="New Task"
      />
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </button>
    </form>
  );
};

export default Form;
