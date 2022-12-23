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

> OS : Window x64

<br>

---

## 6. :mag: Prerequisite / Usage

<br>

- In 'express' Directory (express)

  - 'config' Directory (config.json 내 password 설정)
    <br>
    <br>

  ```
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

---

<br>

## 8.:open_file_folder: Git Branch Division

- main

  - dev

    - itemInfo
    - search
    - regist
    - cart
    - appage
    - mainpage
    - dropdown
    - productList
    - gallery
    - userclone
    - chartpage
    - hover
    - adminlist
    - multerdb
    - cartdb
    - clone
    - cartback
    - productpage
    - associate
    - auth
    - backback
    - routing
    - cart-exception
    - checkcart
    - user
    - adcookie
    - cookies
    - authdb
    - cookieking
    - cart-order
    - adminui
    - totalPrice
    - pm

      <br>

---

## 9.:collision: Issues Object

> 정현
>
> - 이슈사항 1)
>
>   - (22.12.11) 기존에 ES6 이전 문법으로 연동 했었던 DB(sequelize) 문법을 가져오면서 ES6문법(import, from) 형식으로 바꿈에 있어서 config폴더 내에 config.json 형식의 파일을 인식 하지 못해 DB가 제대로 연결되 않았다.
>
>   - 해결
>
> ```
>           assert { type: "json" };
>           import Config from "../config/config.json" assert { type: "json" };
>           const config = Config[env];
> ```

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
> - 이슈사항
>   - (22.12.20) DB에서 정보를 가져올 때 findAll 이 아닌 findOne 으로 찾는 조건문의 문법이 굉장히 헷갈렸다.
>   - 해결 : findOne( {where: { 찾을 조건 } } )
>
> ```
>       const temp = await Cart.findOne({ where: { name: req.body.payload.name } });
> ```

---
