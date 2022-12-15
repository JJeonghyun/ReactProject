import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ItemHeadComp from "./Comp";
import RightComp from "../../Home/Header/RightBanners/Comp";
import queryString from "query-string";
import axios from "axios";

const ItemHeadContainer = ({ result, searchResult }) => {
  // const [list, setList] = useState([]);

  // // useState = > set~ 변수를 바꿔줬을 때 리렌더링이 된다.

  // // useEffect ->   (첫 번째 매개변수에 있는 로직을 실행한다) 두 번째 매개변수에 따라 바뀐다.
  // //               -> [] : 처음 화면이 딱 켜지고 한 번 리렌더링한다.
  // //               -> [asd] : asd가 변경되었을 때마다 리렌더링된다.

  // // useEffect(() => {
  // //   console.log("asd");
  // // }, [asd]);

  // async function asd() {
  //   try {
  //     const temp = await axios.get("http://localhost:8080/api/search", {
  //       params: { result: result },
  //     });

  //     // await axios.get()  => 백에서 보낸 res.send(as)
  //     // return값으로 받아와요

  //     setList(temp.data.mainResult);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const location = useLocation();
  // const result = queryString.parse(location.search);

  // // console.log(location.search);
  // // console.log(queryString.parse(location.search));

  return <ItemHeadComp result={result} searchResult={searchResult} />;
};
export default ItemHeadContainer;
