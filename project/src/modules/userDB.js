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

const registemail = (userEmail, userPw, userFirstName, userLastName) => {
  return {
    type: TYPE.EMAIL,
    payload: { userEmail, userPw, userFirstName, userLastName },
  };
};

export const action = { regist, registemail };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.NAME: {
      const { userFirstName, userLastName } = payload;
      let tempArr = [...state];
      tempArr = [{ userFirstName, userLastName }];
      return tempArr;
    }
    case TYPE.EMAIL: {
      const { userEmail, userPw, userFirstName, userLastName } = payload;
      let tempArr = [
        ...state,
        { userEmail, userPw, userFirstName, userLastName },
      ];
      return tempArr;
    }
    default:
      return state;
  }
};
