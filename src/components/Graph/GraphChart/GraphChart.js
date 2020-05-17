import React, { useState, useEffect } from 'react';
import { LineChart } from '@opd/g2plot-react';
import coJSON from './co.json';

const GraphChart = () => {
  const [data, setData] = useState([]);

  const config = {
    description: {
      visible: false,
      text: '21312312312312312312',
    },
    padding: '40px',
    xField: 'year',
    yField: 'value',
    smooth: true,
    meta: {
      year: {
        alias: '년도',
      },
      value: {
        alias: '이산화탄소',
      },
    },
    animation: {
      enter: {
        animation: 'clipingWithData',
      },
    },
  };
  useEffect(() => {
    setData(coJSON);
  }, []);
  return <LineChart {...config} data={data} />;
};

export default GraphChart;
