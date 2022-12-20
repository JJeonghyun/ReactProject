// 회원가입한 유저들의 정보
const TYPE = {
  NAME: "userDB/regist",
  EMAIL: "userDB/registemail",
};

const regist = (userFirstName, userLastName) => {
  return {
    type: TYPE.NAME,
    payload: { userFirstName, userLastName },
  };
};

const registemail = (userFirstName, userLastName, userEmail, userPw) => {
  return {
    type: TYPE.EMAIL,
    payload: { userFirstName, userLastName, userEmail, userPw },
  };
};

export const action = { regist, registemail };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.NAME: {
      const { userFirstName, userLastName } = payload;
      if (state.userDB?.find((item) => item.userFirstName === userFirstName)) {
        return state;
      } else return [...state, { userFirstName, userLastName }];
    }
    case TYPE.EMAIL: {
      const { userEmail, userPw } = payload;
      if (state.userDB?.find((item) => item.userEmail === userEmail))
        return state;
      else {
        let tempArr = [...state];
        return tempArr.map((item) => ({ ...item, userEmail, userPw }));
      }
    }
    default:
      return state;
  }
};
