import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../../Button/Comp";

const ProfilComp = ({
  modalClick,
  isModal,
  addressModalClick,
  isAdressModal,
  logEmail,
  logFirstName,
  logLastName,
  logInUser,
  replaceName,
  userDelete,
  logAddress,
  logAddressDetail,
  logPhone,
  replaceAddress,
  logOut,
  isAnimationModal,
}) => {
  const [replaceFirst, setreplaceFirst] = useState(logFirstName);
  const [replaceLast, setreplaceLast] = useState(logLastName);
  const [firstValid, setFirstValid] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [address, setAddress] = useState(logAddress);
  const [addressDetail, setAddressDetail] = useState(logAddressDetail);
  const [phone, setPhone] = useState(logPhone);

  const handleFirstName = (e) => {
    setreplaceFirst(e.target.value);
    const regex = /^[ㄱ-ㅎ|가-힣]+$/i;
    if (regex.test(replaceFirst)) {
      setFirstValid(true);
    } else {
      setFirstValid(false);
    }
  };

  const handleLastName = (e) => {
    setreplaceLast(e.target.value);
    const regex = /^[ㄱ-ㅎ|가-힣]+$/i;
    if (regex.test(replaceLast)) {
      setLastValid(true);
    } else {
      setLastValid(false);
    }
  };

  useEffect(() => {
    logInUser();
  }, []);

  const handlePress = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  useEffect(() => {
    if (phone.length === 11) {
      setPhone(phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phone.length === 13) {
      setPhone(
        phone.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [phone]);

  return (
    <>
      {isModal || isAnimationModal ? (
        <ModalBox>
          <div
            className={`modalback ${
              !isModal && isAnimationModal ? "modal_down" : ""
            }`}
          >
            <div className="modal_header">
              <div>
                <h2>성명 수정하기</h2>
                <p onClick={modalClick}>
                  <img src="/imgs/mypage/xmark-solid.svg" alt="" />
                </p>
              </div>
            </div>
            <div className="modal_contents">
              <div>
                <div className="modaltext">
                  <p>이름</p>
                  <input
                    type="text"
                    value={replaceFirst}
                    onInput={(e) => {
                      setreplaceFirst(e.target.value);
                    }}
                    onChange={handleFirstName}
                  />
                  {replaceFirst == "" && !firstValid ? (
                    <p className="error">한글 이름만 입력하세요</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="modaltext">
                  <p>성</p>
                  <input
                    type="text"
                    value={replaceLast}
                    onInput={(e) => {
                      setreplaceLast(e.target.value);
                    }}
                    onChange={handleLastName}
                  />
                  {replaceLast == "" && !lastValid ? (
                    <p className="error">한글 성만 입력하세요</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div>
                {replaceFirst != "" && replaceLast != "" ? (
                  <ButtonComp
                    className="modalUpdate on"
                    onClick={() => {
                      replaceName(replaceFirst, replaceLast);
                    }}
                  >
                    업데이트하기
                  </ButtonComp>
                ) : (
                  <ButtonComp className="modalUpdate">업데이트하기</ButtonComp>
                )}
              </div>
            </div>
          </div>
        </ModalBox>
      ) : (
        <></>
      )}
      {isAdressModal ? (
        <AdressModalBox>
          <div className="contents">
            <p className="close" onClick={addressModalClick}>
              <img src="/imgs/mypage/xmark-solid.svg" alt="" />
            </p>
            <h2>주소 및 연락처 번호 수정하기</h2>
            <p className="guide">
              <span className="i_icon">i</span>
              <span>주소는 한글로 입력해주시길 바랍니다</span>
            </p>
            <ul className="adress-top">
              <li>
                <p>주소 1 예시&#41;서희구 미림대로1길</p>
                <input
                  type="text"
                  value={address}
                  onInput={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </li>
              <li>
                <p>주소 1 예시&#41;23, 한국아파트</p>
                <input
                  type="text"
                  value={addressDetail}
                  onInput={(e) => {
                    setAddressDetail(e.target.value);
                  }}
                />
              </li>
            </ul>
            <ul className="adress-bottom">
              <li>
                <p>전화번호</p>
                <input
                  type="text"
                  value={phone}
                  onInput={(e) => {
                    setPhone(e.target.value);
                  }}
                  maxLength="13"
                  onChange={handlePress}
                  placeholder={"010-1234-5678"}
                />
              </li>
            </ul>
            {address != "" && addressDetail != "" && phone != "" ? (
              <ButtonComp
                className="logIn on"
                onClick={() => {
                  replaceAddress(address, addressDetail, phone);
                }}
              >
                업데이트하기
              </ButtonComp>
            ) : (
              <ButtonComp className="logIn">업데이트하기</ButtonComp>
            )}
          </div>
        </AdressModalBox>
      ) : (
        <></>
      )}
      <SideBarBox>
        <div className="sideMenuBar">
          <div className="sideNav">
            <p className="iconImg">
              <img src="/imgs/mypage/user.svg" alt="user" />
            </p>
            <Link to={"/mypageprofil"}>
              <p className="icon">운전자 프로필 설정</p>
            </Link>
          </div>
          <div className="sideNav">
            <p className="iconImg">
              <img src="/imgs/mypage/bag-check.svg" alt="user" />
            </p>
            <Link to={"/mypagebuy"}>
              <p className="icon">구매내역</p>
            </Link>
          </div>
          <div className="sideNav">
            <p>
              <img src="/imgs/mypage/logout.svg" alt="logout" />
            </p>
            <p className="icon" onClick={logOut}>
              로그아웃
            </p>
          </div>
        </div>
      </SideBarBox>
      <ProfilBox>
        <h2>운전자 프로필 설정</h2>
        <div className="setting">
          <div className="contents">
            <p className="title">성명</p>
            <p>
              <span>{logFirstName}</span>
              <span>{logLastName}</span>
            </p>
            <div className="revise" onClick={modalClick}>
              수정하기
            </div>
          </div>
          <div className="contents">
            <p className="title">주소</p>
            <p>
              <span>{logAddress}</span>
              <span>{logAddressDetail}</span>
            </p>
            <p className="revise" onClick={addressModalClick}>
              수정하기
            </p>
          </div>
          <div className="contents">
            <p className="title">연락처 번호</p>
            <p>{logPhone}</p>
            {/* <p className="revise" onClick={addressModalClick}>
              수정하기
            </p> */}
          </div>
        </div>
        <h3>보안</h3>
        <div className="security">
          <div>
            <p className="title">이메일</p>
            <p>{logEmail}</p>
            <Link to="/login">
              <p className="revise">수정하기</p>
            </Link>
          </div>
          <div>
            <p className="title">비밀번호</p>
            <p>***********</p>
            <Link to="/forgot">
              <p className="revise">수정하기</p>
            </Link>
          </div>
          <div>
            <p
              className="revise"
              onClick={() => {
                userDelete(logEmail);
              }}
            >
              계정 삭제하기
            </p>
          </div>
        </div>
      </ProfilBox>
    </>
  );
};

export default ProfilComp;

const ProfilBox = styled.div`
  width: 70%;
  display: block;
  margin: 100px auto 0px;
  font-size: 15px;
  height: 80vh;

  h3 {
    padding: 32px 0px 8px 0px;
  }
  .setting {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  .setting > div {
    margin-top: 30px;
  }
  .security {
    width: 65%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .security > div {
    margin-top: 30px;
  }

  li {
    list-style-type: none;
    margin: 0;
  }
  span {
    color: rgb(0, 0, 0);
    margin: 0 10px 20px 0;
  }
  .revise {
    color: rgb(100, 100, 100);
    text-decoration: underline;
    cursor: pointer;
  }
  .title {
    color: rgb(100, 100, 100);
  }
  .contents {
    width: 70%;
  }
  .contents > li:nth-child(2) {
    img {
      width: 24px;
      background-color: rgb(230, 230, 230);
      padding: 5px;
      border-radius: 100%;
      cursor: pointer;
    }
    display: flex;
    align-items: center;
    .plus:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const ModalBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(150, 150, 150, 0.3);
  backdrop-filter: blur(0.3rem);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation-timing-function: ease-out;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  /* @keyframes slideUp {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0px);
    }
  } */
  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  .modalback {
    width: 770px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background-color: white;
    border-radius: 30px;
    margin: 0 48px 0 48px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    animation-duration: 0.4s;
    animation-timing-function: ease-out;
    animation-name: slideUp;
    &.modal_down {
      animation-name: slideDown;
    }
  }
  .modal_header {
    width: 100%;
  }
  .modal_header > div {
    width: 100%;
    padding: 16px 20px 16px 48px;
    display: inline-flex;
    justify-content: space-between;
    align-items: flex-start;
    & p {
      display: flex;
      align-items: flex-start;
      width: 15px;
    }
    & h2 {
      display: inline-block;
      margin: 0;
      padding: 32px 0 0 0;
    }
  }
  .modal_contents {
    width: 100%;
    display: inline-block;
  }
  .modaltext {
    width: 50%;
  }
  .modaltext:nth-child(2) {
    margin-left: 30px;
  }
  .modaltext > input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgb(245, 245, 245);
    outline-color: rgb(180, 180, 180);
    padding: 10px;
  }
  .modal_contents > div {
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: 16px 48px 16px 48px;
  }

  @media only screen and (max-width: 1199px) {
    .modal_contents > div {
      display: inline-block;
    }
    .modaltext:nth-child(2) {
      margin-left: 0px;
    }
  }
  @media only screen and (max-width: 840px) {
    .modaltext {
      width: 100%;
    }
  }
  @media only screen and (max-width: 599px) {
    .modalback {
      width: 100%;
      border-radius: 0;
      margin: 0;
    }
  }

  .error {
    font-size: 13px;
    color: red;
  }
  p {
    margin-top: 10px;
  }

  .modalinner {
    display: flex;
    flex-wrap: wrap;
  }
`;

const AdressModalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(150, 150, 150, 0.3);
  backdrop-filter: blur(0.3rem);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  font-size: 13px;
  h2 {
    margin-bottom: 30px;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
    margin-top: 20px;
    color: rgb(100, 100, 100);
  }
  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
    outline-color: rgb(180, 180, 180);
    padding: 10px;
  }
  .adress-top > li {
    width: 47%;
  }
  .contents {
    width: 700px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    padding: 80px 100px;
    display: block;
    box-sizing: border-box;
  }
  .close {
    width: 20px;
    position: absolute;
    top: 12%;
    left: 68%;
  }
  .i_icon {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #3e6ae1;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  .guide {
    display: flex;
    align-items: center;
  }
  select {
    border: none;
    border-radius: 5px;
    background-color: rgb(239, 239, 239);
    outline-color: rgb(180, 180, 180);
    padding: 10px;
  }
`;

const SideBarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 100px auto 0px;
  width: 30%;
  a {
    text-decoration: none;
  }
  .sideMenuBar {
    width: 300px;
  }
  .sideNav:nth-child(2) {
    margin-top: 30px;
  }
  .sideNav:nth-child(3) {
    margin-top: 30px;
  }
  .sideNav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 18px;
      margin-right: 30px;
    }
    p {
      margin: 0;
    }
    .icon {
      margin: 0;
      font-size: 17px;
      color: rgb(100, 100, 100);
    }
    .icon_on {
      margin: 0;
      font-size: 17px;
      color: rgb(0, 0, 0);
    }

    .icon:hover {
      cursor: pointer;
      color: rgb(0, 0, 0);
    }
  }
`;
