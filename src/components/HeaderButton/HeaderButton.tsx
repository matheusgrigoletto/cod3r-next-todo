import { PropsWithChildren } from "react";

import styles from "./HeaderButton.module.css";

interface HeaderButtonProps {
  selected?: boolean;
  onClick: (event: any) => void;
}

const HeaderButton = (props: PropsWithChildren<HeaderButtonProps>) => {
  const className =
    styles.HeaderButton + " " + (props.selected ? styles.selected : "");

  return (
    <button type="button" onClick={props.onClick} className={className}>
      {props.children}
    </button>
  );
};

export default HeaderButton;
