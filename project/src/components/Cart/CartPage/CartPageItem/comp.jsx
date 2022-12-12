import styled from "styled-components";

const CartPageItem = ({ list, setList }) => {
  return (
    <>
      {list.map((item, index) => (
        <CartPageBox>
          <CartPageImg>
            <img src={item.img} />
          </CartPageImg>
          <CartPageName>
            <CartPageSearchName>{item.name}</CartPageSearchName>
            <CartPageNameBottom>
              <CartPageName>수량:</CartPageName>
              <CartPageNameSelect>
                <select>
                  <option value="">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </CartPageNameSelect>
              <CartPageNameDelete>
                <button
                  onClick={() => {
                    setList((list) => {
                      const before = list.slice(0, index);
                      const after = list.slice(index + 1);
                      return [...before, ...after];
                    });
                  }}
                >
                  삭제하기
                </button>
              </CartPageNameDelete>
            </CartPageNameBottom>
          </CartPageName>
          <CartPagePrice>₩{item.price}</CartPagePrice>
        </CartPageBox>
      ))}
    </>
  );
};
export default CartPageItem;

const CartPageImg = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  color: white;
  background-color: black;
  justify-content: center;
`;
const CartPageBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 550px;
  flex-wrap: wrap;
  margin-top: 30px;
`;
const CartPageName = styled.div`
  display: flex;
  flex-direction: column;
`;
const CartPageSearchName = styled.div`
  display: flex;
`;
const CartPagePrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CartPageNameBottom = styled.div`
  display: flex;
  width: 217px;
  padding: 2px;
  justify-content: space-around;
`;
const CartPageNameSelect = styled.div`
  display: flex;
  select {
    border: none;
  }
`;
const CartPageNameDelete = styled.div`
  display: flex;
  border-bottom: 1px solid black;
  padding: 3px;
  button {
    border: none;
  }
`;

{
  /* <CartPageBox>
        <CartPageImg>
          <img src={list[0].img} alt="asd" />
        </CartPageImg>
        <CartPageName>
          <CartPageSearchName>{list[0].name}</CartPageSearchName>
          <CartPageNameBottom>
            <CartPageName>수량:</CartPageName>
            <CartPageNameSelect>
              <select>
                <option value="">1</option> <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </CartPageNameSelect>
            <CartPageNameDelete>
              <button>삭제하기</button>
            </CartPageNameDelete>
          </CartPageNameBottom>
        </CartPageName>
        <CartPagePrice>₩{list[0].price}</CartPagePrice>
      </CartPageBox> */
}
