// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userId, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userId, userPw, userDB },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };

export const initialize = { userId: "", userName: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGIN:
      const tempUser = payload.userDB.find(
        (item) => item.userId === payload.userId
      );
      if (tempUser && tempUser.userPw === payload.userPw)
        return { userId: tempUser.userId, userName: tempUser.userName };
      else return state;

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
