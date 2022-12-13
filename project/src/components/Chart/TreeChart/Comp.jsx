import { useEffect, useRef, useState } from "react";

import { RadialTreeGraph } from "@ant-design/graphs";

const TreeChartComp = () => {
  const data = {
    id: "Modelineethods",
    children: [
      {
        id: "Cla213ion",
        children: [
          { id: "Logistic regression", value: "12312312343" },
          {
            id: "Linear discriminant analysis",
            value: "483KM",
          },
          { id: "Rules", value: "2.1s" },
          { id: "Decision trees", value: "322km/h" },
          { id: "Naive Bayes", value: "1020hp" },
        ],
        value: "Model S",
      },
      {
        id: "Consensus",
        children: [
          {
            id: "Models diversity",
            children: [
              {
                id: "Different initializations",
                value: "478km",
              },
              {
                id: "Different parameter choices",
                value: "Zero 2.2s",
              },
              {
                id: "Different architectures",
                value: "9.9 qutor",
              },
              {
                id: "Different modeling methods",
                value: "1020hp",
              },
            ],
            value: "Model X",
          },
          {
            id: "Methods",
            children: [
              { id: "Classifier selection", value: "전력저장" },
              { id: "Classifier fusion", value: "연중무휴" },
            ],
            value: "PowerWall",
          },
          {
            id: "Common",
            children: [
              { id: "Bagging", value: "2.2s" },
              { id: "Boosting", value: "528km" },
              { id: "AdaBoost", value: "AWD" },
            ],
            value: "Model 3",
          },
        ],
        value: "Model X & 3",
      },

      {
        id: "Regression",
        children: [
          {
            id: "Multiple linear regression",
            value: "511km",
          },
          { id: "Partial least squares", value: "2100+" },
          {
            id: "Multi-layer feedforward neural network",
            value: "AWD",
          },
        ],
        value: "Model Y",
      },
    ],
    value: "Tesla",
  };
  const themeColor = "#73B3D1";

  const config = {
    data,
    nodeCfg: {
      size: 50,
      type: "circle",
      label: {
        style: {
          fill: "#fff",
        },
      },
      style: {
        fill: themeColor,
        stroke: "#0E1155",
        lineWidth: 2,
        strokeOpacity: 0.45,
        shadowColor: themeColor,
        shadowBlur: 25,
      },
      nodeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
          strokeOpacity: 1,
        },
      },
    },
    edgeCfg: {
      style: {
        stroke: themeColor,
        shadowColor: themeColor,
        shadowBlur: 20,
      },
      endArrow: {
        type: "triangle",
        fill: themeColor,
        d: 15,
        size: 8,
      },
      edgeStateStyles: {
        hover: {
          stroke: themeColor,
          lineWidth: 2,
        },
      },
    },
    behaviors: ["drag-canvas", "zoom-canvas", "drag-node"],
  };

  return (
    <>
      <div
        id="dom"
        style={{
          background: "none",
          height: "0px",
        }}
      >
        <RadialTreeGraph {...config} />
      </div>
    </>
  );
};
export default TreeChartComp;
