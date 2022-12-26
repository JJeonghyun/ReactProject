import "./dropdown.css";
import { useEffect } from "react";
import styled from "styled-components";
const ClothesDropdown = ({ hover, setHover, onClick }) => {
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
      id="clothesBox"
      onMouseOver={() => {
        setHover("clothes");
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <Fbox>
        <Fvbox
          onClick={() => {
            onClick();
          }}
        >
          <div className="itemLinkAcc">남성</div>
          <div>티</div>
          <div>스웨트셔츠 & 후디</div>
          <div>재킷</div>
          <div>모자</div>
        </Fvbox>
        <Fvbox
          onClick={() => {
            onClick();
          }}
        >
          <div className="itemLinkAcc">여성</div>
          <div>스웨트셔츠 & 후디</div>
          <div>재킷</div>
          <div>모자</div>
        </Fvbox>
      </Fbox>
      <Vbox>
        <ImgZone>{/* <img src="/imgs/wallConnect1.png" /> */}</ImgZone>

        <ImgName>남성용 Cybertruck Owl 티셔츠</ImgName>
      </Vbox>
    </div>
  );
};

export default ClothesDropdown;

const Fbox = styled.div`
  display: flex;
  width: 60%;
`;
const Fvbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-left: 25px;
  > div {
    margin-left: 25px;
    margin-top: 10px;
    width: 100%;
    cursor: pointer;
  }
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
  background-image: url("/imgs/tshirt1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-scale: 1.2;
  height: 300px;
`;
