import "./dropdown.css";
import { useEffect } from "react";
import styled from "styled-components";
const ChargeDropDown = ({ hover, setHover }) => {
  // document.getElementsByClassName("dropdown")[0].style.color = "blue";

  useEffect(() => {
    if (document.getElementById(hover + "Box"))
      document.getElementById(hover + "Box").style.display = "flex";
    else {
      document.getElementById("chargeBox").style.display = "none";
      document.getElementById("accessoriesBox").style.display = "none";
      document.getElementById("clothesBox").style.display = "none";
    }
  }, [hover]);
  return (
    <div
      id="chargeBox"
      onMouseOver={() => {
        setHover("charge");
        console.log(hover);
      }}
      onMouseLeave={() => {
        setHover("");
        console.log("2");
      }}
    >
      <Fbox>
        <div className="itemLink">
          <a href="#">집에서 충전하기</a>
        </div>
        <div className="itemLink">운전 중 잠시 충전하기</div>
        <div className="itemLink">파츠</div>
      </Fbox>
      <Vbox>
        <ImgZone>{/* <img src="/imgs/wallConnect1.png" /> */}</ImgZone>

        <ImgName>월 커넥터</ImgName>
      </Vbox>
    </div>
  );
};

export default ChargeDropDown;

const Fbox = styled.div`
  display: flex;
  width: 60%;
`;
const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const ImgName = styled.span`
  padding: 15px;
  text-align: center;
  font-size: 1.4rem;
`;

const ImgZone = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  align-items: center;
  display: flex;
  justify-content: center;
  background-image: url("/imgs/wallConnect1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-scale: 1.2;
  height: 300px;
`;