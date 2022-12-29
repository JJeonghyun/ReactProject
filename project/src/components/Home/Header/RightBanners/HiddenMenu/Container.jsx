import axios from "axios";
import { useNavigate } from "react-router-dom";

import HiddenMenuComp from "./Comp";
let tempUser = undefined;

const HiddenMenuContainer = ({ responWidth }) => {
  const navigate = useNavigate();
  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
  }
  const logOut = async () => {
    try {
      await axios.get("/api/user/logout").then((data) => {
        navigate("/");
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HiddenMenuComp
      tempUser={tempUser}
      logOut={logOut}
      responWidth={responWidth}
    />
  );
};

export default HiddenMenuContainer;
