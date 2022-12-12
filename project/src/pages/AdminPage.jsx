import styled from "styled-components";

import AdminContainer from "../components/Admin/Container";
import Header from "../components/Home/Header/index";
import Footer from "../components/Home/Footer/index";

const AdminPage = () => {
  return (
    <AdminHeaderBox>
      <Header />
      <AdminContainer />
      <Footer />
    </AdminHeaderBox>
  );
};
export default AdminPage;

const AdminHeaderBox = styled.div`
  & > div:first-child {
    background-color: rgba(0, 0, 0, 0);
    color: black;
  }
  & > div:nth-child(2) {
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
    color: black;
    background-color: white;
  }
`;
