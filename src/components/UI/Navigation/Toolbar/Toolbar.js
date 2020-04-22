import React from "react";
import classes from "./Toolbar.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
  <div className={classes.Toolbar}>
    <h4 className={classes.Title}>Tasks </h4>

    <NavigationItems />
  </div>
);

export default Toolbar;
