import React from "react";
import classes from "./Task.module.scss";

import { updatedState } from "../../shared/utility";

import TaskComponent from "../../components/Task/Task";
import EditComponet from "../../components/Edit/Edit";

class Task extends React.Component {
  state = {
    configuration: {
      title: {
        elementType: "input",
        elementConfig: {
          type: "text",
          value: "",
          name: "title",
        },
      },
      description: {
        elementType: "text-area",
        elementConfig: {
          type: "text",
          value: "",
          name: "description",
        },
      },
    },

    isEdit: false,
  };

  componentDidMount() {
    const task = this.props.task;
    const configuration = this.state.configuration;

    this.setState(updatedState(configuration, task));
  }

  handleEdit = () => {
    this.setState((prevState) => {
      return { isEdit: !prevState.isEdit };
    });
  };

  handleChange = (e) => {
    const configuration = this.state.configuration;
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      configuration: {
        ...configuration,
        [name]: {
          ...configuration[name],
          elementConfig: {
            ...configuration[name].elementConfig,
            value: value,
          },
        },
      },
    });
  };

  render() {
    const task = this.props.task;
    let content;

    content = (
      <TaskComponent
        title={task.title}
        description={task.description}
        createdBy={task.createdBy}
        handleEdit={this.handleEdit}
      />
    );

    if (this.state.isEdit) {
      content = (
        <EditComponet
          title={task.title}
          description={task.description}
          handleEdit={this.handleEdit}
          configuration={this.state.configuration}
          changed={this.handleChange}
        />
      );
    }

    return <div className={classes.Task}>{content}</div>;
  }
}

export default Task;
