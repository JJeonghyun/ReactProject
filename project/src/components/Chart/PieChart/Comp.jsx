import { useEffect, useRef, useState } from "react";

import { Pie } from "@ant-design/plots";

const PieChartComp = () => {
  const data = [
    {
      type: "Model Y",
      value: 27,
    },
    {
      type: "Model S",
      value: 25,
    },
    {
      type: "Model 3",
      value: 18,
    },
    {
      type: "Model X",
      value: 15,
    },
    {
      type: "Cybertruck",
      value: 10,
    },
    {
      type: "Powerwall",
      value: 5,
    },
  ];

  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,

    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return (
    <>
      <Pie {...config} />
    </>
  );
};
export default PieChartComp;
