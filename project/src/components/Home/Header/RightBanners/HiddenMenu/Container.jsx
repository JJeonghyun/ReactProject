import axios from "axios";

import HiddenMenuComp from "./Comp";

const HiddenMenuContainer = () => {
  let tempUser = "";
  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
  }

  const logOut = async () => {
    try {
      await axios.get("http://localhost:8080/api/user/logout").then((data) => {
        if (tempUser) window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <HiddenMenuComp tempUser={tempUser} logOut={logOut} />;
};

export default HiddenMenuContainer;
