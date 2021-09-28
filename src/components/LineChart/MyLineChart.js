import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {

    const data = [
        {
            name: "Company A",
            phone: 4000,
            leptop: 2400,
            amt: 2400
        },
        {
            name: "Company B",
            phone: 3000,
            leptop: 1398,
            amt: 2210
        },
        {
            name: "Company C",
            phone: 2000,
            leptop: 9800,
            amt: 2290
        },
        {
            name: "Company D",
            phone: 2780,
            leptop: 3908,
            amt: 2000
        },
        {
            name: "Company E",
            phone: 1890,
            leptop: 4800,
            amt: 2181
        },
        {
            name: "Company F",
            phone: 2390,
            leptop: 3800,
            amt: 2500
        },
        {
            name: "Company G",
            phone: 3490,
            leptop: 4300,
            amt: 2100
        }
    ];
    return (

        <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="leptop"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="phone" stroke="#82ca9d" />
        </LineChart>
    );
};

export default MyLineChart;