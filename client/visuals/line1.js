import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas
} from "react-vis";

export default function Line1() {
    return (
      <LineSeries
        data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
        style={{strokeLinejoin: "round"}}
      />
    );
}