import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { DualAxes } from "@ant-design/plots";

const CoinChartComp = () => {
  const [data, setData] = useState([
    {
      time: "2019-03",
      value: [200, 350],
      count: 800,
    },
    {
      time: "2019-04",
      value: [400, 650],
      count: 600,
    },
    {
      time: "2019-05",
      value: [150, 350],
      count: 400,
    },
    {
      time: "2019-06",
      value: [100, 450],
      count: 380,
    },
    {
      time: "2019-08",
      value: [300, 550],
      count: 132,
    },
    {
      time: "2019-09",
      value: [200, 350],
      count: 850,
    },
    {
      time: "2019-10",
      value: [200, 450],
      count: 500,
    },
    {
      time: "2019-12",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-13",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-14",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-15",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-16",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-17",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-18",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-19",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-20",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-21",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-22",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-23",
      value: [300, 550],
      count: 350,
    },
    {
      time: "2019-24",
      value: [300, 550],
      count: 350,
    },
  ]);

  const [date, setDate] = useState(24);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }, []);
  }
  function AddData() {
    const tempArr = [...data];
    setDate(date + 1);
    tempArr.shift();
    tempArr.push({ time: `2019-${date}`, value: [500, 600], count: 400 });
    console.log(tempArr);
    setData(tempArr);
  }
  //이거 실행
  // useInterval(AddData, 5000);

  // setInterval(() => {
  //   // setData(data.concat({ time: "2019-25", value: [500, 600], count: 400 }));
  //   const tempArr = [...data];
  //   tempArr.shift();
  //   date++;
  //   tempArr.push({ time: `2019-${date}`, value: [500, 600], count: 400 });
  //   console.log(tempArr);
  //   setData(tempArr);
  // }, 5000);

  const config = {
    data: [data, data],
    xField: "time",
    yField: ["value", "count"],
    slider: {},
    meta: {
      time: {
        sync: false,
      },
    },
    geometryOptions: [
      {
        geometry: "column",
        color: "#5B8FF9",
        isRange: true,
      },
      {
        geometry: "line",
        color: "#5AD8A6",
        lineStyle: {
          lineWidth: 2,
          stroke: "#5AD8A6",
        },
      },
    ],
  };

  return (
    <>
      <DualAxes {...config} />
    </>
  );
};
export default CoinChartComp;
