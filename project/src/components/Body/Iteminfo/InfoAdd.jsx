import styled from "styled-components";
const InfoAdd = () => {
  return (
    <MainBox>
      <div>
        <h5>상세 정보</h5>
      </div>

      <div>
        <h5>상세설명:</h5>
        König CG-9 103 스노우 체인은 눈이 많이 오는 조건에서 탁월한 트랙션, 주행
        편의성 및 성능을 제공합니다. 설치가 쉽고 특허받은 꼼꼼한 통제 시스템을
        통과해 완벽한 자가탄성이 가능한 체인과 뛰어난 트랙션을 제공합니다.
        Tesla가 제조한 Model 3 18인치 및 19인치 휠과 Tesla가 승인한 18인치 및
        19인치 타이어에 사용하도록 승인됐습니다.
      </div>
      <div>
        <h5>
          ※ 주의: 체인은 Model 3의 후면 휠에만 장착해야 하며, 18인치 및 19인치
          타이어에만 장착해야 합니다. 권장되지 않는 스노우 체인을 사용할 경우
          서스펜션 및 기타 차량 손상이 발생할 수 있습니다.
        </h5>
      </div>

      <div>
        <h5>구성:</h5>
        <li>1 x 2개 바퀴를 위한 1 세트</li>
        <li>1 x 수납 파우치</li>
      </div>
    </MainBox>
  );
};

export default InfoAdd;

const MainBox = styled.div`
  font-size: 0.9rem;
  > div > h5 {
    font-size: 1rem;
    font-weight: bold;
  }
  > div {
    margin-bottom: 30px;
  }
`;