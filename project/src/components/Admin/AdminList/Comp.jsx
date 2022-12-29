import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdminListComp = ({ listUp, list, remove }) => {
  useEffect(() => {
    listUp();
  }, []);
  return (
    <AdminBox>
      <div>
        <div>Product</div>
        <div>
          <Link to={"/admin"}>Management</Link>
        </div>
        <div>
          <Link to={"/adminlist"}>List</Link>
        </div>
      </div>
      <div>
        {list?.map((item, index) => (
          <div key={`listItemBox-${index}`}>
            {item.productImg.includes("/imgs") ? (
              <div key={`divBox-${index}`}>
                <img key={`imgBox-${index}`} src={item.productImg} alt="" />
              </div>
            ) : (
              <div key={`divBox-${index}`}>
                <img
                  key={`imgBox-${index}`}
                  src={`/imgs/${item.productImg}`}
                  alt="asd"
                />
              </div>
            )}
            <div key={`nameBox-${index}`}>{item.productName}</div>
            <div key={`priceBox-${index}`}>{item.productPrice}</div>
            <div key={`accountBox-${index}`}>{item.productAccount}</div>
            <div
              key={`deleteBox-${index}`}
              onClick={() => {
                remove(item.productName);
              }}
            >
              삭제
            </div>
          </div>
        ))}
      </div>
    </AdminBox>
  );
};
export default AdminListComp;

const AdminBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  & > div:first-child {
    width: 20%;
    padding: 0 10px;
    height: 100%;
    & > div:first-child {
      width: 100%;
      border-bottom: 1px solid black;
      padding: 10px 15px;
      font-size: 1.5rem;
      font-weight: 900;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      padding: 10px 0;
      font-weight: 900;
      width: fit-content;
    }
    & > div:nth-child(2) > a,
    & > div:nth-child(3) > a {
      padding: 10px 5px;
      border-radius: 10px;
    }
    & > div:nth-child(2):hover > a,
    & > div:nth-child(3):hover > a {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @media only screen and (max-width: 425px) {
    & > div:first-child {
      width: 35%;
    }
  }
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    flex-wrap: wrap;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      & > div {
        width: calc(100% / 5);
        padding: 15px;
        text-align: center;
        font-size: 1rem;
        font-weight: 650;
        &:last-child {
          cursor: pointer;
          width: fit-content;
          font-size: 1rem;
          border-radius: 10px;
          &:hover {
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
          }
        }
        & > img {
          width: 100%;
        }
      }
      @media only screen and (max-width: 425px) {
        & > div {
          width: calc(100% / 4);
          font-size: 0.7rem;
        }
        & > div:first-child {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 425px) {
    & > div:last-child {
      width: 64%;
    }
  }
`;
