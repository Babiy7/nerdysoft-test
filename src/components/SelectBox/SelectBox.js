import React, { useState, useEffect } from "react";
import classes from "./SelectBox.module.scss";

const SelectBox = (props) => {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    setSelectedItem(props.select.task.createdBy);
  }, []);

  console.log(props.select);

  return (
    <div className={classes.Item} onClick={() => setShowItems(!showItems)}>
      <div className={classes.Main}>
        {selectedItem}
        <div className={classes.ArrowContainer}>
          <div
            className={classes.Arrow}
            style={{ transform: showItems ? "rotate(180deg)" : "rotate(0deg)" }}
          ></div>
        </div>
      </div>

      {showItems ? (
        <div className={classes.List}>
          <div className={classes.Users}>
            {props.select.users.map((user) => {
              const email = user.email;
              return (
                <div
                  key={email}
                  className={classes.User}
                  onClick={() => setSelectedItem(email)}
                >
                  {email}
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectBox;
