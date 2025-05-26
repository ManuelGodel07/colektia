import React, { useState, useEffect } from "react";
import { db } from "../config/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import '../styles/candidateprofile-styles.css';

const Skills = () => {
const [formData, setFormData] = useState({
    name: "",
    startDate: "",
    endDate: "",
    grade: "",
    age: "",
    email: "",
    phone: "",
    attitude: "",
    experience: "",
    nexus: "",
    bitwarden: "",
    inputa: "",
    inputb: "",
    recruit: "",
    onboarding: "",
    comment: "",
});
const [candidates, setCandidates] = useState([]);


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



return (
    <div className="flex-column">
        <div>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de contratación</th>
                    <th>Fecha de entrega</th>
                    <th>Grado escolar</th>
                    <th>Edad</th>
                    <th>Correo</th>
                    <th>Teléfono</th>
                    <th>Actitud</th>
                    <th>Experiencia</th>
                    <th>Nexus</th>
                    <th>Bitwarden</th>
                    <th>Input a</th>
                    <th>Input b</th>
                    <th>Encuesta reclu</th>
                    <th>Encuesta onboarding</th>
                    <th>Comentario</th>
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
                    <th key={key}>{key}</th>
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
        </div>
    </div>
);
};

export default Skills;