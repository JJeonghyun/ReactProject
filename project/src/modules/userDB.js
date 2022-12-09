// 회원가입한 유저들의 정보
const TYPE = {
  REGIST: "userDB/regist",
};

const regist = (userLastName, userFirstName, userId, userPw) => {
  return {
    type: TYPE.REGIST,
    payload: { userLastName, userFirstName, userId, userPw },
  };
};

export const action = { regist };

export const initialize = { userDB: [] };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      if (state.find((item) => item.userId === payload.userId)) return state;
      else return [...state, payload];
    default:
      return state;
  }
};
