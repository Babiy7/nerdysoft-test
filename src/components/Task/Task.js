import React from "react";
import classes from "./Task.module.scss";

const Task = (props) => {
  return (
    <div className={classes.Task}>
      <div className={classes.Content}>
        <h4 className={classes.Title} onClick={props.handleEdit}>
          {props.title}
        </h4>

        <div className={classes.Text} onClick={props.handleEdit}>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={classes.Infromation}>
        <div className={classes.CreatedBy}>
          <span>Created by: </span> {props.createdBy}
        </div>
        {/* <div className={classes.Date}>{props.date}</div> */}
      </div>
      <button className={classes.Delete} />
    </div>
  );
};

export default Task;
