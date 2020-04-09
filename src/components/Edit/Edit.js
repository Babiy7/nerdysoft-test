import React from "react";
import classes from "./Edit.module.scss";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

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

      <Button type="Success" clicked={props.handleEdit}>
        Edit
      </Button>
    </>
  );
};

export default Edit;
