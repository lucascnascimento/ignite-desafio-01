import logo from "../../assets/toDo_logo.svg";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do ignite" />
    </header>
  );
};
