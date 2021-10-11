import styles from "./ListItem.module.css";
import Checkbox from "~components/Checkbox/Chekbox";

interface ListItemProps {
  value: string;
  done: boolean;
  changeStatus: () => void;
}

const ListItem = (props: ListItemProps) => {
  let className = styles.ListItem;

  if (props.done) {
    className += ` ${styles.done}`;
  }

  return (
    <li onClick={props.changeStatus} className={className}>
      <Checkbox checked={props.done} />
      <span>{props.value}</span>
    </li>
  );
};

export default ListItem;
