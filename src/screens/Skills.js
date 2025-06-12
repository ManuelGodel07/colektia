import React, { useState, useEffect } from "react";
import { db } from "../config/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import '../styles/candidateprofile-styles.css';

const Skills = () => {
    const [formData, setFormData] = useState({
        name: "",
        questionComprenhensiton: "",
        wordRespect: "",
        goOver: "",
        conflictResolution: "",
        securityTalk: "",
        instructionComprenhensiton: "",
        tastExecution: "",
        autonomy: "",
        corrections: "",
        randc: "",
        logicSequense: "",
        goals: "",
        systemNavigation: "",
        tecnErrors: "",
        newInterface: "",
    });
    const [candidates, setCandidates] = useState([]);

    const fieldLabels={
        name: "Nombre",
        questionComprenhensiton: "Comprensión de preguntas",
        wordRespect: "Respeto al turno de palabra",
        goOver: "Necesidad de repaso",
        conflictResolution: "Resolución de conflictos",
        securityTalk: "Seguridad al hablar",
        instructionComprenhensiton: "Comprensión de instrucciones",
        tastExecution: "Ejecucción de tareas",
        autonomy: "Autonomía",
        corrections: "Acciones correctivas",
        randc: "Lectura y compresión",
        logicSequense: "Secuencia lógica",
        goals: "Cumplimiento",
        systemNavigation: "Navegación del sistema",
        tecnErrors: "Solución de errores técnicos",
        newInterface: "Aprendizaje de nuevas interfaces",
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await addDoc(collection(db, "skillsprofile"), formData);
            alert("Candidato almacenado!");
            fetchCandidates();
        } catch (e) {
            console.error("Se presento el siguiente error: ", e);
        }
    };

    const fetchCandidates = async () => {
        const snapshot = await getDocs(collection(db, "skillsprofile"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCandidates(data);
    };

    useEffect(() => {
    fetchCandidates();
    }, []);

    const handleGuide=(pdf)=>{
        if (pdf) {
            window.open(pdf, '_blank');
        } else {
            console.error("URL del PDF no proporcionada");
        }
    }

    return (
        <div className="flex-column">
            <div>
                <table border="1" cellPadding="5" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Comprensión de preguntas</th>
                        <th>Respeto al turno de palabra</th>
                        <th>Necesidad de repaso</th>
                        <th>Resolución de conflictos</th>
                        <th>Seguridad al hablar</th>
                        <th>Comprensión de instrucciones</th>
                        <th>Ejecucción de tareas</th>
                        <th>Autonomía</th>
                        <th>Acciones correctivas</th>
                        <th>Lectura y compresión</th>
                        <th>Secuencia lógica</th>
                        <th>Cumplimiento</th>
                        <th>Navegación del sistema</th>
                        <th>Solución de errores técnicos</th>
                        <th>Aprendizaje de nuevas interfaces</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {Object.keys(formData).map((key, index) => (
                        <td key={key}>
                            <input
                            type={index === 0 ? "text" : "number"}
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            />
                        </td>
                        ))}
                    </tr>
                    </tbody>
                </table>
                <button onClick={handleSave}>Guardar</button>
            </div>
            <div>
                <h3>Lista de Candidatos</h3>
                <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                    <tr>
                    {Object.keys(formData).map((key) => (
                        <th key={key}>{fieldLabels[key] || key}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                    <tr key={candidate.id}>
                        {Object.keys(formData).map((key) => (
                        <td key={key}>{candidate[key]}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
                </table>
                                <button onClick={()=>{handleGuide("https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/Kardex%20de%20Onboarding%20-%20RUBRICA%20EVALUACI%C3%93N%20SOFT%20(1).pdf?alt=media&token=d99d0c61-0407-4687-a1ee-3ebfce77b448")}}>💡</button>
            </div>
        </div>
    );
};

export default Skills;