import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <div>JJJJ © 2022</div>
      <div>개인정보 처리방침 및 법적고치</div>
      <div>위치</div>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  color: black;
  @media screen and (max-width: 386px) {
    & > div {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 305px) {
    & > div {
      font-size: 0.6rem;
    }
  }
`;
