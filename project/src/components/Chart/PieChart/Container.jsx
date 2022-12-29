import PieChartComp from "./Comp";
import styled from "styled-components";
const PieChartContainer = () => {
  return (
    <div>
      <PieChartComp />
    </div>
  );
};

export default PieChartContainer;

const MainBox = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  padding: 45px;
  > div:first-child {
    width: 65%;
  }

  > div:last-child {
    width: 35%;
  }
`;
