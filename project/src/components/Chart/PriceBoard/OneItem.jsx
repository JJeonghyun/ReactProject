import styled from "styled-components";
import "./comp.css";
const OneItem = ({ item }) => {
  return (
    <tr style={{ borderBottom: "0.5px solid rgba(255,255,255,0.6)" }}>
      <Td>
        <Vbox>
          <Fbox>
            <div>☆</div>
            <div>--</div>
            <div>{item.name}</div>
          </Fbox>
          <Fbox>
            <KRW>{item.krw}</KRW>
          </Fbox>
        </Vbox>
      </Td>
      <Td>
        <div
          className={
            item.state == 0
              ? "price"
              : item.state == 1
              ? "price up"
              : "price down"
          }
        >
          {item.price}
        </div>
      </Td>
      <Td>
        <div className="today">
          <div>{item.per}</div>
          <div>{item.dif}</div>
        </div>
      </Td>
      <Td>
        {item.total}
        <TotalSpan>백만</TotalSpan>
      </Td>
    </tr>
  );
};

export default OneItem;

const Td = styled.td`
  width: 16%;
  display: lnline-flexbox;
  text-align: right;
  justify-content: flex-end;
  position: relative;
`;
const Fbox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Vbox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
`;

const TotalSpan = styled.span`
  color: lightgray;
  font-size: 0.8rem;
`;
const KRW = styled.span`
  font-size: 0.6rem;
  color: lightgray;
`;
