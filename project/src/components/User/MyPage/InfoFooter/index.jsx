import styled from "styled-components";

const InfoFooter = () => {
  return (
    <InfoFooterBox>
      <div className="firstText">
        <span>JJJJ © 2022</span>
        <span>개인정보 처리방침 및 법적고지</span>
      </div>
      <div className="secondText">
        <span>소녀시대 유한회사</span> |{" "}
        <span>사업자등록번호 : 123-44-00567</span> |{" "}
        <span>통신판매업신고: JJJJ</span>
      </div>
    </InfoFooterBox>
  );
};

export default InfoFooter;

const InfoFooterBox = styled.div`
  text-align: center;
  font-size: 13px;
`;
