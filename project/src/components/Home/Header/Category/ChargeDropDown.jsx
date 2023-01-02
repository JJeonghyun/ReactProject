import "./dropdown.css";
import { useEffect } from "react";
import styled from "styled-components";
const ChargeDropDown = ({ hover, setHover, onClick }) => {
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
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <Fbox>
        <div
          className="itemLink"
          onClick={() => {
            onClick();
          }}
        >
          집에서 충전하기
        </div>
        <div
          className="itemLink"
          onClick={() => {
            onClick();
          }}
        >
          운전 중 잠시 충전하기
        </div>
        <div
          className="itemLink"
          onClick={() => {
            onClick();
          }}
        >
          파츠
        </div>
      </Fbox>
      <Vbox>
        <ImgZone></ImgZone>

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
