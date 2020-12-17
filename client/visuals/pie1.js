import React from 'react';

import {
  RadialChart
} from "react-vis";

export default function Pie1(){
  return(
    <RadialChart
        data={[{angle: 1}, {angle: 5}, {angle: 2}]}
        width={300}
        height={300} 
    />
  )
}