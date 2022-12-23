import { useEffect, useState } from "react";
import styled from "styled-components";

const PriceComp = ({ price, num, check, account, setAccount }) => {
  return <>{check ? price * num : price * 1}</>;
};
export default PriceComp;
