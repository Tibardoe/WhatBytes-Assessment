"use client";

import {
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

type userScoreProp = {
  userScore: number | undefined;
};

export default function ComparisonGraph({ userScore }: userScoreProp) {
  const data = [
    { xAxis: 0, numberOfStudents: 1 },
    { xAxis: 10, numberOfStudents: 2 },
    { xAxis: 20, numberOfStudents: 3 },
    { xAxis: 30, numberOfStudents: 4 },
    { xAxis: 40, numberOfStudents: 6 },
    { xAxis: 45, numberOfStudents: 7 },
    { xAxis: 50, numberOfStudents: 9 },
    { xAxis: 55, numberOfStudents: 6 },
    { xAxis: 60, numberOfStudents: 4 },
    { xAxis: 70, numberOfStudents: 3 },
    { xAxis: 85, numberOfStudents: 2 },
    { xAxis: 90, numberOfStudents: 3 },
    { xAxis: 100, numberOfStudents: 1 },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis
          dataKey="xAxis"
          type="number"
          domain={[0, 100]}
          ticks={[0, 25, 50, 75, 100]}
        />
        <Tooltip />
        <ReferenceLine x={userScore} label="your percentile" />
        <Line
          type="monotone"
          stroke="#7E57C2"
          dot={{ r: 4 }}
          activeDot={{ r: 10 }}
          dataKey="numberOfStudents"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
