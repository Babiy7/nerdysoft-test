import React, { useState } from "react";
import classes from "./CreateTask.module.scss";

import { connect } from "react-redux";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";

const CreateTask = props => {
  const [state, setState] = useState({
    configuration: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Type task's name"
        },

        value: ""
      },
      description: {
        elementType: "text-area",
        elementConfig: {
          type: "text",
          placeholder: "Type description of task..."
        },

        value: ""
      }
    },
    tasks: []
  });

  let controls = [];

  for (let key in state.configuration) {
    controls.push({ key: key, configuration: state.configuration[key] });
  }

  function changeHandler(e, key) {
    const value = e.target.value;
    setState({
      ...state,
      configuration: {
        ...state.configuration,
        [key]: {
          ...state.configuration[key],
          value: value
        }
      }
    });
  }

  function clickHandler(e) {
    e.preventDefault();

    const config = state.configuration;

    const task = {
      id: new Date().getTime() + config.title.value,
      title: config.title.value,
      description: config.description.value,
      createdBy: props.user.email,
      date: new Date()
    };

    const tasks = [...state.tasks];

    tasks.push(task);

    setState({ ...state, tasks: tasks });
  }

  console.log(state);

  return (
    <div className={classes.CreateTask}>
      <form className={classes.Form}>
        {controls.map(control => (
          <Input
            key={control.key}
            changed={e => changeHandler(e, control.key)}
            configuration={control.configuration}
          />
        ))}

        <div className={classes.ButtonContainer}>
          <Button type="Success" clicked={e => clickHandler(e)}>
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(CreateTask);
