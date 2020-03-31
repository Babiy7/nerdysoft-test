import React from "react";
import classes from "./Toolbar.module.css";

import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = props => (
  <div className={classes.Toolbar}>
    <h4 className={classes.Title}>Tasks </h4>

    <ul className={classes.DesktopOnly}>
      <NavigationItems />
    </ul>
  </div>
);

export default Toolbar;
