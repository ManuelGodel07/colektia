import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { NavLink } from "react-router-dom";
import "../styles/dash-boss-styles.css";

const tools = [ { name: "Dashboard", path: "/TrDash" }, { name: "Encuestas", path: "/Home" }, { name: "Manual de capacitación", path: "/CandidateProfile" }
];

const normalValues = { a: 1, b: 2, c: 3, d: 4 };
const specialValues = { a: 4, b: 0 };


function calculateGlobalScore(record) {
    const values = Object.keys(record).filter((key) => !isNaN(key)).map((key) => {
        const firstChar = record[key].trim()[0].toLowerCase();
        
        if ([14, 15, 16].includes(parseInt(key))) {
            return specialValues[firstChar] ?? 0;
        }
        return normalValues[firstChar] ?? 0;
    });

    if (values.length === 0) return 0;

    const avg = values.reduce((acc, val) => acc + val, 0) / values.length;
    return (avg / 4) * 10;
}

const DashBoss = () => {
    const [data, setData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("");
    const [monthlyAverage, setMonthlyAverage] = useState(0);
    const [months, setMonths] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [chartData, setChartData] = useState([]);

    const getAllDocuments = async (docu) => {
        const querySnapshot = await getDocs(collection(db, docu));
        const newData = [];
        querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
        }
    );


    const withDate = newData.filter((item) => item.fecha);

    const monthSet = new Set(
    withDate.map((item) => {
        const date = new Date(item.fecha);
        return `${date.getFullYear()}-${date.getMonth() + 1}`;
    })
    );
    setMonths([...monthSet]);
    setData(withDate);


    if (monthSet.size > 0) {
        setSelectedMonth([...monthSet][0]);
    }


    const counts = {};
    withDate.forEach((item) => {
        const date = new Date(item.fecha);
        const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        counts[key] = (counts[key] || 0) + 1;
    });


    const chart = Object.keys(counts).sort().map((key) => {
            const [year, month] = key.split("-");
            const date = new Date(year, month - 1);
            return {
            name: date.toLocaleString("es-MX", { month: "short" }),
            value: counts[key]
            };
        });
        setChartData(chart);
    };

    useEffect(() => {
        if (selectedMonth && data.length > 0) {
        const filtered = data.filter((item) => {
            const date = new Date(item.fecha);
            const key = `${date.getFullYear()}-${date.getMonth() + 1}`;
            return key === selectedMonth;
        });

    setFilteredList(
        filtered.map((record) => ({
        name: record.Name || "Sin nombre",
        score: calculateGlobalScore(record)
        }))
    );

    if (filtered.length === 0) {
        setMonthlyAverage(0);
    } else {
        const avg =
        filtered.reduce((acc, record) => acc + calculateGlobalScore(record), 0) /
        filtered.length;
        setMonthlyAverage(avg);
    }
    }
    }, [selectedMonth, data]);

    useEffect(() => {
        getAllDocuments("trainingCk");
    }, []);

    return (
        <div className="dashboard-container">
        <h1 className="dashboard-title">TRAINING DASHBOARD</h1>
        <div className="dashboard-grid">
            <div className="card">
            <h2 className="card-title">
                Promedio mensual en encuestas de satisfacción de onboarding
            </h2>

            <div className="flex justify-center mb-4 gap-2">
                <select
                className="border px-3 py-1 rounded"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                >
                {months.map((month) => {
                    const [year, m] = month.split("-");
                    const date = new Date(year, m - 1);
                    return (
                    <option key={month} value={month}>
                        {date.toLocaleString("es-MX", { month: "long", year: "numeric" })}
                    </option>
                    );
                })}
                </select>

                <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800"
                >
                Ver detalles
                </button>
            </div>

            <div className="circle-chart">
                <svg viewBox="0 0 36 36">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle-progress"
                    strokeDasharray={`${monthlyAverage * 10}, 100`}
                    d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                </svg>
                <span className="percentage">
                {monthlyAverage.toFixed(1)} / 10
                </span>
            </div>
            <p className="text-center">Promedio del mes seleccionado</p>
            </div>

            <div className="card">
            <h2 className="card-title">Herramientas</h2>
            <div className="tools-grid">
                {tools.map((tool) => (
                <NavLink
                    key={tool.path}
                    to={tool.path}
                    className={({ isActive }) =>
                    `tool-button ${isActive ? "active-link" : ""}`
                    }
                >
                    {tool.name}
                </NavLink>
                ))}
            </div>
            </div>

            <div className="card card-wide">
            <h2 className="card-title">TRAINING COMPLETED</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#fc857b" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>

        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6">
                <h2 className="text-lg font-bold mb-4">
                Detalles de calificaciones ({filteredList.length} registros)
                </h2>
                <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Nombre</th>
                    <th className="border px-4 py-2">Calificación</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map((r, idx) => (
                    <tr key={idx}>
                        <td className="border px-4 py-2">{r.name}</td>
                        <td
                        className={`border px-4 py-2 font-bold ${
                            r.score < 6
                            ? "text-red-500"
                            : r.score < 8
                            ? "text-yellow-500"
                            : "text-green-600"
                        }`}
                        >
                        {r.score.toFixed(1)} / 10
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>

                <div className="flex justify-end mt-4">
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800"
                >
                    Cerrar
                </button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default DashBoss;