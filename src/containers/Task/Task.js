import React, { useState } from "react";
import classes from "./Task.module.scss";

import TaskComponent from "../../components/Task/Task";
import Button from "../../components/UI/Button/Button";

const Task = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const task = props.task;
  let content;

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  content = (
    <TaskComponent
      title={task.title}
      description={task.description}
      createdBy={task.createdBy}
      handleEdit={handleEdit}
    />
  );

  if (isEdit) {
    content = (
      <>
        <div style={{ width: "100%" }} className={classes.Content}>
          <input type="text" className={classes.Input} value={task.title} />
          <textarea type="text" />
        </div>

        <Button type="Success" clicked={handleEdit}>
          Edit
        </Button>
      </>
    );
  }

  return content;
};

export default Task;
