import React from "react";
import classes from "./NavigationItems.module.scss";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem clicked={props.clicked} exact link="/">
        Tasks
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/my-tasks">
        My tasks
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/create">
        Create task
      </NavigationItem>
      <NavigationItem clicked={props.clicked} link="/logout">
        Logout
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
