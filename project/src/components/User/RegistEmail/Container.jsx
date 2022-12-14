import RegistComp from "./Comp";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../modules/userDB";
// action 만든 곳

const RegistContainer = () => {
  const dispatch = useDispatch();
  const userFirstName = useSelector((state) => state.userDB.userFirstName);
  const userLastName = useSelector((state) => state.userDB.userLastName);
  const onClick = (userEmail, userPw) => {
    dispatch(
      action.registemail(userEmail, userPw, userFirstName, userLastName)
    );
    // express server 연결
    // axios.post("http://localhost:8080/api/user/regist", {
    //   userId,
    //   userPw,
    //   userName,
    // });
  };

  return <RegistComp onClick={onClick} />;
};

export default RegistContainer;
