export const updatedObject = (state, newValues) => ({ ...state, ...newValues });

export const updatedState = (configuration, task) => {
  return {
    configuration: {
      title: {
        ...configuration.title,
        elementConfig: {
          ...configuration.title.elementConfig,
          value: task.title,
        },
      },
      description: {
        ...configuration.description,
        elementConfig: {
          ...configuration.description.elementConfig,
          value: task.description,
        },
      },
    },
  };
};

export const validation = (value, rules) => {
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
  }

  if (rules.type === "email") {
    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && isValid;
  }

  if (rules.type === "password") {
    isValid = value.length >= 6 && isValid;
  }

  return isValid;
};

// if user exist returns true
export function isRegister(user1, user2) {
  if (user1.email !== user2.email) {
    return false;
  }

  if (user1.password !== user2.password) {
    return false;
  }

  return true;
}

// if user exist returns true
export function authOperation(user, users = [], isCorectData) {
  for (let i = 0; i < users.length; i++) {
    const registerUser = users[i];

    if (isCorectData(user, registerUser)) {
      return true;
    }
  }

  return false;
}
