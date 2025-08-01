import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import '../styles/tr-dash-styles.css';

const COLORS = ["#0f1f44", "#f75f69", "#8a8c8d", "#1e3a5c", "#c7cbcf", "#b94028", "#a28bd4"];

const TrDash = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [cartera, setCartera] = useState([]);
  const [country, setCountry] = useState([]);
  const [viable, setViable] = useState([]);

  useEffect(() => {
    const fetchCandidateData = async () => {
      const colRef = collection(db, "candidates");
      const snapshot = await getDocs(colRef);
      const docs = snapshot.docs.map(doc => doc.data());

      const asistieron = docs.filter(d => d.attendance === "Asiste a Onboarding").length;
      const enEspera = docs.filter(d => d.attendance === "No se presenta a Onboarding").length;
      const waiting = docs.filter(d => d.attendance === "Citado y en espera").length;
      setAttendanceData([ { name: "Asiste a Onboarding", value: asistieron }, { name: "No asiste a Onboarding", value: enEspera }, { name: "Citado y en espera", value: waiting }])
      console.log(`Total de registros: ${docs.length}`)


      const Delivered = docs.filter(d => d.finalStatus === "Entregado a operaciones").length;
      const onboardingDead = docs.filter(d => d.finalStatus === "Baja en Onboarding").length;
      const myDate = docs.filter(d => d.finalStatus === "No se presenta a Onboarding").length;
      const quit = docs.filter(d => d.finalStatus === "Renuncia en Onboarding").length;
      const runAway = docs.filter(d =>d.finalStatus === "Abandono en Onboarding").length;
      const earlyDead = docs.filter(d => d.finalStatus === "Baja temprana").length;
      const hope = docs.filter(d => d.finalStatus === "Citado y en espera").length;
      setStatusData([ { name: "Entregado a operaciones", value: Delivered }, { name: "Renuncia en Onboarding", value: quit }, { name: "Baja temprana", value: earlyDead }, { name: "Baja en Onboarding", value: onboardingDead }, { name: "Abandono en Onboarding", value: runAway }, { name: "No se presenta a Onboarding", value: myDate }, { name: "Citado y en espera", value: hope }])

      const santander = docs.filter(d => d.cartera === "Banco Santander" && d.finalStatus === "Entregado a operaciones").length;
      const nu = docs.filter(d => d.cartera === "Nu México" && d.finalStatus === "Entregado a operaciones").length;
      const Nuco = docs.filter(d => d.cartera === "Nuco" && d.finalStatus === "Entregado a operaciones").length;
      const andes = docs.filter(d => d.cartera === "Caja los Andes" && d.finalStatus === "Entregado a operaciones").length;
      const Falabella = docs.filter(d => d.cartera === "Falabella" && d.finalStatus === "Entregado a operaciones").length;
      const LaPolar = docs.filter(d => d.cartera === "La Polar" && d.finalStatus === "Entregado a operaciones").length;
      setCartera([ { name: "Banco Santander", value: santander }, { name: "NU México", value: nu }, { name: "Nuco", value: Nuco }, { name: "Caja los Andes", value: andes }, { name: "Falabella", value: Falabella }, { name: "La Polar", value: LaPolar }])
      console.log(`----`)
      console.log(`Cartera: ${nu} ${Nuco}`)


      const Colombia = docs.filter(d => d.country === "Colombia" && d.finalStatus === "Entregado a operaciones").length;
      const Mexico = docs.filter(d => d.country === "México" && d.finalStatus === "Entregado a operaciones").length;
      const Perú = docs.filter(d => d.country === "Perú" && d.finalStatus === "Entregado a operaciones").length;
      const Chile = docs.filter(d => d.country === "Chile" && d.finalStatus === "Entregado a operaciones").length;
      setCountry([ { name: "Colombia", value: Colombia }, { name: "México", value: Mexico }, { name: "Perú", value: Perú }, { name: "Chile", value: Chile }])

      const notViable = docs.filter(d => d.viability === "No viable").length;
      const viable = docs.filter(d => d.viability === "Viable").length;
      const viableCO = docs.filter(d => d.viability === "Viable con AO").length;

      setViable([ { name: "No viable", value: notViable }, { name: "Viable", value: viable }, { name: "Viable con AO", value: viableCO }])


      console.log(`Cartera: ${Colombia} ${Mexico}`)
    };

    fetchCandidateData();
  }, []);

return (
  <div className="dashboard-container">
    <div className="chart-card">
      <h3>Asistencia al Onboarding</h3>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
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
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>

    <div className="chart-card">
      <h3>Estatus finales de DC's</h3>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          data={statusData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          label
        >
          {statusData.map((_, index) => (
            <Cell key={`cell-status-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>

    <div className="chart-card">
      <h3>Entregados a OP'S por Campaña</h3>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          data={cartera}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          label
        >
          {cartera.map((_, index) => (
            <Cell key={`cell-cartera-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>

    <div className="chart-card">
      <h3>Entregados a OPS VS País</h3>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          data={country}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          label
        >
          {country.map((_, index) => (
            <Cell key={`cell-country-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>

    <div className="chart-card">
      <h3>Viables</h3>
      <PieChart width={250} height={250}>
        <Pie
          dataKey="value"
          data={viable}
          cx="50%"
          cy="50%"
          outerRadius={80}
          innerRadius={40}
          label
        >
          {viable.map((_, index) => (
            <Cell key={`cell-viable-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  </div>
);
};

export default TrDash;