import React from "react";
import styles from "./CollectionUser.module.css";

const CollectionUser = (props) => {
  return (
    <ul className={styles.ulCollect}>
      {this.props.users.map((Items) => (
        <li>
          {Items.name} ({Items.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default CollectionUser;
