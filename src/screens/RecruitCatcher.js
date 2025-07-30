import {React ,useState ,useMemo} from "react";
import "../styles/recruitcatcher.css";
import { Card, CardHeader, CardContent } from "../components/Card.jsx";
import { Input } from "../components/Input";
import { MyButton } from "../components/MyButton";
import { MyLabel } from "../components/MyLabel";
import { MySelect, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/MySelect";

const preguntas = [
{ id: 1, categoria: 'Demo', texto: '¿Cual es tu nombre?' },
{ id: 2, categoria: 'Demo', texto: '¿Cuantos años tienes?' },
{ id: 3, categoria: 'Demo', texto: '¿Cual es tu maximo grado de estudios?' },
{ id: 4, categoria: 'Demo', texto: '¿Cual es tu genero?' },
{ id: 5, categoria: 'Demo', texto: '¿Cuál es su situación laboral actual?' },
{ id: 6, categoria: 'Exp', texto: '¿Tienes experiencia laborando en call center?' },
{ id: 7, categoria: 'Comu', texto: '¿Qué técnicas utilizas para generar empatía?' },
{ id: 8, categoria: 'Comu', texto: '¿Cómo aseguras el cumplimiento de un acuerdo de pago?' }];

const preguntasPorPagina = 2;

const RecruitCatcher =()=> {
    const [paginaActual, setPaginaActual] = useState(0);
    const [respuestas, setRespuestas] = useState({});

    const totalPaginas = Math.ceil(preguntas.length / preguntasPorPagina);

    const grupoActual = preguntas.slice(
        paginaActual * preguntasPorPagina,
        (paginaActual + 1) * preguntasPorPagina
    );

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
    };

    return (
        <div className="p-6">
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden relative h-[300px]">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${paginaActual * 100}%)`, width: `${totalPaginas * 100}%` }}
                    >
                        {Array.from({ length: totalPaginas }).map((_, index) => {
                        const grupo = preguntas.slice(
                            index * preguntasPorPagina,
                            (index + 1) * preguntasPorPagina
                        );

                        return (
                            <div key={index} className="w-full shrink-0 px-4 grid grid-cols-1 gap-4">
                            {grupo.map(q => (
                                <Card key={q.id}>
                                <CardHeader>
                                    <h4 className="text-md font-medium">{q.texto}</h4>
                                </CardHeader>
                                <CardContent>
                                    <Input
                                    id={`resp-${q.id}`}
                                    value={respuestas[q.id] || ''}
                                    onChange={(e) => handleChange(q.id, e.target.value)}
                                    placeholder="Escribe la respuesta"
                                    />
                                </CardContent>
                                </Card>
                            ))}
                            </div>
                        );
                        })}
                    </div>
                </div>

                {/* Navegación */}
                <div className="mt-4 flex justify-between">
                    <MyButton type="button" onClick={handleAnterior} disabled={paginaActual === 0}>
                        Anterior
                    </MyButton>
                    {paginaActual < totalPaginas - 1 ? (
                        <MyButton type="button" onClick={handleSiguiente}>
                        Siguiente
                        </MyButton>
                    ) : (
                        <MyButton type="submit">Guardar</MyButton>
                    )}
                </div>
            </form>
        </div>
    );
}

export default RecruitCatcher;