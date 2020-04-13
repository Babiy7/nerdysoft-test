import React, { useState, useEffect } from "react";
import classes from "./SelectBox.module.scss";

const SelectBox = (props) => {
  const [showItems, setShowItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    if (props.task) {
      setSelectedItem(props.task.assignedTo);
    } else {
      setSelectedItem("no assigment");
    }
  }, []);

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
            {props.users.map((user) => {
              const email = user.email;
              return (
                <div
                  key={email}
                  className={classes.User}
                  style={{
                    backgroundColor: email === selectedItem ? "#f2f2f2" : "",
                  }}
                  onClick={() => {
                    setSelectedItem(email);
                    props.assignedHandler(email);
                  }}
                >
                  {email}
                </div>
              );
            }) || null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SelectBox;
