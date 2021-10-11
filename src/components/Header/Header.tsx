import HeaderButton from "~components/HeaderButton/HeaderButton";
import TaskList from "~models/TaskList";

import styles from "./Header.module.css";

interface HeaderProps {
  taskList: TaskList;
  onChange: (taskList: TaskList) => void;
}

const Header = (props: HeaderProps) => {
  return (
    <>
      <header className={styles.Header}>
        <div>
          <HeaderButton
            onClick={() => props.onChange(props.taskList.removeFilter())}
            selected={props.taskList.showingAll()}
          >
            All
          </HeaderButton>
          <HeaderButton
            onClick={() => props.onChange(props.taskList.filterActive())}
            selected={props.taskList.showingActive()}
          >
            Active
          </HeaderButton>
          <HeaderButton
            onClick={() => props.onChange(props.taskList.filterDone())}
            selected={props.taskList.showingDone()}
          >
            Done
          </HeaderButton>
        </div>
        <HeaderButton
          onClick={() => props.onChange(props.taskList.removeDone())}
        >
          Remove completed
        </HeaderButton>
      </header>
      <aside className={styles.Aside}>
        {props.taskList.length > 0 && props.taskList.length}
        {props.taskList.length === 0
          ? "No task found"
          : props.taskList.length === 1
          ? " task found"
          : " tasks found"}
      </aside>
    </>
  );
};

export default Header;
