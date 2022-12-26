import axios from "axios";

import HiddenMenuComp from "./Comp";
let tempUser = undefined;

const HiddenMenuContainer = () => {
  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
  }
  const logOut = async () => {
    try {
      await axios.get("http://localhost:8080/api/user/logout").then((data) => {
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <HiddenMenuComp tempUser={tempUser} logOut={logOut} />;
};

export default HiddenMenuContainer;
