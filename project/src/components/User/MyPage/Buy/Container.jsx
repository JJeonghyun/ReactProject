import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BuyComp from "./Comp";

const BuyContainer = () => {
  const navigate = useNavigate();
  const [buyList, setBuyList] = useState([]);
  const [created, setCreated] = useState([]);
  const [buyTime, setTime] = useState("");
  const [isHiddenModal, setIsHiddenModal] = useState(false);
  const getBuyList = async () => {
    try {
      const getUserId = await axios.post("/api/user/getUser");

      const temp = await axios.post("/api/user/bought");

      const tempCreated = [];

      for (let i = 0; i < temp.data.length; i++) {
        for (let j = i + 1; j < temp.data.length; j++) {
          if (temp.data[i].createdAt == temp.data[j].createdAt) {
            tempCreated.push(temp.data[i].createdAt);

            setCreated([...new Set(tempCreated)]);
          }
        }
      }

      setBuyList(temp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBuyList();
  }, []);

  const getTimeList = (value) => {
    if (value === "전체상품") {
      setBuyList([]);
      getBuyList();
      return;
    }

    axios
      .post("/api/user/timeList", {
        value: value,
      })
      .then((result) => {
        setBuyList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hiddenModalClick = () => {
    setIsHiddenModal(!isHiddenModal);
  };

  const logOut = () => {
    try {
      axios
        .get("/api/user/logout")
        .then((data) => {
          navigate("/");
        })
        .then(() => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BuyComp
      logOut={logOut}
      buyList={buyList}
      created={created}
      setCreated={setCreated}
      setTime={setTime}
      getTimeList={getTimeList}
      hiddenModalClick={hiddenModalClick}
      isHiddenModal={isHiddenModal}
    />
  );
};

export default BuyContainer;
