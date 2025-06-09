import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { NavLink } from 'react-router-dom';
import '../styles/dash-boss-styles.css'

const performanceData = [ { name: "Exceeded", value: 24 }, { name: "Met", value: 46 }, { name: "Approached", value: 18 }, { name: "Did Not Meet", value: 12 },
];

const trainingData = [ { name: "Jan", value: 10 }, { name: "Feb", value: 12 }, { name: "Mar", value: 16 }, { name: "Apr", value: 13 }, { name: "May", value: 10 }, { name: "Jun", value: 13 }, { name: "Jul", value: 14 }, { name: "Aug", value: 16 }, { name: "Sep", value: 18 }, { name: "Oct", value: 25 }, { name: "Nez", value: 19 },
];

const tools = [ { name: 'Dashboard', path: '/TrDash' }, { name: 'Encuestas', path: '/Home' }, { name: 'Manual de capacitación', path: '/CandidateProfile' }];

const DashBoss = () => {
    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">TRAINING DASHBOARD</h1>
            <div className="dashboard-grid">
                <div className="card">
                    <h2 className="card-title">Performance Global del area</h2>
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
                            strokeDasharray="75, 100"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        </svg>
                        <span className="percentage">75%</span>
                    </div>
                    <p className="text-center">Completion Rate</p>
                </div>

                {/* Online Tools */}
                <div className="card">
                    <h2 className="card-title">Herramientas</h2>
                        <div className="tools-grid">
                            {tools.map((tool) => (
                            <NavLink
                                key={tool.path}
                                to={tool.path}
                                className={({ isActive }) =>
                                `tool-button ${isActive ? 'active-link' : ''}`
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
                    <BarChart data={trainingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#fc857b" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashBoss;