import React from 'react'
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import { db } from '../config/firestore';
import Menu from './Menu';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/Home.css'

const Home = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [data, setData] = useState([]);
    const [recomendations, setRecomendations] = useState([]);
    const [category,setCategory] = useState([]);
    const [reason, setReason] = useState([]);
    const [personalReason, setPersonalReason] = useState([]);
    const [desmotivation, setDesmotivation] = useState([]);
    const [ck, setCk] = useState([]);
    const [leadership, setLeadership] = useState([]);
    const [recognition, setRecognition] = useState([]);
    const [sup, setSup] = useState([]);
    const [recruitment, setRecruitment] = useState([]);
    const [training, setTraining] = useState([]);
    const [compensations, setCompensations] = useState([]);
    const [rectcom, setRectcom] = useState([]);
    const [payroll, setPayroll] = useState([]);
    const [qtpayroll, setQtpayroll] = useState([]);
    const [prsolved, setPrsolved] = useState([]);
    const [retention, setRetention] = useState([]);
    const [opt, setOpt] = useState([]);
    const [grown, setGrown] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [compmatch, setCompmatch] = useState([]);
    const [infmatch, setInfmatch] = useState([]);
    const [improvements, setImprovements] = useState([]);
    const [trainimp, setTrainimp] = useState([]);
    const [badevents, setBadevents] = useState([]);
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const handleSelectChange=(e)=>{
        const newValue = e.target.value;
        setSelectedOption(newValue);
        if (newValue === 'employees') {
        getAllDocuments(newValue);
        console.log('Se selecciono: ',newValue);
        } else if (newValue === 'Baja'){
        console.log('Se selecciono: ',newValue);
        
        }else if (newValue === 'Reclutamiento'){
        console.log('Se selecciono: ',newValue);
        
        }else if (newValue === 'Capacitacion'){
        console.log('Se selecciono: ',newValue);
        
        }
    }

    const getAllDocuments = async (docu) => {
        const querySnapshot = await getDocs(collection(db, docu));
        const newData =[];
        querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, ...doc.data() });
        });
        setData(newData)
        console.log(data, data.length,typeof(data));
    };
    
    useEffect(() => {
        if (data.length > 0) {
        const valueFor1 = data.map(obj => obj['undefined']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['la 2da']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor4 = data.map(obj => obj['la 4ta']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['la 5ta']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor8 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor9 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor10 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueFor11 = data.map(obj => obj['8']).filter(value => value !== undefined);
        const valueFor12 = data.map(obj => obj['9']).filter(value => value !== undefined);
        const valueFor13 = data.map(obj => obj['10']).filter(value => value !== undefined);
        const valueFor14 = data.map(obj => obj['11']).filter(value => value !== undefined);
        const valueFor15 = data.map(obj => obj['12']).filter(value => value !== undefined);
        const valueFor16 = data.map(obj => obj['13']).filter(value => value !== undefined);
        const valueFor17 = data.map(obj => obj['14']).filter(value => value !== undefined);
        const valueFor18 = data.map(obj => obj['15']).filter(value => value !== undefined);
        const valueFor19 = data.map(obj => obj['16']).filter(value => value !== undefined);
        const valueFor20 = data.map(obj => obj['17']).filter(value => value !== undefined);
        const valueFor21 = data.map(obj => obj['18']).filter(value => value !== undefined);
        const valueFor22 = data.map(obj => obj['19']).filter(value => value !== undefined);
        const valueFor23 = data.map(obj => obj['20']).filter(value => value !== undefined);
        const valueFor24 = data.map(obj => obj['21']).filter(value => value !== undefined);
        const valueFor25 = data.map(obj => obj['22']).filter(value => value !== undefined);
        console.log('VALUEFOR1',valueFor1)
        setRecomendations(valueFor1);
        setCategory(valueFor2);
        setReason(valueFor3);
        setPersonalReason(valueFor4);
        setDesmotivation(valueFor5);
        setCk(valueFor6);
        setLeadership(valueFor7);
        setRecognition(valueFor8);
        setSup(valueFor9);
        setRecruitment(valueFor10);
        setTraining(valueFor11);
        setCompensations(valueFor12);
        setRectcom(valueFor13);
        setPayroll(valueFor14);
        setQtpayroll(valueFor15);
        setPrsolved(valueFor16);
        setRetention(valueFor17);
        setOpt(valueFor18);
        setGrown(valueFor19);
        setFeedback(valueFor20);
        setCompmatch(valueFor21);
        setInfmatch(valueFor22);
        setImprovements(valueFor23);
        setTrainimp(valueFor24);
        setBadevents(valueFor25);
        console.log(data);
        }
    }, [data]);

    const newSetData = {
        labels: ['Empleo', 'Escuela', 'Motivos personales', 'Desmotivación'],
        datasets: [
        {
            label: 'Motivo de salida',
            data: [recomendations.filter(item => item === 'a) Empleo').length, recomendations.filter(item => item === 'b) Motivos escolares').length, recomendations.filter(item => item === 'c) Motivos personales').length,recomendations.filter(item => item === 'd) Desmotivación').length ], 
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const categoryData = {
        labels: ['Las compensacones', 'No se relaciona a su carrera', 'No hay desarrollo personal', 'Distancia', 'Desacuerdo con el reglamento interno'],
        datasets: [
        {
            label: 'No gusto del empleo',
            data: [category.filter(item => item === 'a) Las compensaciónes').length, category.filter(item => item === 'b) No se relaciona a mi carrera').length,category.filter(item => item === 'c) No hay desarrollo profesional').length,category.filter(item => item === 'd) Cercania a mi domicilio').length,category.filter(item => item === 'e) Desacuerdo con politicas de la empresa').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const schoolarshipData = {
        labels: ['Horario escolar', 'Cambio e estudios', 'Me quiero dedicar solo a los estudios', 'No puedo combiar escula/empleo', 'Inicio practicas profesionales'],
        datasets: [
        {
            label: 'Motivo de escolar',
            data: [reason.filter(item => item === 'a) Cambio mi horario escolar').length, reason.filter(item => item === 'b) Quiero dedicarme solo a mis estudios').length, reason.filter(item => item === 'c) No puedo combiar escula/empleo').length, reason.filter(item => item === 'd) Inicio practicas profesionales / Servicio social').length],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const personalCategory = {
        labels: ['Cambio de domicilio', 'Emergencia personal', 'Hijos', 'Distancia', 'Incompatibilidad de horarios con mis actividades personaleso','Razones familiares','Salud','Tiempo de translado o dificultad del transporte'],
        datasets: [
        {
            label: 'Motivo personal',
            data: [personalReason.filter(item => item === 'a) Cambio de domicilio').length, personalReason.filter(item => item === 'b) Emergencia personal o familiar').length, personalReason.filter(item => item === 'c) Hijos').length, personalReason.filter(item => item === 'd) Incompatibilidad de horarios con mis actividades personales').length, personalReason.filter(item => item === 'e) Razones familiares').length, personalReason.filter(item => item === 'f) Salud').length, personalReason.filter(item => item === 'g) Tiempo de translado o dificultad del transporte').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const desmotivationCategory = {
        labels: ['Ambiente laboral', 'Cambio de campaña', 'Politicas de la empresa', 'Malas relaciones', 'No es lo que esperaba','No veo futuro'],
        datasets: [
        {
            label: 'Desmotivador',
            data: [desmotivation.filter(item => item === 'a) Ambiente laboral').length, desmotivation.filter(item => item === 'b) Cambio de campaña').length, desmotivation.filter(item => item === 'c) Desacuerdo con las politicas de la empresa').length, desmotivation.filter(item => item === 'd) Mala relación con otras áreas').length, desmotivation.filter(item => item === 'e) No es lo que esperaba').length, desmotivation.filter(item => item === 'f) No veo futuro').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recomentationsData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Recomienda trabajar en Colektia',
            data: [ck.filter(item => item === 'a) Si').length, ck.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const leadershipData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Los lideres de Colektia promueven su cultura, política y valores',
            data: [leadership.filter(item => item === 'a) Si').length, leadership.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recognitionData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Colektia reconoce e incentiva tu trabajo',
            data: [recognition.filter(item => item === 'a) Si').length, recognition.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const supData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Recomendaciónes de supervisores',
            data: [sup.filter(item => item === 'a) Si').length, sup.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recruitmentData = {
        labels: ['Bueno', 'Regular', 'Malo'],
        datasets: [
        {
            label: 'Proceso de reclutamiento',
            data: [recruitment.filter(item => item === 'a) Bueno').length, recruitment.filter(item => item === 'b) Regular').length,recruitment.filter(item => item === 'c) Malo').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trainingData = {
        labels: ['Bueno', 'Regular', 'Malo'],
        datasets: [
        {
            label: 'Proceso de entrenamiento',
            data: [training.filter(item => item === 'a) Muy satisfecho').length, training.filter(item => item === 'b) Regular').length,training.filter(item => item === 'c) Nada satisfecho').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const compensationsData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Grado de afinidad de las compenciones respecto a las funciones',
            data: [compensations.filter(item => item === 'a) Si').length, compensations.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const rectcomData = {
        labels: ['Si', 'Mas o menos' ,'No'],
        datasets: [
        {
            label: 'Se respetaron las compensaciones que te ofrecieron en reclutamiento',
            data: [rectcom.filter(item => item === 'a) Si').length, rectcom.filter(item => item === 'b) Mas o menos').length, rectcom.filter(item => item === 'c) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const payrollData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Errores en el pago de nomina',
            data: [payroll.filter(item => item === 'a) Si').length, payroll.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const qtpayrollData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Renuncias por pago de nomina',
            data: [qtpayroll.filter(item => item === 'a) Si').length, qtpayroll.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const prsolvedData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Se resolvio el error de nomina',
            data: [prsolved.filter(item => item === 'a) Si').length, prsolved.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const retentionData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Hicimos alguna retención para que te quedaras',
            data: [retention.filter(item => item === 'a) Si').length, retention.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const optData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Podriamos haber hecho algo para que te quedaras',
            data: [opt.filter(item => item === 'a) Si').length, opt.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const grownData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Colektia te ofrecio una opcion de crecimiento laboral',
            data: [grown.filter(item => item === 'a) Si').length, grown.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const feedbackData = {
        labels: ['1 vez a la semana' ,'2 vez a la semana', 'Mas de 3 veces a la semana', 'Nunca'],
        datasets: [
        {
            label: 'Colektia te ofrecio una opcion de crecimiento laboral',
            data: [feedback.filter(item => item === 'a) 1 vez a la semana').length, feedback.filter(item => item === 'b) 2 veces a la semana').length, feedback.filter(item => item === 'c) Mas de 3 veces a la semana').length, feedback.filter(item => item === 'd) Nunca').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const compmatchData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Las compensaciones concuerdan con el trabajo realizado',
            data: [compmatch.filter(item => item === 'a) Si').length, compmatch.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const infmatchData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'La informacion que se te dio en reclutamiento fue respetada',
            data: [infmatch.filter(item => item === 'a) Si').length, infmatch.filter(item => item === 'b) No').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const improvementsData = {
        labels: ['Precisión de la información', 'Tiempo de reclutamiento','Modalidad de entrevistas','Formalidad del proceso','Todas las anteriores'],
        datasets: [
        {
            label: 'Que mejorarias del proceso de reclutamiento',
            data: [improvements.filter(item => item === 'a) Información exacta y precisa').length, improvements.filter(item => item === 'b) Mejorar el tiempo de reclutamiento').length, improvements.filter(item => item === 'c) Modalidad de las entrevistas').length, improvements.filter(item => item === 'd) Mayor formalidad del proceso').length, improvements.filter(item => item === 'e) Todas las anteriores').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trainimpData = {
        labels: ['Más tiempo de practica', 'Información proporcionada','Las habilidades del entrenador','Mayor interacción con el capacitador','Ninguna'],
        datasets: [
        {
            label: 'Que mejorarias del proceso de capacitación',
            data: [trainimp.filter(item => item === 'a) Más tiempo de practica').length, trainimp.filter(item => item === 'b) Información proporcionada').length, trainimp.filter(item => item === 'c) Las habilidades del entrenador').length, trainimp.filter(item => item === 'd) Mayor interacción con el capacitador').length, trainimp.filter(item => item === 'e) Ninguna').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    const badeventsData = {
        labels: ['Hostigamiento laboral', 'Falta de integridad','Acoso sexual','Discriminación','Inseguridad','Venta o consumo de drogas','Ninguna'],
        datasets: [
        {
            label: 'Detectaste o viviste actividades como:',
            data: [badevents.filter(item => item === 'a) Hostigamiento laboral').length, badevents.filter(item => item === 'b) Falta de integridad').length, badevents.filter(item => item === 'c) Acoso sexual').length, badevents.filter(item => item === 'd) Discriminación').length, badevents.filter(item => item === 'e) Inseguridad').length, badevents.filter(item => item === 'f) Venta o consumo de drogas').length, badevents.filter(item => item === 'g) Ninguna').length ],
            backgroundColor: 'rgba(63,63,63, 0.9)',
            borderColor: 'rgba(63,63,63, 1)',
            borderWidth: 1,
        },
        ],
    };
    
    const options = {
        responsive: true,
        plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: false
        },
        },
    };

    return (
    <div>
        <div className="Header-container">
            <h1>Talento Colektia</h1>
            <h2>¡Bienvenido!</h2>
        </div>
        <Menu />
        <section className="Dashboard-container">
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                <option value="Selecciona el dashboard que quieras ver:">Selecciona el dashboard que quieras ver:</option>
                <option value="employees">Salida</option>
                <option value="Baja">Baja</option>
                <option value="Reclutamiento">Reclutamiento</option>
                <option value="Capacitacion">Capacitación</option>
            </select>
        </section>
        <div>
            {Array.isArray(data) && data.length > 0 ? (
            <p>🤓</p>
            ):(
            <p>No hay datos disponibles</p>
            )}
        </div>
        <div className="Graphs">
            <div className="Recomendation-component">
                <Bar data={newSetData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={categoryData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={schoolarshipData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={personalCategory} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={desmotivationCategory} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={recomentationsData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={leadershipData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={recognitionData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={supData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={recruitmentData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={trainingData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={compensationsData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={rectcomData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={payrollData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={qtpayrollData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={prsolvedData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={retentionData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={optData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={grownData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={feedbackData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={compmatchData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={infmatchData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={improvementsData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={trainimpData} options={options} />
            </div>
            <div className="Recomendation-component">
                <Bar data={badeventsData} options={options} />
            </div>
        </div>
        
    </div>
    )
}

export default Home;