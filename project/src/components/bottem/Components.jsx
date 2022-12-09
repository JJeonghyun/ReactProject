import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <span>Tesla 2022</span>
      <span>개인정보 처리방침 및 법적고지</span>
      <span>위치</span>
    </Foot>
  );
};
export default Footer;

const Foot = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  > span {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 7px;
  }
`;
