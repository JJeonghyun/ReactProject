import { useState } from "react";
import RightComp from "./Comp";
const RightContainer = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState("");

  const onClick = () => {
    setIsSearch(!isSearch);
    // setIsSearch((state)=> !state);
  };

  return <RightComp isSearch={isSearch} onClick={onClick} />;
};

export default RightContainer;
