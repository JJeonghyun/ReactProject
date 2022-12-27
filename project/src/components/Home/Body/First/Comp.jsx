import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

import "bootstrap/dist/css/bootstrap.min.css";

const FirstComp = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/mainImg1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <SlideTextTitle>월 커넥터</SlideTextTitle>
            <SlideText>집에서 충전하는 가장 빠른 방법</SlideText>
            <div>지금쇼핑하기</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/imgs/mainImg2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <SlideTextTitle>Model Y 사계절 인테리어 매트</SlideTextTitle>
            <SlideText>사계절 깨끗한 실내</SlideText>
            <div>지금쇼핑하기</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default FirstComp;

const SlideTextTitle = styled.div`
  font-size: 2.5rem;
  @media only screen and (max-width: 815px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 655px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 490px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 356px) {
    font-size: 12px;
  }
`;

const SlideText = styled.div`
  font-size: 1rem;
  @media only screen and (max-width: 815px) {
    font-size: 0.6rem;
  }
  @media only screen and (max-width: 490px) {
    font-size: 0.5rem;
  }
  @media only screen and (max-width: 490px) {
    font-size: 10px;
  }
`;
