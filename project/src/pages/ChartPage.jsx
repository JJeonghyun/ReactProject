import Header from "../components/Home/Header";
import ChartContainer from "../components/Chart";
import Footer from "../components/Home/Footer";
import styled from "styled-components";
const ChartPage = () => {
  return (
    <>
      <BlackBox>
        <Header />
        <ChartContainer />
        <Footer />
      </BlackBox>
    </>
  );
};
export default ChartPage;

const BlackBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
`;
