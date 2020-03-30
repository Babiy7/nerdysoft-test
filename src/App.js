import React from "react";
import classes from "./App.module.scss";

import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <div className={classes.App}>
      <Auth />
    </div>
  );
}

export default App;
