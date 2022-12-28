# 소녀시대(JJJJ) 팀 프로젝트

## **22.12.09 ~ 22.12.30**

## 0. :family: Team Members

- Leader : [장정현](https://github.com/JJeonghyun)
- Member : [김선주](https://github.com/KimSunJ)
- Member : [이재혁](https://github.com/LeeJaeHyekk)
- Member : [김영준](https://github.com/color99b)

- Team Notion : [notion](https://crystalline-lyric-a65.notion.site/Team-Project-b5b4c706da5f4e8299ffb3b4ad9769d6)

- Purpose Page

<br>

<img src="./project/public/imgs/tesla.jpg" alt="asd" width="700px" height="350px" />

---

<br>

## 1. :computer: Project Description

- Intro

  > 기존의 목표 페이지를 토대로 회원가입을 통해 접속한 사용자들이 원하는 상품을 검색하거나 장바구니에 담아 편리하게 접근 할 수 있는 홈페이지 제작 계획

 <br>

---

## 2.:information_source: Project Information

- Purpose

  > Front기반의 React와 BackEnd기반의 Node.js(express) 및 DB를 결합한 웹 페이지 개발

     <br>

---

## 3. :satellite: Main Function

1. 회원관리

   > 회원가입, 로그인, 로그아웃

   > 마이페이지를 통해 성명, 주소, 전화번호 등 개인정보 수정 가능

 <br>

2. 상품 장바구니 관리 기능

   > 각 상품 별로 장바구니에 추가 기능

   > 개개인의 장바구니 내역

   > 상품 삭제 기능

 <br>

3. 상품 검색 기능

   > 사용자가 원하는 상품을 자유롭게 검색

   > 입력한 검색어를 포함한 상품들 전부 나열

 <br>

4.  상품 구매 기능

    > 사용자가 장바구니에 담은 전체 상품 구매

    > 체크아웃을 통해 구매한 내역을 마이페이지에서 확인 가능

 <br>

---

## 4. :floppy_disk: Skills

<br>

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/><img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=Redux&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/><img src="https://img.shields.io/badge/mySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/><img src="https://img.shields.io/badge/git-F05032?style=flat&logo=Git&logoColor=white"/>
<br>
<br>

---

## 5.:recycle: Environment

<br>

> Visual Studio Code Version 1.73.1

> Node.js Version 16.14.2

> OS : Window x64 / MacOS : Ventura 13.1

<br>

---

## 6. :mag: Prerequisite / Usage

<br>

- In 'express' Directory (express)

  - 'config' Directory (config.json 내 password 설정)
    <br>
    <br>

  ```javascript
    {
      "development": {
        "username": "root",
        "password": "password 설정",
        "database": "tesla",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "test": {
        "username": "root",
        "password": "password 설정",
        "database": "tesla",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": "password 설정",
        "database": "tesla",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
  }

  ```

<br>

- In 'express' Directory (Express)

```
npm install
```

<br>

- In 'project' Directory (React)

```
yarn install
```

 <br>

---

## 7. :memo: Distributing Roles

<br>

- Main, Admin Pages

  -FrontEnd

  - :guardsman:장정현

  -BackEnd

  - :guardsman:장정현

     <br>

- Regist, LogIn, LogOut Pages

  -FrontEnd

  - :woman:김선주

  -BackEnd

  - :woman:김선주 :guardsman:장정현

     <br>

- Search, Cart Pages

  -FrontEnd

  - :man:이재혁

  -BackEnd

  - :man:이재혁 :baby:김영준

     <br>

- Cart, Chart Pages

  -FrontEnd

  - :baby:김영준

  -BackEnd

  - :baby:김영준 :man:이재혁

   <br>

- User Mypage, Order Pages

  -FrontEnd

  - :woman:김선주

  -BackEnd

  - :woman:김선주 :guardsman:장정현 :baby:김영준

     <br>

---

<br>

## 8.:open_file_folder: Git Branch Division

- main

  - dev

    - itemInfo
      > - itemInfo UI 완성, orderPage UI완성
    - search
      > - 검색페이지 정적인 기본틀, 검색 품목들 배열방식으로 구조 설계
    - regist
      > - 회원가입 페이지 UI 관련
    - cart
      > - 장바구니 페이지 UI
    - mainpage
      > - 메인 홈페이지 UI 관련
    - dropdown
      > - Header 카테고리 애니메이션 추가
    - productList, gallery
      > - dummy json파일과 검색결과 페이지 연결
    - userclone
      > - 회원가입, 로그인, 로그아웃 기능 구현
    - chartpage
      > - 차트페이지 라이브러리 추가
    - hover
      > - 상품 이미지 마우스 호버 시 다른 이미지 출력 기능 구현
    - adminlist
      > - 관리자 상품목록 페이지 UI 추가
    - multerdb
      > - 관리자 상품등록 후 DB 연동 기능 구현
    - cartdb
      > - 장바구니 페이지 DB 연동 구현
    - cartback
      > - 장바구니 페이지 express 통신 구현
    - productpage
      > - 상품상세페이지 Header, Footer Comp 연결
    - associate
      > - Database 각 테이블별 관계형 설정
    - auth
      > - 유저 정보 db에 추가하는 기능 구현
    - backback
      > - 검색결과페이지 상품 이미지 박스 조절
    - routing
      > - 전체페이지 경로 재 설정
    - cart-exception, checkcart
      > - 장바구니 페이지 예외처리
    - user
      > - 기존에 있던 loginNext 폴더 삭제
    - adcookie
      > - 관리자 전용 쿠키 생성 및 삭제 기능 구현
    - cookies
      > - 사용자와 관리자 두개의 쿠키 생성 및 삭제 구현
    - authdb
      > - 사용자 비밀번호 관련
    - cookieking
      > - 각 페이지에서 쿠키 여부 판단 기능 구현
    - cart-order
      > - 장바구니의 주문창 기능 추가
    - adminui
      > - 관리자 페이지 UI 보강
    - totalPrice
      > - 장바구니 페이지의 주문창 총 가격 계산 기능 추가
    - pm

      > - 프로젝트 전체 총괄 기능 보수

    - chartPage

      > - 상세페이지 UI 수정

    - cartcart, goodcart

      > - 장바구니페이지 관련 보완

    - authuser

      > - 유저 마이페이지 구매내역 페이지 추가

    - responweb

      > - 메인페이지 및 관리자 페이지 반응형 웹페이지 구현

    - mediaQuery-cart

      > - 장바구니 주문영역 반응형 웹페이지 구현
      >   <br>

---

## 9.:collision: Issues Objects

> 정현
>
> - 이슈사항 1)
>
>   - (22.12.11) 기존에 ES6 이전 문법으로 연동 했었던 DB(sequelize) 문법을 가져오면서 ES6문법(import, from) 형식으로 바꿈에 있어서 config폴더 내에 config.json 형식의 파일을 인식 하지 못해 DB가 제대로 연결되 않았다.
>
>   - 해결
>
> ```javascript
>           assert { type: "json" };
>           import Config from "../config/config.json" assert { type: "json" };
>           const config = Config[env];
> ```
>
> - 이슈사항 2)
>
>   - (22.12.15) 프론트에서 로그인 시 axios 통신을 이용하여 백엔드 서버에 요청을 주고 해당 요청에 대한 정보들이 일치하면 res.cookie를 통해 jwt로 쿠키를 생성 하였다. 이후 백엔드 서버에서 프론트react쪽으로 통신에 응답하였지만, 쿠키가 생각했던대로 보여지지 않았다. 자세히 보니 네트워크 쪽 쿠키는 넘어왔지만 애플리케이션 쪽에서 확인 불가 했었다.
>
>   - 해결 : React 최상위 index.js과 express 최상위 index.js에 필요한 코드 추가
>
> ```javascript
> axios.defaults.withCredentials = true;
>
> app.use(cors({ origin: "http://localhost:3000", credentials: true }));
> ```
>
> - 이슈사항 3)
>
>   - (22.12.19) 기존에 사용했던 dummy 데이터 파일 (product.json) axios 통신해서 json파일 전체를 forEach메서드를 통해 통신 할 때 마다 json파일을 읽고 db에 Product 테이블에 데이터와 상관없이 매번 데이터 삽입되는 이슈 발생
>
>   - 해결: axios 통신을 하여 Product 테이블에 데이터가 없으면 dummy 파일 읽고 컬럼명에 맞춰서 create문으로 데이터 삽입 아니면 Product 테이블 전체 findAll 한 리스트를 프론트 쪽으로 응답해준다.

> 선주
>
> - 이슈사항 1)
>   - (22.12.12) html / css 와는 다르게 img 태그에 hover 시 바로 반응하지 않는다.
>   - 해결 : 리액트에서의 hover는 부모 태그를 통해 자식 태그에 적용되는 것으로 img 태그는 자식 태그를 갖지 못하기에 부모 태그를 갖게 함으로 hover 가 작동되는 것을 볼 수 있었다.

> 재혁
>
> - 이슈사항 1)
>   - (22.12.08) Img 파일 이름이 한글이여서 해당 이미지의 이름이 깨져서 나오는 현상
>   - 해결 : Img 이름 한글에서 영어로 교체

> 영준
>
> - 이슈사항1 (22.12.20)
>   - DB에서 정보를 가져올 때 findAll 이 아닌 findOne 으로 찾는 조건문의 문법이 굉장히 헷갈렸다.
>   - 해결 : findOne( {where: { 찾을 조건 } } )
>
> ```javascript
> const temp = await Cart.findOne({ where: { name: req.body.payload.name } });
> ```

> - 이슈사항 2 (22.12.21)
>
>   - (22.12.21) CSS 적용을 id, className, 직접 지정 섞어서 쓰다보니 적용이 원활하게 되지 않음.
>   - 해결 : CSS 적용 우선 순위 공부. 출처 : https://think0wise.tistory.com/24
>   - 우선도 {inline > id > class, sudoClass > tag, element}
>   - 이왕이면 class로 수정되지 않는 스타일 바꾸기 위해 id를 강제로 넣는 건 지양.

> - 이슈사항 3 (22.12.22)
>   - DB에 저장된 list를 받아 물건을 출력할 때 Multer library 로 DB에 등록한 상품의 사진을 불러오지 못한다.
>     DB에 밀어넣은 정보는 이미지의 경로가 폴더 절대주소로 설정되는 반면
>     ![default](readMeimg/default.png)  
>      multer 로 올린 정보의 이미지는 경로가 파일 이름만 설정된다.
>     ![default](readMeimg/multer.png)
>   - 해결 : DB에 저장된 img 의 경로가 imgs 폴더 주소를 포함하고 있을 때와, 파일 이름만 있을때를 나누어서 불러온다.
>     multer 로 업로드한 파일은 서버폴더의 upload에 올라가게끔 설정을 했다.
>
> ```javascript
> {item.productImg.includes("/imgs") ? (
>              <div key={`divBox-${index}`}>
>                <img key={`imgBox-${index}`} src={item.>productImg} alt="" />
>            </div>
>         ) : (
>         <div key={`divBox-${index}`}>
>            <img
>            key={`imgBox-${index}`}
>             src={`http://localhost:8080/upload/${item.productImg}`}
>           alt="asd"
>          />
>       </div>
> ```
>
> 참고문헌:
> https://any-ting.tistory.com/51

> - 이슈사항 5 (22.12.23)
>   - 테이블간 관계 DB 설계에 어려움을 겪었다.
>     User, Cart, Product, UserProduct 등 각각의 테이블에 모든 상품정보와 유저정보를 넣어서 하나하나 관리하는 건 비효율적이기도 하고, 유지보수도 어렵기에 관계설정이 필수적이었다.
>   - 해결 : User, Product 테이블을 기준으로 userId와 productId를 엮어서 Cart, UserProduct 테이블에 관계시켰다.
>
> ```javascript
> // Cart Table
> static associate(db) {
>   db.Cart.belongsTo(db.User, { foreignKey: "userId", targetKey: "id" });
>   db.Cart.belongsTo(db.Product, { foreignKey: "productId", targetKey: "id" });
> }
> }
> ```
>
> ```javascript
> // Product Table
> static associate(db) {
>   db.Product.belongsToMany(db.User, {
>    through: "userProduct",
>    foreignKey: "productId",
>  });
>  db.Product.hasMany(db.Cart, {
>    foreignKey: "productId",
>    sourceKey: "id",
>  });
>  db.Product.hasMany(db.Order, {
>    foreignKey: "productId",
>    sourceKey: "id",
>   });
> }
> }
> ```
>
> ```javascript
> // User Table
> static associate(db) {
> db.User.belongsToMany(db.Product, {
>  through: "userProduct",
>   foreignKey: "userId",
>  });
>  db.User.hasMany(db.Cart, { foreignKey: "userId", sourceKey: >"id" });
>  db.User.hasMany(db.Order, { foreignKey: "userId", >sourceKey: "id" });
> }
> }
> ```

> - 이슈사항 6 (22.12.24)
>
>   - 관계가 형성된 테이블 속 data에 접근하는 방법에서 어려움을 겪었다. 단순한 findOne, findAll 이 아닌 다른 문법이 필요해 보였다.
>   - 해결 : 하위 속성으로 include 문법을 사용한다.
>
>   - ex:
>
> ```javascript
> /// Cart 테이블의 userid 와 매칭되는 user테이블의 항목의 attributes와 productid 와 매칭되는 product 테이블 항목의 attributes를 가져온다.
> const temp = await Cart.findOne({
>   where: { userId: tempUser.id, productId: tempProduct.id },
>   include: [
>     {
>       model: Product,
>       attributes: [
>         "productName",
>         "productPrice",
>         "productImg",
>         "productHoverImg",
>       ],
>     },
>     {
>       model: User,
>       attributes: ["userEmail"],
>     },
>   ],
> });
> ```
>
> 참고문헌 : https://gist.github.com/zcaceres/83b554ee08726a734088d90d455bc566

> - 이슈사항 7 (22.12.26)
>
>   - async, await 를 통한 비동기 처리를 할 때 await 문 다음 logic이 먼저 실행되면서, await로 back에서 가져오는 정보를 읽지 못하는 문제가 발생.
>   - 해결 : await 문 대신에 axios 통신 .then(()=>{}).catch(err) 문을 사용(통신문이 끝나면 실행한다)
>
>   - ex:
>
> ```javascript
> const dbRemove = function (index, productId) {
>   axios
>     .post("http://localhost:8080/api/cart/remove/", {
>       payload: { index: index, productId: productId },
>     })
>     .then(() => {
>       userCart();
>     })
>     .catch((err) => {
>       console.log(err);
>     });
> };
> ```
