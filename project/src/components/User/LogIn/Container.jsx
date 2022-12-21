import { useDispatch, useSelector } from "react-redux";

import LogInComp from "./Comp";
import { action } from "../../../modules/userInfo";
import axios from "axios";

const LogInContainer = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const userDB = useSelector((state) => state.userDB);

  console.log(userDB);

  const onClick = (logEmail) => {
    dispatch(action.logInEmail(logEmail));
  };

  return <LogInComp onClick={onClick} />;
};

export default LogInContainer;
