import React, { FunctionComponent } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>Orders</h1>
        </div>

        <div className={styles.icons}>
          <div className={styles.icon}>Icon</div>
          <div className={styles.icon}>Icon</div>
          <div className={styles.icon}>Icon</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
