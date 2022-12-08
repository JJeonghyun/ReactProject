import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <div>Tesla © 2022</div>
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
`;
