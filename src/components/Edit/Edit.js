import React from "react";
import classes from "./Edit.module.scss";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import SelectBox from "../SelectBox/SelectBox";

const Edit = (props) => {
  const configuration = props.configuration;
  let controls = [];

  for (let key in configuration) {
    controls.push({ id: key, configuration: configuration[key] });
  }

  return (
    <>
      <div className={classes.Content}>
        {controls.map((control) => {
          return (
            <Input
              key={control.id}
              changed={props.changed}
              configuration={control.configuration}
            />
          );
        })}
      </div>

      <div className={classes.SelectBoxContainer}>
        <SelectBox
          users={props.users}
          assignedHandler={props.assignedHandler}
          task={props.task}
        />
      </div>

      <div className={classes.ButtonContainer}>
        <Button type="Success" clicked={props.handleEdit}>
          Edit
        </Button>
      </div>
    </>
  );
};

export default Edit;
