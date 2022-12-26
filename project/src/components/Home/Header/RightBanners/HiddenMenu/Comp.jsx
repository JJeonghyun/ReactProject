import styled from "styled-components";
import { useLocation } from "react-router";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const HiddenMenuComp = ({ tempUser, logOut }) => {
  const location = useLocation();
  return (
    <HiidenBox>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Tesla
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {location.pathname == "/mypage" ? (
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/">Home</Nav.Link>
                    {tempUser ? (
                      <Nav.Link href="/mypage">마이페이지</Nav.Link>
                    ) : (
                      <></>
                    )}
                    {tempUser ? (
                      <Nav.Link onClick={logOut}>로그아웃</Nav.Link>
                    ) : (
                      <Nav.Link href="/login">로그인</Nav.Link>
                    )}
                    {!tempUser ? (
                      <></>
                    ) : tempUser.email === "admin@jjjj.com" ? (
                      <Nav.Link href="/admin">상품등록</Nav.Link>
                    ) : (
                      <></>
                    )}
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </HiidenBox>
  );
};

export default HiddenMenuComp;

const HiidenBox = styled.div`
  & > nav {
    background-color: rgba(255, 255, 255, 1) !important;
    border: 3px solid white;
    border-radius: 10px;

    margin-bottom: 0 !important;
    padding: 0;
    & > div {
      padding: 0;
      & > button {
        padding: 1px 3px;
      }
    }
  }
`;
