const TYPE = {
  FORGOT: "userDB/forgotEmail",
};

const forgot = (forgotEmail, userList) => {
  return {
    type: TYPE.FORGOT,
    payload: { forgotEmail, userList },
  };
};

export const action = { forgot };

export const initialize = { forgotEmail: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.FORGOT: {
      const { forgotEmail, userList } = payload;
      userList.forEach((item) => {
        if (item.userList == forgotEmail) {
          return [...state, forgotEmail];
        }
      });
    }
    default:
      return state;
  }
};
