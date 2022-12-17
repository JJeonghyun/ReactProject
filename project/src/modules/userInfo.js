// 로그인한 유저의 정보
const TYPE = {
  LOGINEMAIL: "userInfo/loginEmail",
  LOGINPW: "userInfo/loginPw",
  LOGOUT: "userInfo/logout",
};

const logInEmail = (logEmail) => ({
  type: TYPE.LOGINEMAIL,
  payload: { logEmail },
});
const logInPw = (logPw, userList) => ({
  type: TYPE.LOGINPW,
  payload: { logPw, userList },
});

const logOut = () => ({
  type: TYPE.LOGOUT,
});

export const action = { logInEmail, logInPw, logOut };

export const initialize = { logEmail: "", logPw: "", logName: "" };

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;

  switch (type) {
    case TYPE.LOGINEMAIL:
      const { logEmail } = payload;
      return { ...state, logEmail };

    case TYPE.LOGINPW:
      const { userList } = payload;
      let tempArr = [];
      tempArr = userList.filter((item) => item.userEmail == state.logEmail);
      return {
        ...state,
        logEmail: tempArr[0].userEmail,
        logPw: tempArr[0].userPw,
        logName: tempArr[0].userLastName + tempArr[0].userFirstName,
      };

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
