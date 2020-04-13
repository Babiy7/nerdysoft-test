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

    assignedTo: "no assigned",
  };

  componentDidMount() {
    const task = this.props.task;
    const configuration = this.state.configuration;

    this.setState(updatedState(configuration, task));
  }

  сhangeTaskHandler = () => {
    const task = this.props.task;
    const configuration = this.state.configuration;

    this.props.change(
      configuration.title.elementConfig.value,
      configuration.description.elementConfig.value,
      task.id,
      this.state.assignedTo
    );

    this.editHandler();
  };

  editHandler = () => {
    this.setState((prevState) => {
      return { isEdit: !prevState.isEdit };
    });
  };

  changeHandler = (e) => {
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

  deleteHandler = () => {
    const task = this.props.task;

    this.props.delete(task.id);
  };

  assignedHandler = (email) => {
    this.setState({ assignedTo: email });
  };

  render() {
    const task = this.props.task;
    let content;

    content = (
      <TaskComponent
        task={task}
        handleEdit={this.editHandler}
        deleted={this.deleteHandler}
      />
    );

    if (this.state.isEdit) {
      content = (
        <EditComponet
          task={task}
          handleEdit={this.сhangeTaskHandler}
          configuration={this.state.configuration}
          changed={this.changeHandler}
          assignedHandler={this.assignedHandler}
          users={this.props.users}
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
    change: (title, description, id, assignedTo) =>
      dispatch(changeTask(title, description, id, assignedTo)),
    delete: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
