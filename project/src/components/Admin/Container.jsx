import AdminComponent from "./Comp";
import { useState } from "react";

const AdminContainer = () => {
  const [tempSrc, setSrc] = useState("");
  const [tempSrcHover, setSrcHover] = useState("");
  const [check, setCheck] = useState(false);
  const [checkHover, setCheckHover] = useState(false);

  const setImg = (input) => {
    if (input.files && input.files[0]) {
      let readImg = new FileReader();
      let readHoverImg = new FileReader();

      readImg.onload = (e) => {
        setSrc(e.target.result);
        setCheck(true);
      };
      readHoverImg.onload = (e) => {
        setSrcHover(e.target.result);
        setCheckHover(true);
      };
      readImg.readAsDataURL(input.files[0]);
      readHoverImg.readAsDataURL(input.files[1]);
    }
  };
  const preveiwImg = (e) => {
    setImg(e.target);
  };
  return (
    <AdminComponent
      setImg={setImg}
      preveiwImg={preveiwImg}
      tempSrc={tempSrc}
      tempSrcHover={tempSrcHover}
      check={check}
      setCheck={setCheck}
      checkHover={checkHover}
      setCheckHover={setCheckHover}
    />
  );
};
export default AdminContainer;
