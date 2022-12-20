import styled from "styled-components";

export const Boxbox = styled.div`
  width: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    padding-bottom: calc(
      100% *
        ${({ ratio, width, height }) => {
          if (ratio) {
            return ratio;
          } else {
            const nowWidth = width ? +width : 1;
            const nowHeight = height ? +height : 1;
            return nowHeight / nowWidth;
          }
        }}
    );
  }
  & > * {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;
// 모듈화 한다. class 랑 비슷?  라이브러리 같은 거 == 모듈
