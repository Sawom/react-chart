import React from 'react';
import {Tooltip, Legend, LineChart, CartesianGrid,  Line, XAxis, YAxis } from 'recharts';
const data = [
  {
    name: 'Company A',
    Mobile: 4000,
    Price: 2400,
    amt: 2400,
  },
  {
    name: 'Company B',
    Mobile: 3000,
    Price: 1398,
    amt: 2210,
  },
  {
    name: 'Company C',
    Mobile: 2000,
    Price: 9800,
    amt: 2290,
  },
  {
    name: 'Company D',
    Mobile: 2780,
    Price: 3908,
    amt: 2000,
  },
  {
    name: 'Company E',
    Mobile: 1890,
    Price: 4800,
    amt: 2181,
  },
  {
    name: 'Company F',
    Mobile: 2390,
    Price: 3800,
    amt: 2500,
  },
  {
    name: 'Company G',
    Mobile: 3490,
    Price: 4300,
    amt: 2100,
  },
];
const Linechart = () => {
    return (
        
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Mobile" stroke="#82ca9d" />
        </LineChart>
    );
};

export default Linechart;