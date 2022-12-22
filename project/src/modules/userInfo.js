// 로그인한 유저의 정보
const TYPE = {
  LOGINEMAIL: "userInfo/loginEmail",
  LOGINPW: "userInfo/loginPw",
  LOGOUT: "userInfo/logout",
};

const logInEmail = (logEmail, userList) => ({
  type: TYPE.LOGINEMAIL,
  payload: { logEmail, userList },
});
const logInPw = (logPw, userList) => ({
  type: TYPE.LOGINPW,
  payload: { logPw, userList },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logInEmail, logInPw, logOut };

export const initialize = { logEmail: "", logPw: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGINEMAIL:
      const { logEmail } = payload;
      if (state.logEmail === logEmail) {
        return state;
      } else {
        return { ...state, logEmail };
      }

    case TYPE.LOGINPW:
      const { logPw, userList } = payload;

      if (state.logEmail === "admin@jjjj.com" && logPw === "jjjj") {
        return { logEmail: "admin@jjjj.com", logPw: "jjjj" };
      } else {
        if (state.logPw === logPw) {
          return state;
        } else {
          userList.forEach((item) => {
            if (item.userEmail === state.logEmail) {
              return { ...state, logPw };
            }
          });
          return state;
        }
      }

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
