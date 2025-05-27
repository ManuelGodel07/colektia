import React, { useState, useEffect } from "react";
import { db } from "../config/firestore";
import { collection, addDoc, getDocs, doc, updateDoc, } from "firebase/firestore";
import "../styles/candidateprofile-styles.css";

const CandidateProfile = () => {
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
    country: "",
    cartera: "",
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
    await addDoc(collection(db, "candidates"), formData);
    alert("Candidato almacenado!");
    fetchCandidates();
    } catch (e) {
    console.error("Error adding document: ", e);
    }
};

const fetchCandidates = async () => {
    const snapshot = await getDocs(collection(db, "candidates"));
    const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    }));
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
            <th>Country</th>
            <th>Cartera</th>
            <th>Encuesta reclu</th>
            <th>Encuesta onboarding</th>
            <th>Comentario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            {Object.keys(formData).map((key) => (
                <td key={key}>
                <input
                    type={
                    key.includes("Date")
                        ? "date"
                        : key === "age"
                        ? "number"
                        : key === "email"
                        ? "email"
                        : key === "phone"
                        ? "tel"
                        : "text"
                    }
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
            <th>Actualizar</th>
            </tr>
        </thead>
        <tbody>
            {candidates.map((candidate) => (
            <tr key={candidate.id}>
                {Object.keys(formData).map((key) => (
                <td key={key}>
                    {key === "comment" ? (
                    <input
                        type="text"
                        value={candidate.comment || ""}
                        onChange={(e) => {
                        const updatedCandidates = candidates.map((c) =>
                            c.id === candidate.id
                            ? { ...c, comment: e.target.value }
                            : c
                        );
                        setCandidates(updatedCandidates);
                        }}
                    />
                    ) : (
                    candidate[key]
                    )}
                </td>
                ))}
                <td>
                <button
                    onClick={async () => {
                    try {
                        const candidateRef = doc(db, "candidates", candidate.id);
                        await updateDoc(candidateRef, {
                        comment: candidate.comment,
                        });
                        alert("Comentario actualizado!");
                    } catch (error) {
                        console.error("Error updating comment:", error);
                    }
                    }}
                >Actualizar</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </div>
);
};

export default CandidateProfile;