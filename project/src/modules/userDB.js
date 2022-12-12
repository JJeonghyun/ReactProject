// 회원가입한 유저들의 정보
const TYPE = {
  REGISTNAME: "userDB/regist",
  REGISTEMAIL: "userDB/registemail",
};

const regist = (userLastName, userFirstName) => {
  return {
    type: TYPE.REGISTNAME,
    payload: { userLastName, userFirstName },
  };
};

const registemail = (userEmail, userPw) => {
  return {
    type: TYPE.REGISTEMAIL,
    payload: { userEmail, userPw },
  };
};

export const action = { regist, registemail };

export const initialize = { userDB: [] };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userFirstName === payload.userFirstName))
        return state;
      else return [...state, payload];
    case TYPE.REGISTEMAIL:
      if (state.find((item) => item.userEmail === payload.userEmail))
        return state;
      else return [...state, payload];
    default:
      return state;
  }
};
