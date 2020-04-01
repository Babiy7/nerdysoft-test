import React from "react";
import classes from "./App.module.scss";

import { Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth/Auth";
import Tasks from "./components/Sections/Tasks/Tasks";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Route path="/" exact component={Tasks} />
        <Route path="/auth" component={Auth} />
      </Layout>
    </div>
  );
}

export default App;
