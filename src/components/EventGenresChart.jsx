import React, { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);

  // Define genres to look for in event summaries
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  // Function to process event data and count genres
  const getData = () => {
    const data = genres.map((genre) => {
      // Filter events where the summary contains the genre term
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    setData(data);
  };

  // Use effect to trigger data calculation when events prop changes
  useEffect(() => {
    getData();
  }, [events]);

  // Function to render customized labels with percentage
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
