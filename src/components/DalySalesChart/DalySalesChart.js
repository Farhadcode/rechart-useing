import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';

const DalySalesChart = () => {
    const data = [
        {
            name: 'Company A',
            laptop: 2000,
            tv: 2400,
            amt: 2400,
        },
        {
            name: 'Company B',
            laptop: -3000,
            tv: 1398,
            amt: 2210,
        },
        {
            name: 'Company C',
            laptop: -2000,
            tv: -9800,
            amt: 2290,
        },
        {
            name: 'Company D',
            laptop: 2780,
            tv: 3908,
            amt: 2000,
        },
        {
            name: 'Company E',
            laptop: -1890,
            tv: 4800,
            amt: 2181,
        },
        {
            name: 'Company F',
            laptop: 2390,
            tv: -3800,
            amt: 2500,
        },
        {
            name: 'Company G',
            laptop: 3490,
            tv: 4300,
            amt: 2100,
        },
    ];
    return (

        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 50,
                left: 10,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="tv" fill="#8884d8" />

            <Bar dataKey="laptop" fill="#82ca9d" />
        </BarChart>
    );
};

export default DalySalesChart;