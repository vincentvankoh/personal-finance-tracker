import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from "react-vis";

export default function Bar1(props) {
  return (
    <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries
        data={[
          {x: 'January', y: 10},
          {x: 'February', y: 5},
          {x: 'March', y: 15}
        ]}
      />
      <VerticalBarSeries
        data={[
          {x: 'January', y: 12},
          {x: 'February', y: 2},
          {x: 'March', y: 11}
        ]}
      />
    </XYPlot>
  );
}