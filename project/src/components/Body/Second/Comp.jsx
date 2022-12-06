import styled from "styled-components";

const SecondComp = () => {
  return (
    <SecondBox>
      <div>
        <div>베스트 셀러</div>
        <div>모든 상품</div>
      </div>
      <div>
        <div>
          <div>
            <div>
              <img src="/imgs/secondImg1.jpg" alt="" />
            </div>
            <div>이미지 제목</div>
          </div>
          <div>
            <div>
              <img src="/imgs/secondImg1.jpg" alt="" />
            </div>
            <div>이미지 제목</div>
          </div>
          <div>
            <div>
              <img src="/imgs/secondImg1.jpg" alt="" />
            </div>
            <div>이미지 제목</div>
          </div>
        </div>
      </div>
    </SecondBox>
  );
};
export default SecondComp;

const SecondBox = styled.div`
  width: 100%;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 30px 5px;
    & > div:first-child {
      font-size: 1.7rem;
    }
  }
  & > div:last-child > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    & > div {
      width: 33.3%;
      padding: 10px;
      & > div:first-child {
        width: 100%;
        & > img {
          width: 100%;
        }
      }
    }
  }
`;
