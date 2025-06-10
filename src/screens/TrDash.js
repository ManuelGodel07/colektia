import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import '../styles/tr-dash-styles.css';

const COLORS = ["#0f1f44", "#d3d3d3", "#fc857b", "#82ca9d", "#8884d8", "#ffc658", "#a28bd4"];

const TrDash = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [statusData, setStatusData] = useState([]);

  useEffect(() => {
    const fetchCandidateData = async () => {
      const colRef = collection(db, "candidates");
      const snapshot = await getDocs(colRef);
      const docs = snapshot.docs.map(doc => doc.data());

      // Asistencia
      const asistieron = docs.filter(d => d.attendance === "Si").length;
      const enEspera = docs.filter(d => d.attendance === "No").length;
      setAttendanceData([
        { name: "Asiste a Onboarding", value: asistieron },
        { name: "Citado y en espera", value: enEspera }
      ]);

      // Status
      const statusCounts = {};
      docs.forEach(d => {
        const status = d.status;
        if (status) {
          statusCounts[status] = (statusCounts[status] || 0) + 1;
        }
      });

      const statusArray = Object.keys(statusCounts).map(key => ({
        name: key,
        value: statusCounts[key]
      }));

      setStatusData(statusArray);
    };

    fetchCandidateData();
  }, []);

  return (
    <div className="chart-container">
      <h3>Asistencia al Onboarding</h3>
      <PieChart width={300} height={250}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={attendanceData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          label
        >
          {attendanceData.map((_, index) => (
            <Cell key={`cell-attendance-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconSize={10} />
      </PieChart>

      <h3>Status finales de DC's</h3>
      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={statusData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          innerRadius={50}
          label
        >
          {statusData.map((_, index) => (
            <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend iconSize={10} />
      </PieChart>
    </div>
  );
};

export default TrDash;