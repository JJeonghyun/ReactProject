import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import LogInComp from "./Comp";
import { action } from "../../../modules/userInfo";
import store from "../../../modules/store";
// import axios from "axios";

const LogInContainer = ({ userName }) => {
  const navigate = useNavigate();

  const onClick = (userId, userPw) => {
    store.dispatch(action.logIn(userId, userPw, store.getState().userDB));

    // axios.post("http://localhost:8080/api/user/login", {
    //   userId,
    //   userPw,
    // });
  };

  useEffect(() => {
    if (userName) navigate("");
  }, [userName]);

  return <LogInComp onClick={onClick} />;
};

// 로그아웃 시 Home으로 링크 연결하기 위한 작업
const mapStateToProps = (state, props) => {
  return {
    userName: state.userInfo.userName,
  };
};

export default connect(mapStateToProps)(LogInContainer);
