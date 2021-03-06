import React, { useState } from "react";
import classes from "./CreateTaskContainer.module.scss";

import { connect } from "react-redux";
import addTask from "../../redux/actions/task";
import { initDate } from "../../shared/date";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import SelectBox from "../../components/SelectBox/SelectBox";

const CreateTask = (props) => {
  const [state, setState] = useState({
    configuration: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Type task's name",
        },

        value: "",
      },
      description: {
        elementType: "text-area",
        elementConfig: {
          type: "text",
          placeholder: "Type description of task...",
        },

        value: "",
      },
    },
    tasks: [],
    assignedTo: "no assigned",
  });

  let content = null;
  let controls = [];
  const config = state.configuration;
  const title = config.title.value;
  const description = config.description.value;
  const disabled = title.length > 0 && description.length > 0;

  for (let key in state.configuration) {
    controls.push({ key: key, configuration: state.configuration[key] });
  }

  const changeHandler = (e, key) => {
    const value = e.target.value;
    setState({
      ...state,
      configuration: {
        ...state.configuration,
        [key]: {
          ...state.configuration[key],
          value: value,
        },
      },
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();

    const task = {
      id: new Date().getTime(),
      title: title,
      description: description,
      createdBy: props.user.email,
      assignedTo: state.assignedTo,
      date: initDate(),
    };

    if (title.length > 0 && description.length > 0) {
      props.addTask(task, props.history);
    }
  };

  const assignedHandler = (email) => {
    console.log(email);
    setState({ ...state, assignedTo: email });
  };

  content = (
    <>
      {controls.map((control) => (
        <Input
          key={control.key}
          changed={(e) => changeHandler(e, control.key)}
          configuration={control.configuration}
        />
      ))}

      <div className={classes.SelectBoxContainer}>
        <SelectBox users={props.users} assignedHandler={assignedHandler} />
      </div>

      <div className={classes.ButtonContainer}>
        <Button
          type="Success"
          disabled={!disabled}
          clicked={(e) => clickHandler(e)}
        >
          Create
        </Button>
      </div>
    </>
  );

  if (props.loading) {
    content = <Spinner />;
  }

  return (
    <div className={classes.CreateTask}>
      <div className={classes.Container}>
        <form className={classes.Form}>{content}</form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.task.loading,
    user: state.auth.user,
    tasks: state.task.tasks,
    users: state.auth.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task, history) => dispatch(addTask({ task, history })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
