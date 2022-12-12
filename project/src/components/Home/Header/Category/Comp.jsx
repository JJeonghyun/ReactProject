import "./dropdown.css";
import ChargeDropDown from "./ChargeDropDown";
import AccessoriesDropDown from "./AccessoriesDropDown";
import ClothesDropdown from "./ClothesDropdown";
import { useEffect, useState } from "react";
import styled from "styled-components";
const CategoryComp = ({ scroll }) => {
  // document.getElementsByClassName("dropdown")[0].style.color = "blue";
  const [hover, setHover] = useState("");
  const dropdown = document.getElementsByClassName("dropdownContent")[0];

  // document.getElementById("chargeBox").style.display = "none";

  useEffect(() => {
    // if (document.getElementById(hover + "Box"))
    //   document.getElementById(hover + "Box").style.display = "flex";
    // else {
    //   document.getElementById("chargeBox").style.display = "none";
    //   document.getElementById("accessoriesBox").style.display = "none";
    //   document.getElementById("clothesBox").style.display = "none";
    // }

    switch (hover) {
      case "charge":
        dropdown.style.display = "block";
        document.getElementById("chargeBox").style.display = "flex";
        document.getElementById("accessoriesBox").style.display = "none";
        document.getElementById("clothesBox").style.display = "none";

        break;
      case "accessories":
        dropdown.style.display = "block";

        document.getElementById("chargeBox").style.display = "none";
        document.getElementById("accessoriesBox").style.display = "flex";
        document.getElementById("clothesBox").style.display = "none";

        break;
      case "clothes":
        dropdown.style.display = "block";

        document.getElementById("chargeBox").style.display = "none";
        document.getElementById("accessoriesBox").style.display = "none";
        document.getElementById("clothesBox").style.display = "flex";
        break;
      default:
        document.getElementById("chargeBox").style.display = "none";
        document.getElementById("accessoriesBox").style.display = "none";
        document.getElementById("clothesBox").style.display = "none";
        break;
    }
  }, [hover]);

  return (
    <div className="container">
      <div
        className="dropdown"
        onMouseLeave={() => {
          setHover("");
        }}
      >
        <div
          className="charge"
          onMouseOver={() => {
            setHover("");
            setHover("charge");
          }}
        >
          충전
        </div>

        <div
          className="accessories"
          onMouseOver={() => {
            setHover("");

            setHover("accessories");
          }}
        >
          차량 악세사리
        </div>

        <div
          className="clothes"
          onMouseOver={() => {
            setHover("");

            setHover("clothes");
          }}
        >
          의류
        </div>
        <div>라이프스타일</div>
        <div>서비스 설치</div>
      </div>
      <div className="dropdownContent">
        <div id="oneItem">
          <ChargeDropDown hover={hover} setHover={setHover} />
          <AccessoriesDropDown hover={hover} setHover={setHover} />
          <ClothesDropdown hover={hover} setHover={setHover} />
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
