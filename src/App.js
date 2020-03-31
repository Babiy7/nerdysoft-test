import React from "react";
import classes from "./App.module.scss";

import Auth from "./containers/Auth/Auth";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Auth />
      </Layout>
    </div>
  );
}

export default App;
