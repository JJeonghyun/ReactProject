import "./dropdown.css";
import ChargeDropDown from "./ChargeDropDown";
import AccessoriesDropDown from "./AccessoriesDropDown";
import ClothesDropdown from "./ClothesDropdown";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sweet from "sweetalert2";

const CategoryComp = ({ scroll, commingSoon }) => {
  const [hover, setHover] = useState("");
  const dropdown = document.getElementsByClassName("dropdownContent")[0];

  useEffect(() => {
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
          <Link to={"/charge"}>충전</Link>
        </div>

        <div
          className="accessories"
          onMouseOver={() => {
            setHover("");

            setHover("accessories");
          }}
        >
          <Link to={"/acc"}>차량 악세사리</Link>
        </div>

        <div
          className="clothes"
          onMouseOver={() => {
            setHover("");

            setHover("clothes");
          }}
        >
          <Link to={"/clothes"}>의류</Link>
        </div>
        <div>
          <Link to={"/all"}>모든 상품</Link>
        </div>
      </div>
      <div className="dropdownContent">
        <div id="oneItem">
          <ChargeDropDown
            hover={hover}
            setHover={setHover}
            onClick={commingSoon}
          />
          <AccessoriesDropDown
            hover={hover}
            setHover={setHover}
            onClick={commingSoon}
          />
          <ClothesDropdown
            hover={hover}
            setHover={setHover}
            onClick={commingSoon}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryComp;
