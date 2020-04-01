import React, { useEffect } from "react";
import classes from "./App.module.scss";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { isLogin } from "./redux/actions/auth";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Tasks from "./components/Sections/Tasks/Tasks";

function App(props) {
  useEffect(() => {
    props.isAuth();
  }, []);

  return (
    <div className={classes.App}>
      <Layout>
        <Route path="/" exact component={Tasks} />
        <Route path="/auth" component={Auth} />
      </Layout>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    isAuth: () => dispatch(isLogin())
  };
};

export default connect(null, mapDispatchToProps)(App);
