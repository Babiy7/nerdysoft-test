import React, { useState } from "react";
import classes from "./Layout.module.scss";

import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";

// import { connect } from "react-redux";

const Layout = props => {
  const [open, setOpen] = useState(false);

  function sideDrawerToggleHandler() {
    setOpen(!open);
  }

  return (
    <div className={classes.Layout}>
      {props.isAuth ? (
        <>
          <Toolbar clicked={sideDrawerToggleHandler} open={open} />
        </>
      ) : null}

      <main className={classes.Main}>{props.children}</main>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     isAuth: state.authStore.token !== null
//   };
// };

export default Layout;
