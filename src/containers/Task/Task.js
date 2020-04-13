import React from "react";
import classes from "./Task.module.scss";

import { updatedState } from "../../shared/utility";
import { connect } from "react-redux";
import { changeTask, deleteTask } from "../../redux/actions/task";

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

  handleChangeTask = () => {
    const task = this.props.task;
    const configuration = this.state.configuration;

    this.props.change(
      configuration.title.elementConfig.value,
      configuration.description.elementConfig.value,
      task.id
    );

    this.handleEdit();
  };

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

  handleDelete = () => {
    const task = this.props.task;

    this.props.delete(task.id);
  };

  render() {
    const task = this.props.task;
    let content;
    const select = { task: task, users: this.props.users };

    content = (
      <TaskComponent
        title={task.title}
        description={task.description}
        createdBy={task.createdBy}
        date={task.date}
        handleEdit={this.handleEdit}
        deleted={this.handleDelete}
      />
    );

    if (this.state.isEdit) {
      content = (
        <EditComponet
          title={task.title}
          description={task.description}
          handleEdit={this.handleChangeTask}
          configuration={this.state.configuration}
          changed={this.handleChange}
          select={select}
        />
      );
    }

    return <div className={classes.Task}>{content}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.auth.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: (title, description, id) =>
      dispatch(changeTask(title, description, id)),
    delete: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
