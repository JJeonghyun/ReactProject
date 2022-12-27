import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BuyComp from "./Comp";

const BuyContainer = () => {
  const navigate = useNavigate();
  const [buyList, setBuyList] = useState([]);
  const [created, setCreated] = useState([]);
  const [buyTime, setTime] = useState("");
  const getBuyList = async () => {
    try {
      const getUserId = await axios.post(
        "http://localhost:8080/api/user/getUser"
      );

      const temp = await axios.post("http://localhost:8080/api/user/bought");

      // const order = await axios.post("http://localhost:8080/api/user/temp", {
      //   list: temp.data,
      // });

      const tempCreated = [];
      console.log(temp.data);
      console.log(new Date(temp.data[0].createdAt).toLocaleString());

      for (let i = 0; i < temp.data.length; i++) {
        for (let j = i + 1; j < temp.data.length; j++) {
          if (temp.data[i].createdAt == temp.data[j].createdAt) {
            // tempCreated.push(new Date(temp.data[i].createdAt).toLocaleString());
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
      .post("http://localhost:8080/api/user/timeList", {
        value: value,
      })
      .then((result) => {
        setBuyList(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut = () => {
    try {
      axios
        .get("http://localhost:8080/api/user/logout")
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
    />
  );
};

export default BuyContainer;
