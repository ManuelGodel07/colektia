import React, { useState, useEffect } from "react";
import { db } from "../config/firestore";
import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import "../styles/candidateprofile-styles.css";

const CandidateProfile = () => {
  const [formData, setFormData] = useState({
    generation: "",
    name: "",
    phone: "",
    grade: "",
    age: "",
    experience: "",
    country: "",
    cartera: "",
    recruit: "",
    trainer: "Cecilia Mejia",
    startDate: "",
    attendance: "",
    HiringDate: "",
    endDate: "",
    finalStatus: "",
    deadDate: "",
    motiveDead: "",
    email: "",
    passwordEmail: "",
    credentialsRequest: "",
    preTest: "",
    posTest: "",
    VPN: "",
    passVPN: "",
    note1: "",
    note2: "",
    Contract: "",
    viability: "",
    comment: "",
    img: ""
  });

  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({});
  const [editingCell, setEditingCell] = useState(null);
  const [cellValue, setCellValue] = useState("");

  const fieldLabels = {
    generation: "Generación",
    trainer: "Capacitador",
    attendance: "Asistencia a onboarding",
    finalStatus: "Estatus final",
    deadDate: "Fecha de baja",
    motiveDead: "Motivo de baja",
    name: "Nombre",
    startDate: "Fecha de inicio",
    endDate: "Fecha de entrega a operaciones",
    grade: "Escolaridad",
    age: "Edad",
    email: "Usuario Nexus",
    passwordEmail: "Contraseña Nexus",
    phone: "Teléfono",
    HiringDate: "Fecha de contratación",
    experience: "Experiencia",
    Contract: "Contratación",
    viability: "viabilidad",
    credentialsRequest: "Solicitud de credenciales",
    country: "País",
    cartera: "Cartera",
    preTest: "Pre-Test",
    posTest: "TSAT",
    note1: "Nota curso 1",
    note2: "Nota curso 2",
    recruit: "Reclutador",
    passVPN: "Pass VPN",
    VPN: "VPN",
    comment: "Comentarios",
    img: "Imagen"
  };

  const selectOptions = {
    grade: [
      "Preparatoria trunca",
      "Preparatoria concluida",
      "Licenciatura trunca",
      "Licenciatura concluida"
    ],
    experience: [
      "Sin experiencia",
      "Experiencia face to face",
      "1 mes en call center",
      "3 meses en call center",
      "6 meses en call center",
      "1 año en call center",
      "Mas de un año en call center"
    ],
    country: ["Colombia", "Chile", "México", "Peru"],
    cartera: [
      "Banco Santander",
      "Caja los Andes",
      "La Polar",
      "Nuco",
      "Falabella",
      "Nu México",
      "Multicartera"
    ],
    recruit: ["Manuel Ruiz", "Carlos Monroy", "Yndira Rodriguez"],
    attendance: [
      "Citado y en espera",
      "Asiste a Onboarding",
      "No se presenta a Onboarding"
    ],
    finalStatus: [
      "Baja en Onboarding",
      "No se presenta a Onboarding",
      "Renuncia en Onboarding",
      "Abandono en Onboarding",
      "Entregado a operaciones",
      "Baja temprana",
      "Citado y en espera"
    ],
    motiveDead: [
      "Problemas personales / familiares",
      "Desincorporado por rendimiento",
      "-"
    ],
    credentialsRequest: ["Si", "No"],
    Contract: ["Con contrato", "Sin contrato", "Contrato Anulado"],
    viability: ["Viable", "No viable", "Viable con AO"]
  };

  const filterableFields = [
    "generation", "name", "grade", "age", "experience", "country", "cartera", "recruit", "trainer", "attendance",
    "startDate", "HiringDate", "endDate", "finalStatus", "deadDate", "motiveDead", "credentialsRequest", "posTest", "VPN", "passVPN", "note1", "note2", "Contract", "viability"
  ];

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
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    data.sort((a, b) => parseInt(a.generation) - parseInt(b.generation));
    setCandidates(data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleCellClick = (candidateId, key, value) => {
    setEditingCell(`${candidateId}-${key}`);
    setCellValue(value);
  };

  const handleCellSave = async (candidateId, key) => {
    try {
      const docRef = doc(db, "candidates", candidateId);
      await updateDoc(docRef, { [key]: cellValue });
      const updatedCandidates = candidates.map((c) =>
        c.id === candidateId ? { ...c, [key]: cellValue } : c
      );
      setCandidates(updatedCandidates);
      setEditingCell(null);
    } catch (error) {
      console.error("Error updating cell:", error);
    }
  };

  const getUniqueValues = (field) => {
    return [...new Set(candidates.map((c) => c[field]).filter((v) => v))];
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredCandidates = candidates.filter((candidate) => {
    return Object.entries(filters).every(([field, value]) => {
      return value === "" || candidate[field] === value;
    });
  });

  return (
    <div className="container">
      <div className="flex-column">
        <div className="inputTable">
          <h1>Por favor agrega a tus nuevos debt's en la siguiente tabla</h1>
          <table border="1" cellPadding="5" cellSpacing="0">
            <thead>
              <tr>
                {Object.keys(formData).map((key) => (
                  <th key={key}>{fieldLabels[key] || key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.keys(formData).map((key) => (
                  <td key={key}>
                    {selectOptions[key] ? (
                      <select name={key} value={formData[key]} onChange={handleChange}>
                        <option value="">Selecciona una opción</option>
                        {selectOptions[key].map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={
                          key.includes("Date") ? "date" :
                          key === "age" ? "number" :
                          key === "email" ? "email" :
                          key === "phone" ? "tel" :
                          "text"
                        }
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <button onClick={handleSave}>Guardar</button>
        </div>
        <div>
          <h3>Lista de Candidatos</h3>
          <div className="cartel" style={{ maxHeight: "80vh", overflowY: "auto" }}>
            <table border="1" cellPadding="5" cellSpacing="0">
              <thead>
                <tr>
                  {Object.keys(formData).map((key) => (
                    <th key={key} className="sticky-header">
                      <div>{fieldLabels[key] || key}</div>
                      {filterableFields.includes(key) && (
                        <select
                          value={filters[key] || ""}
                          onChange={(e) => handleFilterChange(key, e.target.value)}
                        >
                          <option value="">Todos</option>
                          {getUniqueValues(key).map((val) => (
                            <option key={val} value={val}>{val}</option>
                          ))}
                        </select>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id}>
                    {Object.keys(formData).map((key) => {
                      const isEditing = editingCell === `${candidate.id}-${key}`;
                      return (
                        <td key={key}>
                          {isEditing ? (
                            <input
                              type="text"
                              value={cellValue}
                              onChange={(e) => setCellValue(e.target.value)}
                              onBlur={() => handleCellSave(candidate.id, key)}
                              autoFocus
                            />
                          ) : (
                            <>
                              {candidate[key]}
                              <button
                                onClick={() => handleCellClick(candidate.id, key, candidate[key] || "")}
                                style={{
                                  marginLeft: "5px",
                                  fontSize: "0.7rem",
                                  background: "none",
                                  border: "none",
                                  cursor: "pointer",
                                  color: "#888",
                                }}
                              >
                                ✎
                              </button>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
