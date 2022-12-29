import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import OneItem from "./OneItem";
import "./comp.css";
const PriceBoardComp = () => {
  const [item, setItem] = useState([
    {
      name: "Model Y",
      dif: 70,
      per: 20.22,
      total: 111,
      krw: "KSJ/KRW",
      price: 10423,
      state: 1,
    },
    {
      name: "Model S",
      dif: 20,
      per: 0.12,
      total: 12,
      krw: "KYJ/KRW",
      price: 14851,
      state: 1,
    },
    {
      name: "Model 3",
      dif: 30,
      per: 0.2,
      total: 53,
      krw: "LJH/KRW",
      price: 3090,
      state: 1,
    },
    {
      name: "Model X",
      dif: 710,
      per: 22,
      total: 932,
      krw: "JJH/KRW",
      price: 514821,
      state: 1,
    },
  ]);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, []);
  }

  function AddData() {
    item.map((state, index) => {
      const updown = plusMius() ? 1 : -1;
      state.state = updown;
      const random = randomNum();
      if (random == 0) {
        state.state = 0;
      }
      state.price = state.price + random * updown;
    });
    setItem([...item]);
  }

  const randomNum = function () {
    let random = parseInt(Math.random() * 100);
    if (random % 11 == 0) {
      random *= 100;
    } else if (random % 2 == 0 || random % 3 == 0) {
      random = 0;
    }
    return random;
  };

  const plusMius = function () {
    const random = parseInt(Math.random() * 10);
    return random % 2 == 0 ? true : false;
  };

  useInterval(AddData, 1000);

  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => {}}>원화</Th>
            <Th>$</Th>
            <Th>보유</Th>
            <Th>관심</Th>
          </tr>
        </thead>

        <tbody>
          <tr className="tableCategory">
            <td>
              <TableCategory>
                <RelativeDiv>한글명</RelativeDiv>
                <RelativeDiv>
                  →<AbsoluteDiv>←</AbsoluteDiv>
                </RelativeDiv>
              </TableCategory>
            </td>
            <td>
              <TableCategory>
                <RelativeDiv>현재가</RelativeDiv>
                <RelativeDivUpdown>
                  ▲<AbsoluteDivUpdown>▼</AbsoluteDivUpdown>
                </RelativeDivUpdown>
              </TableCategory>
            </td>
            <td>
              <TableCategory>
                <RelativeDiv>전일대비</RelativeDiv>
                <RelativeDivUpdown>
                  ▲<AbsoluteDivUpdown>▼</AbsoluteDivUpdown>
                </RelativeDivUpdown>
              </TableCategory>
            </td>
            <td>
              <TableCategory>
                <RelativeDiv>거래대금</RelativeDiv>
                <RelativeDivUpdown>
                  ▲<AbsoluteDivUpdown>▼</AbsoluteDivUpdown>
                </RelativeDivUpdown>
              </TableCategory>
            </td>
          </tr>
          <OneItem item={item[0]} />
          <OneItem item={item[1]} />
          <OneItem item={item[2]} />
          <OneItem item={item[3]} />
        </tbody>
      </Table>
    </>
  );
};
export default PriceBoardComp;

const Th = styled.th`
  border: 1px solid black;
  width: 11%;
`;

const FvBox = styled.div`
  flex-direction: column;
  line-height: -50px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const TableCategory = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  opacity: 0.7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 1rem;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  overflow: scroll;
`;

const RelativeDiv = styled.div`
  position: relative;
  margin-left: 0.1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 10%;
`;

const RelativeDivUpdown = styled.div`
  position: relative;
  margin-left: 0.1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 10%;

  font-size: 0.1rem;
  scale: 0.6;
`;

const AbsoluteDiv = styled.div`
  position: absolute;
  top: 5px;
`;
const AbsoluteDivUpdown = styled.div`
  position: absolute;
  top: 10px;
`;
