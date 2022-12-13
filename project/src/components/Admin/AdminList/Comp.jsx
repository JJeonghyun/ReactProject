import styled from "styled-components";
import { Link } from "react-router-dom";

const AdminListComponent = () => {
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
      <div>여기에서 상품 리스트 받아서 삭제 까지 ? 할까 함</div>
    </AdminBox>
  );
};
export default AdminListComponent;

const AdminBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 170px);
  & > div:first-child {
    width: 20%;
    border-right: 1px solid red;
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
    width: 79%;
    padding: 0 10px;
    height: 100%;
    & > div:first-child {
      border-bottom: 1px solid black;
    }
    & > div:last-child {
      padding: 10px 0;
    }
    & > div:last-child > button {
      padding: 5px 10px;
    }
  }
`;
