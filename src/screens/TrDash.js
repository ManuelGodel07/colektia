import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

const COLORS = ["#fc857b", "#d3d3d3"];

const TrDash = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchOnboardingData = async () => {
        const colRef = collection(db, "candidates");
        const snapshot = await getDocs(colRef);
        const docs = snapshot.docs.map(doc => doc.data());

        const asistieron = docs.filter(d => d.estado === "Asiste").length;
        const enEspera = docs.filter(d => d.estado === "Citados").length;

        setData([
            { name: "Asiste a Onboarding", value: asistieron },
            { name: "Citado y en espera", value: enEspera }
        ]);
        };

        fetchOnboardingData();
    }, []);

    return (
        <div className="chart-container">
        <PieChart width={250} height={250}>
            <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            fill="#8884d8"
            label
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
        </div>
    );
};

export default TrDash;