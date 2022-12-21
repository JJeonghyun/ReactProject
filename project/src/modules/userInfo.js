// 로그인한 유저의 정보
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
      return { ...state, logEmail };

    case TYPE.LOGINPW:
      const { userList } = payload;
      console.log(userList);
      let tempArr = [];
      tempArr = userList.filter((item) => item.userEmail == state.logEmail);
      console.log(tempArr);
      return {
        ...state,
        logEmail: tempArr.length ? tempArr[0].userEmail : "admin@jjjj.com",
        logPw: tempArr.length ? tempArr[0].userPw : "jjjj",
        logName: tempArr.length
          ? tempArr[0].userLastName + tempArr[0].userFirstName
          : "administrator",
      };

    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
