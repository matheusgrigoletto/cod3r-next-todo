import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  let className = styles.Checkbox;

  if (props.checked) {
    className += ` ${styles.checked}`;
  }

  return (
    <div className={className}>
      {props.checked ? <FontAwesomeIcon icon={faCheck} size="sm" /> : ""}
    </div>
  );
};

export default Checkbox;
