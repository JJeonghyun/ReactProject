import styled from "styled-components";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap/";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Hidden.css";

const HiddenMenuComp = ({ tempUser, logOut, responWidth }) => {
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
                <Nav className="justify-content-end flex-grow-1 pe-3 container">
                  <Link to={"/"} className="toHome">
                    Home
                  </Link>
                  {tempUser && tempUser.email !== "admin@jjjj.com" ? (
                    <Nav.Link href="/mypageprofil" className="mypage">
                      마이페이지
                    </Nav.Link>
                  ) : (
                    <></>
                  )}
                  {tempUser ? (
                    <Nav.Link onClick={logOut} className="logout">
                      로그아웃
                    </Nav.Link>
                  ) : (
                    <Link to={"/login"} className="login">
                      로그인
                    </Link>
                  )}
                  {!tempUser ? (
                    <></>
                  ) : tempUser.email === "admin@jjjj.com" ? (
                    <Link to="/admin" className="admin">
                      상품등록
                    </Link>
                  ) : (
                    <></>
                  )}
                  {!responWidth || responWidth > 730 ? (
                    <></>
                  ) : (
                    <>
                      <Link to={"/charge"} className="charge">
                        충전
                      </Link>
                      <Link to={"/acc"} className="acc">
                        차량 악세사리
                      </Link>
                      <Link to={"/clothes"} className="clothes">
                        의류
                      </Link>
                      <Link to={"/all"} className="all">
                        모든 상품
                      </Link>
                    </>
                  )}
                </Nav>
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
