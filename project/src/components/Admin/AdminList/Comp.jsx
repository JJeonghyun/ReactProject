import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AdminListComp = ({ listUp, list, remove, uploadArr }) => {
  useEffect(() => {
    listUp();
  }, []);
  console.log(uploadArr);
  return (
    <AdminBox>
      <div>
        <div>Admin</div>
        <div>
          <Link to={"/admin"}>Product Management</Link>
        </div>
        <div>
          <Link to={"/adminlist"}>Product List</Link>
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
                  src={`http://localhost:8080/upload/${item.productImg}`}
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
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  & > div:first-child {
    width: 20%;
    padding: 0 10px;
    height: 100%;
    & > div:first-child {
      border-bottom: 1px solid black;
    }
    & > div:nth-child(2),
    & > div:nth-child(3) {
      padding: 10px 0;
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
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 79%;
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
        font-size: 1.3rem;
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
    }
  }
`;
