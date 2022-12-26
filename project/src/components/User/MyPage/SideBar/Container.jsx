import axios from "axios";
import { useNavigate } from "react-router-dom";

import SideBarComp from "./Comp";

const SideBarContiner = () => {
  const navigate = useNavigate();
  const logOut = () => {
    try {
      axios
        .get("http://localhost:8080/api/user/logout")
        .then((data) => {
          navigate("/");
        })
        .then(() => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };
  return <SideBarComp logOut={logOut} />;
};

export default SideBarContiner;
