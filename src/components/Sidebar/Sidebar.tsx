import React, { FunctionComponent } from "react";
import styles from "./Sidebar.module.scss";
interface SidebarProps {}

const Sidebar: FunctionComponent<SidebarProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Icon</h1>
      <ul>
        <li>Dashboard</li>
        <li>Transactions</li>
        <li>Customers</li>
        <li>Riders</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
