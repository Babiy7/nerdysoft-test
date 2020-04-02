import React, { useState } from "react";
import classes from "./CreateTask.module.scss";

import { connect } from "react-redux";
import addTask from "../../redux/actions/task";

import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

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

  let content = null;
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
      id: new Date().getTime(),
      title: config.title.value,
      description: config.description.value,
      createdBy: props.user.email,
      date: new Date()
    };

    props.addTask(task, props.history);
  }

  content = (
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
  );

  if (props.loading) {
    content = <Spinner />;
  }

  return <div className={classes.CreateTask}>{content}</div>;
};

const mapStateToProps = state => {
  return {
    loading: state.task.loading,
    user: state.auth.user,
    tasks: state.task.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task, history) => dispatch(addTask(task, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTask);
