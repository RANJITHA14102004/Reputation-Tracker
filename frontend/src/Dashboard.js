import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";

import "./Dashboard.css";  // <-- Add CSS import here

export default function Dashboard(){
  const { platform } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/" + platform)
      .then(r => r.json())
      .then(setData);
  }, [platform]);

  if(!data) return <h2>Loading...</h2>;

  const pieData = [
    { name: "Positive", value: data.positives },
    { name: "Negative", value: data.negatives },
    { name: "Neutral", value: data.neutrals }
  ];

  const COLORS = ["#00aa55", "#ff4444", "#8888ff"];

  const result = 
    (data.positives > data.negatives && data.satisfaction > 3)
      ? "GOOD"
      : "NEEDS IMPROVEMENT";

  // 🔽🔽🔽 Place your return block here
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">{platform.toUpperCase()} Dashboard</h1>

      <h3 className="section-title">Textual Summary:</h3>

      <div className="summary-box">
        <p>Positive: {data.positives}</p>
        <p>Negative: {data.negatives}</p>
        <p>Neutral: {data.neutrals}</p>
        <p>Satisfaction Score: {data.satisfaction}</p>
        <p><b>Market Result: {result}</b></p>
      </div>

      <div className="charts-container">
        
        <div className="chart-box">
          <h3 className="section-title">Pie Chart</h3>
          <PieChart width={300} height={300}>
            <Pie data={pieData} dataKey="value" outerRadius={100}>
              {pieData.map((e, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className="chart-box">
          <h3 className="section-title">Bar Chart</h3>
          <BarChart width={400} height={300} data={pieData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
