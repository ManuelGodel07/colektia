import React, { useState, useEffect } from "react";
import { db } from "../config/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import "../styles/training-dash.css";

const TrainingDash = () => {
const [candidates, setCandidates] = useState([]);
const [selectedId, setSelectedId] = useState("");
const [profileDetails, setProfileDetails] = useState(null);
const [skillGrade, setSkillGrade] = useState("");

const fetchCandidates = async () => {
    try {
    const snapshot = await getDocs(collection(db, "skillsprofile"));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    setCandidates(data);
    if (data.length > 0) setSelectedId(data[0].id);
    } catch (error) {
    console.log("Ocurrió el siguiente error: ", error);
    }
};

const fetchProfileDetails = async (name) => {
    if (!name) return;
    try {
    const q = query(collection(db, "candidates"), where("name", "==", name));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
        const doc = snapshot.docs[0];
        setProfileDetails(doc.data());
    } else {
        setProfileDetails(null);
    }
    } catch (error) {
    console.error("Error al obtener detalles del candidato:", error);
    }
};

useEffect(() => {
    fetchCandidates();
}, []);

useEffect(() => {
    const selectedCandidate = candidates.find((c) => c.id === selectedId);
    if (selectedCandidate?.name) {
    fetchProfileDetails(selectedCandidate.name);
    }
}, [selectedId, candidates]);

const selectedCandidate = candidates.find((c) => c.id === selectedId);

const radarData = selectedCandidate
    ? [
        { skill: "Escucha activa", value: (Number(selectedCandidate.autonomy) + Number(selectedCandidate.questionComprenhensiton)) / 2 },
        { skill: "Retención de la información", value: Number(selectedCandidate.goOver) },
        { skill: "Asertividad", value: Number(selectedCandidate.conflictResolution) },
        { skill: "Fluidez al hablar", value: Number(selectedCandidate.securityTalk) },
        { skill: "Seguimiento de instrucciones", value: ( Number(selectedCandidate.instructionComprenhensiton) + Number(selectedCandidate.tastExecution) + Number(selectedCandidate.autonomy)) / 3 },
        { skill: "Resolución de problemas", value: Number(selectedCandidate.corrections) },
        { skill: "Seguimiento de procedimientos", value: (Number(selectedCandidate.randc) + Number(selectedCandidate.logicSequense) + Number(selectedCandidate.goals)) / 3 },
        { skill: "Manejo de herramientas digitales", value: (Number(selectedCandidate.tecnErrors) + Number(selectedCandidate.systemNavigation)) / 2 },
        { skill: "Adaptabilidada tecnológica", value: Number(selectedCandidate.newInterface) }
    ]
    : [];

const calculateProgress = () => {
if (!selectedCandidate) return 0;

const keysToSum = [
    "autonomy", "conflictResolution", "corrections", "goOver", "goals",
    "instructionComprenhensiton", "logicSequense", "newInterface", "questionComprenhensiton",
    "randc", "securityTalk", "systemNavigation", "tastExecution", "tecnErrors", "wordRespect"
];

return keysToSum.reduce((acc, key) => acc + Number(selectedCandidate[key]), 0);
};
useEffect(() => {
if (selectedCandidate) {
    const progress = calculateProgress();
    setSkillGrade(progress);
}
}, [selectedCandidate]);

const getColorBySkillGrade = (grade) => {
    if (grade >= 1 && grade <= 89) return "#e74c3c";
    if (grade >= 90 && grade <= 134) return "#f1c40f";
    if (grade > 134) return "#2ecc71";
    return "#3498db";
};

return (
    <div className="mainBody">
    <h2 className="title">Dashboard de Capacitación</h2>
    {candidates.length > 0 ? (
        <>
        <div className="dropdown-container">
            <label htmlFor="candidate-select">Selecciona un candidato: </label>
            <select
            id="candidate-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            >
            {candidates.map((candidate) => (
                <option key={candidate.id} value={candidate.id}>
                {candidate.name}
                </option>
            ))}
            </select>
        </div>
        <div className="dashboard-card">
            <div className="details-column">
            <div className="profile-header">
                <h3>{selectedCandidate.name}</h3>
                <img src={ profileDetails?.img || "https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/ImageProfile%2FimageProfile.jpg?alt=media&token=8c546ea0-4604-4dfb-9ddd-fd302db9c13d" }
                alt="Foto de perfil"
                className="profile-image"
                />
            </div>
            {profileDetails ? (
                <div className="candidate-details">
                <p><strong>Edad:</strong> {profileDetails.age}</p>
                <p><strong>País:</strong> {profileDetails.country}</p>
                <p><strong>Correo:</strong> {profileDetails.email}</p>
                <p><strong>Cartera:</strong> {profileDetails.cartera}</p>
                <p><strong>Experiencia:</strong> {profileDetails.experience}</p>
                <p><strong>Grado académico:</strong> {profileDetails.grade}</p>
                <p><strong>Bitwarden:</strong> {profileDetails.bitwarden}</p>
                <p><strong>Nexus:</strong> {profileDetails.nexus}</p>
                <p><strong>Onboarding:</strong> {profileDetails.onboarding}</p>
                <p><strong>Nota curso 1:</strong> {profileDetails.note1}</p>
                <p><strong>Nota curso 2:</strong> {profileDetails.note2}</p>
                <p><strong>Comentario:</strong> {profileDetails.comment}</p>
                </div>
            ) : (
                <p>Cargando perfil...</p>
            )}
            </div>
            <div className="chart-column">
            <ResponsiveContainer width="100%" height={500}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#ccc" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#4e4e4e", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 12]} tick={{ fill: "#999" }} />
                <Radar
                    name={selectedCandidate.name}
                    dataKey="value"
                    stroke="#000"
                    fill={getColorBySkillGrade(skillGrade)}
                    fillOpacity={0.6}
                />
                <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
            <div className="progress-container">
                <h4>Score general de skills: {calculateProgress()}</h4>
            </div>
            </div>
        </div>
        </>
    ) : (
        <p>Cargando datos...</p>
    )}
    </div>
);
};

export default TrainingDash;