
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationItem } from "../../utility/localstorage";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";


const Statistics = () => {
    const [remaining, setRemaining] = useState([]);
    const allCategoryList = useLoaderData();
    useEffect(() => {
        const donationItems = getStoredDonationItem();
        setRemaining(donationItems);
    }, []);
    let percentageCalculated = ((remaining.length / allCategoryList.length) * 100);
    let percentageCalculatedFixed = percentageCalculated;
    let reTotal = (100 - percentageCalculated)
    const data = [
        { name: "Total Donation", value: reTotal },
        { name: "Your Donation", value: percentageCalculatedFixed },
    ];
    // console.log(reTotal, percentageCalculatedFixed)

    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="py-20 mx-auto flex justify-center">
            <ResponsiveContainer width={400} height={400} className="text-center">
                            <PieChart width={400} height={400}>
                                <Legend layout="horizontal" verticalAlign="bottom" align="bottom" />
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value">
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;