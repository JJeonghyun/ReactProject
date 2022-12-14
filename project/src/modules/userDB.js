// 회원가입한 유저들의 정보
const TYPE = {
  NAME: "userDB/regist",
  EMAIL: "userDB/registemail",
};

const regist = (userLastName, userFirstName) => {
  return {
    type: TYPE.NAME,
    payload: { userLastName, userFirstName },
  };
};

const registemail = (userEmail, userPw) => {
  return {
    type: TYPE.EMAIL,
    payload: { userEmail, userPw },
  };
};

export const action = { regist, registemail };

export const initialize = { userDB: [] };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.NAME:
      if (state.find((item) => item.userFirstName === payload.userFirstName))
        return state;
      else return [...state, { ...payload }];
    case TYPE.EMAIL:
      if (state.find((item) => item.userFirstName === payload.userEmail))
        return state;

    // if (state.find((item) => item.userEmail === payload.userEmail))
    //   return state;
    // else {
    //   console.log(payload);
    //   return [...state, ...payload];
    // }
    default:
      return state;
  }
};
