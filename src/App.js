import React, { useEffect } from "react";
import classes from "./App.module.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { isLogin } from "./redux/actions/auth";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import Tasks from "./components/Sections/Tasks/Tasks";
import CreateTask from "./containers/CreateTaskContainer/CreateTaskContainer";

function App(props) {
  useEffect(() => {
    props.isAuth();
  }, []);

  return (
    <div className={classes.App}>
      <Layout>
        <Route path="/" exact component={Tasks} />
        <Route path="/my-tasks">
          <Tasks myTasks />
        </Route>
        <Route path="/create" component={CreateTask} />
        <Route path="/auth" component={Auth} />
        <Route path="/logout" component={Logout} />
      </Layout>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    isAuth: () => dispatch(isLogin()),
  };
};

export default connect(null, mapDispatchToProps)(App);
