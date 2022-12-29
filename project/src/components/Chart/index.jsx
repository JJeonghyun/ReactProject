import styled from "styled-components";
import PieChartContainer from "./PieChart/Container";
import BarChartContainer from "./BarChart/Container";
import CoinChartContainer from "./CoinChart/Container";
import TreeChartContainer from "./TreeChart/Container";
import PriceBoardContainer from "./PriceBoard/Container";
import "./chartPage.css";
const ChartContainer = () => {
  return (
    <>
      <MainBox>
        <video muted autoPlay loop className="back">
          <source src="./mp4/Back.mp4" type="video/mp4" />
        </video>
        <CombineBox>
          <TempDivF>
            <TempDiv7>
              <Title>실시간 asd 판매비율</Title>
              <div>
                <CategoryBtn>Model Y</CategoryBtn>
                <CategoryBtn>Model S</CategoryBtn>
                <CategoryBtn>Model 3</CategoryBtn>
                <CategoryBtn>Model X</CategoryBtn>
              </div>
              <CoinChartContainer />
            </TempDiv7>
            <TempDiv3>
              <Title>실시간 Model 판매비율</Title>
              <PriceBoardContainer style={{ overflow: "auto" }} />
            </TempDiv3>
          </TempDivF>
          <TempDivF>
            <TempDiv3>
              <Title>실시간 Model 판매비율</Title>
              <BarChartContainer />
            </TempDiv3>
            <TempDiv3>
              <Title>실시간 Model 판매비율</Title>

              <TreeChartContainer />
            </TempDiv3>
            <TempDiv3>
              <Title>실시간 Model 판매비율</Title>
              <PieChartContainer />
            </TempDiv3>
          </TempDivF>
        </CombineBox>
      </MainBox>
    </>
  );
};

export default ChartContainer;

const MainBox = styled.div`
  display: flex;
  width: 100%;
  padding: 45px;
  padding-top: 50px;

  flex-direction: column;
  background-color: black;
  background-image: url("./mp4/Back.mp4");
  position: relative;
`;

const TempDiv = styled.div``;

const TempDivF = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5vh;
`;

const TempDiv7 = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
`;

const TempDiv3 = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 30%;
`;

const Title = styled.span`
  text-align: center;
`;

const CategoryBtn = styled.button`
  background-color: rgba(110, 110, 110, 0.5);

  border: 1px solid white;
  color: white;
`;

const CombineBox = styled.div`
  position: absolute;
  width: 95%;
  padding: 30px 20px 0px 20px;
`;
