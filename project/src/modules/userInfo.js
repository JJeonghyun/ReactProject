// 로그인한 유저의 정보
const TYPE = {
  LOGIN: "userInfo/login",
  LOGOUT: "userInfo/logout",
};

const logIn = (userEmail, userPw, userDB) => ({
  type: TYPE.LOGIN,
  payload: { userEmail, userPw, userDB },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logIn, logOut };

export const initialize = { userEmail: "", userName: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGIN:
      const tempUser = payload.userDB.find(
        (item) => item.userEmail === payload.userEmail
      );
      if (tempUser && tempUser.userPw === payload.userPw)
        return { userEmail: tempUser.userEmail, userName: tempUser.userName };
      else return state;

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
