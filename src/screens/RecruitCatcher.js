import React,{useState} from "react";
import "../styles/recruitcatcher.css";
import { Card, CardHeader, CardContent } from "../components/Card.jsx";
import { Input } from "../components/Input";
import { MyButton } from "../components/MyButton";
import { MyLabel } from "../components/MyLabel";
import { MySelect, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/MySelect";
const preguntas = [
    { id: 1, categoria: 'Demo', texto: 'Fecha de entrevista?', tipo: 'date' },
    { id: 2, categoria: 'Demo', texto: 'Fue puntual?', tipo: 'radio', opciones: ['Si', 'No'] },
    { id: 3, categoria: 'Demo', texto: '¿Cuál es tu nombre?', tipo: 'text' },
    { id: 4, categoria: 'Demo', texto: '¿Cuántos años tienes?', tipo: 'number', min: 16, max: 99 },
    { id: 5, categoria: 'Demo', texto: 'Código postal', tipo: 'number' },
    { id: 6, categoria: 'Demo', texto: '¿Cuál es tu máximo grado de estudios?', tipo: 'select', opciones: ['Bachillerato trunco', 'Bachillerato concluido', 'Licenciatura trunca', 'Licenciatura concluida'] },
    { id: 7, categoria: 'Demo', texto: '¿Cuál es tu género?', tipo: 'radio', opciones: ['Masculino', 'Femenino'] },
    { id: 8, categoria: 'Demo', texto: '¿Cuál es su situación laboral actual?', tipo: 'select', opciones: ['Empleado', 'Desempleado'] },
    { id: 9, categoria: 'Exp', texto: '¿Tienes experiencia laborando en call center?', tipo: 'radio', opciones: ['Si', 'No'] },
    { id: 10, categoria: 'Exp', texto: '¿Tienes experiencia laborando en call center del área?', tipo: 'radio', opciones: ['Si', 'No'] },
    { id: 11, categoria: 'Comu', texto: '¿Qué técnicas utilizas para generar empatía?', tipo: 'number', min: 1, max: 4 },
    { id: 12, categoria: 'Comu', texto: '¿Cómo aseguras el cumplimiento de un acuerdo de pago?', tipo: 'number', min: 1, max: 4 },
    { id: 13, categoria: 'Exp', texto: '¿Deudas en algún banco?', tipo: 'radio', opciones: ['Si', 'No'] },
    { id: 14, categoria: 'Exp', texto: '¿En qué licenciatura?', tipo: 'text' }
    ];

    const preguntasPorPagina = 2;

    const RecruitCatcher = () => {
    const [paginaActual, setPaginaActual] = useState(0);
    const [respuestas, setRespuestas] = useState({});

    const totalPaginas = Math.ceil(preguntas.length / preguntasPorPagina);

    const handleChange = (id, value) => {
        setRespuestas(prev => ({ ...prev, [id]: value }));
    };

    const handleSiguiente = () => {
        if (paginaActual < totalPaginas - 1) setPaginaActual(paginaActual + 1);
    };

    const handleAnterior = () => {
        if (paginaActual > 0) setPaginaActual(paginaActual - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Respuestas del candidato:', respuestas);
        alert('Respuestas guardadas en consola');
    };

    return (
        <div className="p-6">
        <form onSubmit={handleSubmit}>
            <div className="overflow-hidden">
                <div>Formulario de reclutamiento</div>
                <div
                    className="flex"
                    style={{
                    transform: `translateX(-${paginaActual * 100}%)`,
                    width: `${totalPaginas * 100}%`,
                    }}
                >
                    {Array.from({ length: totalPaginas }).map((_, index) => {
                    const grupo = preguntas.slice(
                        index * preguntasPorPagina,
                        (index + 1) * preguntasPorPagina
                    );
                    return (
                        <div key={index} className="page-group">
                        {grupo.map((q) => (
                            <div key={q.id} className="card">
                            <h4>{q.texto}</h4>

                            {q.tipo === 'text' || q.tipo === 'number' || q.tipo === 'date' ? (
                                <input
                                type={q.tipo}
                                min={q.min || undefined}
                                max={q.max || undefined}
                                value={respuestas[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                placeholder={q.tipo === 'text' ? "Escribe la respuesta" : ""}
                                />
                            ) : null}

                            {q.tipo === 'radio' && q.opciones ? (
                                <div className="opciones">
                                {q.opciones.map((op, idx) => (
                                    <label key={idx}>
                                    <input
                                        type="radio"
                                        name={`resp-${q.id}`}
                                        value={op}
                                        checked={respuestas[q.id] === op}
                                        onChange={(e) => handleChange(q.id, e.target.value)}
                                    /> {op}
                                    </label>
                                ))}
                                </div>
                            ) : null}

                            {q.tipo === 'select' && q.opciones ? (
                                <select
                                value={respuestas[q.id] || ""}
                                onChange={(e) => handleChange(q.id, e.target.value)}
                                >
                                <option value="">Seleccione una opción</option>
                                {q.opciones.map((op, idx) => (
                                    <option key={idx} value={op}>{op}</option>
                                ))}
                                </select>
                            ) : null}

                            </div>
                        ))}
                        </div>
                    );
                    })}
                </div>
            </div>

            <div className="mt-4 flex-buttons">
            <button type="button" onClick={handleAnterior} disabled={paginaActual === 0}>
                Anterior
            </button>
            {paginaActual < totalPaginas - 1 ? (
                <button type="button" onClick={handleSiguiente}>
                Siguiente
                </button>
            ) : (
                <button type="submit">Guardar</button>
            )}
            </div>
        </form>
        </div>
    );
    };

export default RecruitCatcher;