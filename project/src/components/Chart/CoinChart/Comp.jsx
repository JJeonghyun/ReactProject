import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { DualAxes } from "@ant-design/plots";

const CoinChartComp = () => {
  const data = [
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
  ];

  const config = {
    data: [data, data],
    xField: "time",
    yField: ["value", "count"],
    slider: {},
    meta: {
      time: {
        sync: false, // 开启之后 slider 无法重绘
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
