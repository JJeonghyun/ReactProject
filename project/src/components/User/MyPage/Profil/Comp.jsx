import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ButtonComp from "../../Button/Comp";

const ProfilComp = ({
  modalClick,
  isModal,
  adressModalClick,
  isAdressModal,
  logEmail,
  logFirstName,
  logLastName,
  logInUser,
  replaceName,
  userDelete,
}) => {
  const [replaceFirst, setreplaceFirst] = useState("");
  const [replaceLast, setreplaceLast] = useState("");
  const [firstValid, setFirstValid] = useState(false);
  const [lastValid, setLastValid] = useState(false);
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [phone, setPhone] = useState("");

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

  return (
    <>
      {isModal ? (
        <ModalBox>
          <div className="modalback">
            <p onClick={modalClick}>
              <img src="/imgs/mypage/xmark-solid.svg" alt="" />
            </p>
            <h2>성명 수정하기</h2>
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
            {replaceFirst != "" && replaceLast != "" ? (
              <ButtonComp
                className="logIn on"
                onClick={() => {
                  replaceName(replaceFirst, replaceLast, logEmail);
                }}
              >
                업데이트하기
              </ButtonComp>
            ) : (
              <ButtonComp className="logIn">업데이트하기</ButtonComp>
            )}
          </div>
        </ModalBox>
      ) : (
        <></>
      )}
      {isAdressModal ? (
        <AdressModalBox>
          <div className="contents">
            <p className="close" onClick={adressModalClick}>
              <img src="/imgs/mypage/xmark-solid.svg" alt="" />
            </p>
            <h2>주소 및 전화번호 추가하기</h2>
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
                  value={addressDetail}
                  onInput={(e) => {
                    setAddressDetail(e.target.value);
                  }}
                  placeholder={"000-0000-0000"}
                />
              </li>
            </ul>
            {replaceFirst != "" && replaceLast != "" ? (
              <ButtonComp
                className="logIn on"
                onClick={() => {
                  replaceName(replaceFirst, replaceLast, logEmail);
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
              <span>주소</span>
              <span>상세주소</span>
            </p>
            <p className="revise" onClick={adressModalClick}>
              수정하기
            </p>
          </div>
          <div className="contents">
            <p className="title">연락처 번호</p>
            <p>000-0000-0000</p>
            <p className="revise" onClick={adressModalClick}>
              수정하기
            </p>
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(150, 150, 150, 0.3);
  backdrop-filter: blur(0.3rem);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .error {
    font-size: 13px;
    color: red;
  }
  h2 {
    margin-bottom: 40px;
  }
  p {
    margin-top: 10px;
  }
  input {
    width: 100%;
    border: none;
    border-radius: 5px;
    border: none;
    background-color: rgb(239, 239, 239);
    outline-color: rgb(180, 180, 180);
    padding: 10px;
  }
  .modalback {
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 80px 100px;
    img {
      width: 20px;
      position: absolute;
      top: 23%;
      left: 68%;
    }
  }
  .modaltext {
    width: 440px;
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
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  li {
    list-style-type: none;
    margin-top: 30px;
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
    width: 45%;
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
