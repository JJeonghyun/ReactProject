import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { DualAxes } from "@ant-design/plots";

const BarChartComp = () => {
  const data = [
    {
      time: "2020-08-20",
      consumeTime: 10868,
      completeTime: 649.483,
    },
    {
      time: "2020-08-21",
      consumeTime: 8786,
      completeTime: 1053.7,
    },
    {
      time: "2020-08-22",
      consumeTime: 10824,
      completeTime: 679.817,
    },
    {
      time: "2020-08-23",
      consumeTime: 7860,
      completeTime: 638.117,
    },
    {
      time: "2020-08-24",
      consumeTime: 13253,
      completeTime: 843.3,
    },
    {
      time: "2020-08-25",
      consumeTime: 17015,
      completeTime: 1092.983,
    },
    {
      time: "2020-08-26",
      consumeTime: 19298,
      completeTime: 1036.317,
    },
    {
      time: "2020-08-27",
      consumeTime: 13937,
      completeTime: 1031.9,
    },
    {
      time: "2020-08-28",
      consumeTime: 11541,
      completeTime: 803.467,
    },
    {
      time: "2020-08-29",
      consumeTime: 15244,
      completeTime: 830.733,
    },
    {
      time: "2020-08-30",
      consumeTime: 14247,
      completeTime: 709.867,
    },
    {
      time: "2020-08-31",
      consumeTime: 9402,
      completeTime: 665.233,
    },
    {
      time: "2020-09-01",
      consumeTime: 10440,
      completeTime: 696.367,
    },
    {
      time: "2020-09-02",
      consumeTime: 9345,
      completeTime: 692.867,
    },
    {
      time: "2020-09-03",
      consumeTime: 18459,
      completeTime: 936.017,
    },
    {
      time: "2020-09-04",
      consumeTime: 9763,
      completeTime: 782.867,
    },
    {
      time: "2020-09-05",
      consumeTime: 11074,
      completeTime: 653.8,
    },
    {
      time: "2020-09-06",
      consumeTime: 11770,
      completeTime: 856.683,
    },
    {
      time: "2020-09-07",
      consumeTime: 12206,
      completeTime: 777.15,
    },
  ];

  const config = {
    data: [data, data],
    xField: "time",
    yField: ["consumeTime", "completeTime"],
    limitInPlot: false,
    padding: [10, 20, 80, 30],

    slider: {},
    meta: {
      time: {
        sync: false,
      },
    },
    geometryOptions: [
      {
        geometry: "column",
      },
      {
        geometry: "line",
      },
    ],
  };

  return (
    <>
      <DualAxes {...config} />
    </>
  );
};
export default BarChartComp;
