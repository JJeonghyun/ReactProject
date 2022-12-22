import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RightComp from "./Comp";

let tempUser = undefined;
const RightContainer = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [checkPath, setPath] = useState("/");
  const location = useLocation();

  if (document.cookie) {
    tempUser = JSON.parse(
      window.atob(document.cookie.split("=")[1]?.split(".")[1])
    );
  }
  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);
  const onClick = () => {
    setIsSearch(!isSearch);
  };

  return (
    <RightComp
      isSearch={isSearch}
      onClick={onClick}
      tempUser={tempUser}
      checkPath={checkPath}
    />
  );
};

export default RightContainer;
