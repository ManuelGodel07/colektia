import React from 'react'
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; 
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
    const [infmatch, setInfmatch] = useState([]);
    const [improvements, setImprovements] = useState([]);
    const [trainimp, setTrainimp] = useState([]);
    const [badevents, setBadevents] = useState([]);
    const [newActions, setNewActions] = useState([]);
    const [newChanges, setNewChanges] = useState([]);
    const [newComments, setNewComments] = useState([]);
    const [newEvent, setEvent] = useState([]);
    const [newName, setName] = useState([]);
    const [newPayroll, setNewPayroll] = useState([]);
    const [newSalida, setNewSalida] = useState([]);
    const [sourcing, setSourcing] = useState([]);
    const [recruitTime, setRecruitTime] = useState([]);
    const [revalutation, setRevaluation] = useState([]);
    const [motivation, setMotivation] =useState([]);
    const [intEvaluation, setIntEvaluation] = useState([]);
    const [referProcess, setReferProcess] = useState([]);
    const [clearInformation, setClearInformation] = useState([]);
    const [clearSchedule, setClearSchedule] = useState([]);
    const [answerQuestions, setAnswerQuestions] = useState([]);
    const [quit, setQuit] = useState([]);
    const [clearTraining, setClearTraining] = useState([]);
    const [completeTraining, setCompleteTraining] = useState([]);
    const [trainerAbilities, setTrainerAbilities] = useState([]);
    const [timeTraining, setTtimeTraining] = useState([]);
    const [applyKnowledge, setApplyKnowledge] = useState([]);
    const [trainingDuration, setTrainingDuration] = useState([]);
    const [ableToWork, setAbleToWork] = useState([]);
    const [culture, setCulture] = useState([]);
    const [insight, setInsight] = useState([]);
    const [antique, setAntique] = useState([]);
    const [promotedValues, setPromotedValues] = useState([]);
    const [safeEnvironment, setSafeEnvironment] = useState([]);
    const [communication, setCommunication] = useState([]);
    const [teamWork, setTeamWork] = useState([]);
    const [satisfy, setSatisfy] = useState([]);
    const [train, setTrain] = useState([]);
    const [tools, setTools] = useState([]);
    const [ownGrown,setOwnGrown] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);
    const [fullInfo, setFullInfo] = useState([]);
    const [fullTools, setFullTools] = useState([]);
    const [rightProfile, setRightProfile] = useState([]);
    const [cultCk, setCultCk] = useState([]);
    const [referCk, setReferCk] = useState([]);
    const [enoughFeedback, setEnoughFeedback] = useState([]);
    const [problem, setProblem] = useState([]);
    const [request, setRequest] = useState([]);
    const [trash, setTrash] = useState([]);

    const totalRespondents =  data.length;

    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const handleSelectChange = (e) => {
        const password = prompt("Por favor, ingresa la contraseña:");
        try {
            const correctPassword = "DBFire$";
            if (password !== correctPassword) {
                throw new Error("Contraseña incorrecta");
            }
            const newValue = e.target.value;
            setSelectedOption(newValue);
            if (newValue === 'employees') {
                getAllDocuments(newValue);
            } else if (newValue === 'rejecting') {
                getAllDocuments(newValue);
            } else if (newValue === 'recruit') {
                getAllDocuments(newValue);
            } else if (newValue === 'trainingCk') {
                getAllDocuments(newValue);
            }else if (newValue === 'envi') {
                getAllDocuments(newValue);
            }
        } catch (error) {
            alert("Acceso denegado: " + error.message);
        }
    };

    const getAllDocuments = async (docu) => {
        const querySnapshot = await getDocs(collection(db, docu));
        const newData =[];
        querySnapshot.forEach((doc) => {
            newData.push({ id: doc.id, ...doc.data() });
        });
        setData(newData)
        console.log(data)
    };
    
    useEffect(() => {
        if (data.length > 0 && selectedOption ==='employees') {
        const valueFor1 = data.map(obj => obj['undefined']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['la 2da']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['la 3ra']).filter(value => value !== undefined);
        const valueForPersonal = data.map(obj => obj['la 4ta']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['la 5ta']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor8 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor9 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor10 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueFor11 = data.map(obj => obj['8']).filter(value => value !== undefined);
        const valueFor12 = data.map(obj => obj['9']).filter(value => value !== undefined);
        const valueFor13 = data.map(obj => obj['10']).filter(value => value !== undefined);
        const valueFor14 = data.map(obj => obj['19']).filter(value => value !== undefined);
        const valueFor15 = data.map(obj => obj['20']).filter(value => value !== undefined);
        const valueFor16 = data.map(obj => obj['21']).filter(value => value !== undefined);
        const valueFor17 = data.map(obj => obj['11']).filter(value => value !== undefined);
        const valueFor18 = data.map(obj => obj['12']).filter(value => value !== undefined);
        const valueFor19 = data.map(obj => obj['13']).filter(value => value !== undefined);
        const valueFor20 = data.map(obj => obj['14']).filter(value => value !== undefined);
        const valueFor21 = data.map(obj => obj['18']).filter(value => value !== undefined);
        const valueFor22 = data.map(obj => obj['19']).filter(value => value !== undefined);
        const valueFor23 = data.map(obj => obj['16']).filter(value => value !== undefined);
        const valueFor24 = data.map(obj => obj['17']).filter(value => value !== undefined);
        const valueFor25 = data.map(obj => obj['18']).filter(value => value !== undefined);

        const firstBox = data.map(obj => obj['Actions']).filter(value => value !== undefined);
        const secondBox = data.map(obj => obj['Change']).filter(value => value !== undefined);
        const thirdBox = data.map(obj => obj['Comments']).filter(value => value !== undefined);
        const fourthBox = data.map(obj => obj['Event']).filter(value => value !== undefined);
        const fivthBox = data.map(obj => obj['Name']).filter(value => value !== undefined);
        const sixthBox = data.map(obj => obj['Payroll']).filter(value => value !== undefined);
        const seventhBox = data.map(obj => obj['Salida']).filter(value => value !== undefined);
        setRecomendations(valueFor1);
        setCategory(valueFor2);
        setReason(valueFor3);
        setPersonalReason(valueForPersonal);
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
        setInfmatch(valueFor22);
        setImprovements(valueFor23);
        setTrainimp(valueFor24);
        setBadevents(valueFor25);
        setNewActions(firstBox);
        setNewChanges(secondBox);
        setNewComments(thirdBox);
        setEvent(fourthBox);
        setName(fivthBox);
        setNewPayroll(sixthBox);
        setNewSalida(seventhBox);
    } else if(data.length > 0 && selectedOption ==='recruit'){
        const valueFor1 = data.map(obj => obj['1']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['2']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor4 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueFor8 = data.map(obj => obj['8']).filter(value => value !== undefined);
        const valueFor9 = data.map(obj => obj['9']).filter(value => value !== undefined);
        const valueForName = data.map(obj => obj['Name']).filter(value => value !== undefined);
        const valueForQuit = data.map(obj => obj['Salida']).filter(value => value !== undefined);
        setSourcing(valueFor1);
        setRecruitTime(valueFor2);
        setRevaluation(valueFor3);
        setMotivation(valueFor4);
        setIntEvaluation(valueFor5);
        setReferProcess(valueFor6);
        setClearInformation(valueFor7);
        setClearSchedule(valueFor8);
        setAnswerQuestions(valueFor9);
        setName(valueForName);
        setQuit(valueForQuit);
    } else if(data.length > 0 && selectedOption ==='trainingCk'){
        const valueFor1 = data.map(obj => obj['1']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['2']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor4 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueFor8 = data.map(obj => obj['8']).filter(value => value !== undefined);
        const valueFor9 = data.map(obj => obj['insight']).filter(value => value !== undefined);
        const valueForName = data.map(obj => obj['Name']).filter(value => value !== undefined);

        setClearTraining(valueFor1);
        setCompleteTraining(valueFor2);
        setTrainerAbilities(valueFor3);
        setTtimeTraining(valueFor4);
        setApplyKnowledge(valueFor5);
        setTrainingDuration(valueFor6);
        setAbleToWork(valueFor7);
        setCulture(valueFor8);
        setInsight(valueFor9);
        setName(valueForName);
    } else if(data.length > 0 && selectedOption ==='envi'){
        const valueFor1 = data.map(obj => obj['1']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['2']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor4 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueFor8 = data.map(obj => obj['8']).filter(value => value !== undefined);
        const valueFor9 = data.map(obj => obj['9']).filter(value => value !== undefined);
        const valueFor10 = data.map(obj => obj['Salida']).filter(value => value !== undefined);
        const valueForName = data.map(obj => obj['Name']).filter(value => value !== undefined);

        setAntique(valueFor1);
        setPromotedValues(valueFor2);
        setSafeEnvironment(valueFor3);
        setCommunication(valueFor4);
        setTeamWork(valueFor5);
        setSatisfy(valueFor6);
        setTrain(valueFor7);
        setTools(valueFor8);
        setInsight(valueFor9);
        setOwnGrown(valueFor9)
        setName(valueForName);
        setQuit(valueFor10);
    } else if(data.length > 0 && selectedOption ==='rejecting'){
        const valueFor1 = data.map(obj => obj['1']).filter(value => value !== undefined);
        const valueFor2 = data.map(obj => obj['2']).filter(value => value !== undefined);
        const valueFor3 = data.map(obj => obj['3']).filter(value => value !== undefined);
        const valueFor4 = data.map(obj => obj['4']).filter(value => value !== undefined);
        const valueFor5 = data.map(obj => obj['5']).filter(value => value !== undefined);
        const valueFor6 = data.map(obj => obj['6']).filter(value => value !== undefined);
        const valueFor7 = data.map(obj => obj['7']).filter(value => value !== undefined);
        const valueForProblem = data.map(obj => obj['Problem']).filter(value => value !== undefined);
        const valueForRequest = data.map(obj => obj['Request']).filter(value => value !== undefined);
        const valueForTrash = data.map(obj => obj['Trash']).filter(value => value !== undefined);
        const valueForName = data.map(obj => obj['Name']).filter(value => value !== undefined);

        setJobDetails(valueFor1);
        setFullInfo(valueFor2);
        setFullTools(valueFor3);
        setRightProfile(valueFor4);
        setCultCk(valueFor5);
        setReferCk(valueFor6);
        setEnoughFeedback(valueFor7);
        setName(valueForName);
        setProblem(valueForProblem);
        setRequest(valueForRequest);
        setTrash(valueForTrash);
    } 
    console.log(data)

    }, [data]);

    const newSetData = {
        labels: ['Empleo', 'Escuela', 'Motivos personales', 'Desmotivación'],
        datasets: [
            {
                label: 'Motivo de salida',
                data: [recomendations.filter(item => item === 'a) Empleo').length / totalRespondents, recomendations.filter(item => item === 'b) Motivos escolares').length / totalRespondents, recomendations.filter(item => item === 'c) Motivos personales').length / totalRespondents, recomendations.filter(item => item === 'd) Desmotivación').length / totalRespondents], 
                backgroundColor: 'rgba(255,255,255, 0.8)',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 1,
            },
        ],
    };
    const categoryData = {
        labels: ['Las compensaciones', 'No se relaciona a su carrera', 'No hay desarrollo profesional', 'Distancia', 'Desacuerdo con el reglamento'],
        datasets: [
        {
            label: 'Aspectos Negativos del Empleo',
            data: [category.filter(item => item === 'a) Las compensaciónes').length / category.length, category.filter(item => item === 'b) No se relaciona a mi carrera').length / category.length,category.filter(item => item === 'c) No hay desarrollo profesional').length / category.length, category.filter(item => item === 'd) Cercania a mi domicilio').length / category.length, category.filter(item => item === 'e) Desacuerdo con politicas de la empresa').length / category.length],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const schoolarshipData = {
        labels: ['Horarios', 'Cambio de estudios', 'Enfoque solo a los estudios', 'No puede combiar escula/empleo', 'Inicio practicas profesionales'],
        datasets: [
        {
            label: 'Motivo escolares',
            data: [reason.filter(item => item === 'a) Cambio mi horario escolar').length / reason.length, reason.filter(item => item === 'b) Quiero dedicarme solo a mis estudios').length / reason.length, reason.filter(item => item === 'c) No puedo combiar escuela/empleo').length / reason.length, reason.filter(item => item === 'd) Inicio practicas profesionales / Servicio social').length / reason.length],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const personalCategory = {
        labels: ['Cambio de domicilio', 'Emergencia personal', 'Hijos', 'Horarios','Razones familiares','Salud','Tiempo de translado'],
        datasets: [
        {
            label: 'Motivos personales',
            data: [personalReason.filter(item => item === 'a) Cambio de domicilio').length / personalReason.length, personalReason.filter(item => item === 'b) Emergencia personal o familiar').length / personalReason.length, personalReason.filter(item => item === 'c) Hijos').length / personalReason.length, personalReason.filter(item => item === 'd) Incompatibilidad de horarios con mis actividades personales').length / personalReason.length, personalReason.filter(item => item === 'e) Razones familiares').length / personalReason.length, personalReason.filter(item => item === 'f) Salud').length / personalReason.length, personalReason.filter(item => item === 'g) Tiempo de translado o dificultad del transporte').length / personalReason.length ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const desmotivationCategory = {
        labels: ['Ambiente laboral', 'Cambio de campaña', 'Politicas de la empresa', 'Malas relaciones', 'No es lo que esperaba','No veo futuro'],
        datasets: [
        {
            label: 'Factores de Desmotivación',
            data: [desmotivation.filter(item => item === 'a) Ambiente laboral').length / desmotivation.length, desmotivation.filter(item => item === 'b) Cambio de campaña').length / desmotivation.length, desmotivation.filter(item => item === 'c) Desacuerdo con las politicas de la empresa').length / desmotivation.length, desmotivation.filter(item => item === 'd) Mala relación con otras áreas').length / desmotivation.length, desmotivation.filter(item => item === 'e) No es lo que esperaba').length / desmotivation.length, desmotivation.filter(item => item === 'f) No veo futuro').length / desmotivation.length ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recomentationsData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: '¿Colektia es una Buena Opción para Trabajar?',
            data: [ck.filter(item => item === 'a) Si').length / totalRespondents, ck.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const leadershipData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Promoción de Valores en Colektia',
            data: [leadership.filter(item => item === 'a) Si').length / totalRespondents, leadership.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recognitionData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Colektia reconoce e incentiva tu trabajo',
            data: [recognition.filter(item => item === 'a) Si').length / totalRespondents, recognition.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const supData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Recomendación de supervisores como buenos lideres',
            data: [sup.filter(item => item === 'a) Si').length / totalRespondents, sup.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recruitmentData = {
        labels: ['Bueno', 'Regular', 'Malo'],
        datasets: [
        {
            label: 'Proceso de reclutamiento',
            data: [recruitment.filter(item => item === 'a) Bueno').length / totalRespondents, recruitment.filter(item => item === 'b) Regular').length / totalRespondents, recruitment.filter(item => item === 'c) Malo').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1
        },
        ],
    };
    const trainingData = {
        labels: ['Bueno', 'Regular', 'Malo'],
        datasets: [
        {
            label: 'Proceso de entrenamiento',
            data: [training.filter(item => item === 'a) Muy satisfecho').length / totalRespondents, training.filter(item => item === 'b) Regular').length / totalRespondents,training.filter(item => item === 'c) Nada satisfecho').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const compensationsData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Adecuación de las compenciones con las funciones',
            data: [compensations.filter(item => item === 'a) Si').length / totalRespondents, compensations.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const rectcomData = {
        labels: ['Si', 'Mas o menos' ,'No'],
        datasets: [
        {
            label: 'Cumplimiento de compensaciones ofrecidas en reclutamiento',
            data: [rectcom.filter(item => item === 'a) Si').length / totalRespondents, rectcom.filter(item => item === 'b) Mas o menos').length / totalRespondents, rectcom.filter(item => item === 'c) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const payrollData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Errores en el pago de nomina',
            data: [payroll.filter(item => item === 'a) Si').length / totalRespondents, payroll.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const qtpayrollData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Impacto de errores de nómina en renuncias',
            data: [qtpayroll.filter(item => item === 'a) Si').length / qtpayroll.length, qtpayroll.filter(item => item === 'b) No').length / qtpayroll.length ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const prsolvedData = {
        labels: ['Si se resolvio' ,'No se resolvio'],
        datasets: [
        {
            label: 'Resultados sobre Error de Nómina',
            data: [prsolved.filter(item => item === 'a) Si').length / qtpayroll.length, prsolved.filter(item => item === 'b) No').length / qtpayroll.length],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const retentionData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: '¿Se quedaron más gracias a la retención?',
            data: [retention.filter(item => item === 'a) Si').length / totalRespondents, retention.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const optData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Podriamos haber hecho algo para que te quedaras',
            data: [opt.filter(item => item === 'a) Si').length / totalRespondents, opt.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const grownData = {
        labels: ['Si' ,'No'],
        datasets: [
        {
            label: 'Colektia te ofrecio una opcion de crecimiento laboral',
            data: [grown.filter(item => item === 'a) Si').length / totalRespondents, grown.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const feedbackData = {
        labels: ['1 vez' ,'2 veces', 'Mas de 3 veces', 'Nunca'],
        datasets: [
        {
            label: 'Feedback de líder: frecuencia semanal',
            data: [feedback.filter(item => item === 'a) 1 vez a la semana').length / totalRespondents, feedback.filter(item => item === 'b) 2 veces a la semana').length / totalRespondents, feedback.filter(item => item === 'c) Mas de 3 veces a la semana').length / totalRespondents, feedback.filter(item => item === 'd) Nunca').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const infmatchData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'La informacion que se te dio en reclutamiento fue respetada',
            data: [infmatch.filter(item => item === 'a) Si').length / totalRespondents, infmatch.filter(item => item === 'b) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const improvementsData = {
        labels: ['Precisión de la información', 'Tiempo de reclutamiento','Modalidad de entrevistas','Formalidad del proceso','Todas las anteriores'],
        datasets: [
        {
            label: 'Sugerencias para mejorar el reclutamiento',
            data: [improvements.filter(item => item === 'a) Información exacta y precisa').length / totalRespondents, improvements.filter(item => item === 'b) Mejorar el tiempo de reclutamiento').length / totalRespondents, improvements.filter(item => item === 'c) Modalidad de las entrevistas').length / totalRespondents, improvements.filter(item => item === 'd) Mayor formalidad del proceso').length / totalRespondents, improvements.filter(item => item === 'e) Nada').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trainimpData = {
        labels: ['Más tiempo de practica', 'Información proporcionada','Las habilidades del entrenador','Mayor interacción con el capacitador','Ninguna'],
        datasets: [
        {
            label: 'Sugerencias para mejorar en la capacitación',
            data: [trainimp.filter(item => item === 'a) Más tiempo de practica').length / totalRespondents, trainimp.filter(item => item === 'b) Información proporcionada').length / totalRespondents, trainimp.filter(item => item === 'c) Las habilidades del entrenador').length / totalRespondents, trainimp.filter(item => item === 'd) Mayor interacción con el capacitador').length / totalRespondents, trainimp.filter(item => item === 'e) Ninguna').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const sourcingData = {
        labels: ['Facebook', 'Whatsapp','Computrabajo','OCC','Indeed','Un amigo'],
        datasets: [
        {
            label: 'Sourcing',
            data: [sourcing.filter(item => item === 'a) Facebook').length / totalRespondents, sourcing.filter(item => item === 'b) Whatsapp').length / totalRespondents, sourcing.filter(item => item === 'c) Computrabajo').length / totalRespondents, sourcing.filter(item => item === 'd) OCC').length / totalRespondents, sourcing.filter(item => item === 'e) Indeed').length / totalRespondents, sourcing.filter(item => item === 'f) Un amigo').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const badeventsData = {
        labels: ['Hostigamiento laboral', 'Falta de integridad','Acoso sexual','Discriminación','Inseguridad','Venta o consumo de drogas','Ninguna'],
        datasets: [
        {
            label: 'Experiencias Negativas en el Trabajo',
            data: [badevents.filter(item => item === 'a) Hostigamiento laboral').length / totalRespondents, badevents.filter(item => item === 'b) Falta de integridad').length / totalRespondents, badevents.filter(item => item === 'c) Acoso sexual').length / totalRespondents, badevents.filter(item => item === 'd) Discriminación').length / totalRespondents, badevents.filter(item => item === 'e) Inseguridad').length / totalRespondents, badevents.filter(item => item === 'f) Venta o consumo de drogas').length / totalRespondents, badevents.filter(item => item === 'g) Ninguna').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const recruitTimeData = {
        labels: ['Bueno', 'Regular','Malo'],
        datasets: [
        {
            label: 'Tiempos de Reclutamiento',
            data: [recruitTime.filter(item => item === 'a) Bueno').length / totalRespondents, recruitTime.filter(item => item === 'b) Regular').length / totalRespondents, recruitTime.filter(item => item === 'c) Malo').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const revalutationData = {
        labels: ['Buena', 'Regular','Mala'],
        datasets: [
        {
            label: 'Profesionalismo y amabilidad del reclutador',
            data: [revalutation.filter(item => item === 'a) Buena').length / totalRespondents, revalutation.filter(item => item === 'b) Regular').length / totalRespondents, revalutation.filter(item => item === 'c) Mala').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const motivationData = {
        labels: ['Prestaciones de ley', 'Descripción de puesto','Desfio personal','Ingresos ofrecidos','Ubicación de la empresa','Reputación de la empresa','Crecimiento profesional'],
        datasets: [
        {
            label: 'Motivos para postularse',
            data: [motivation.filter(item => item === 'a) Prestaciones de ley').length / totalRespondents, motivation.filter(item => item === 'b) Descripción atractiva del empleo').length / totalRespondents, motivation.filter(item => item === 'c) Desafio personal').length / totalRespondents, motivation.filter(item => item === 'd) Ingresos ofrecidos').length / totalRespondents, motivation.filter(item => item === 'e) Ubicación de la empresa').length / totalRespondents, motivation.filter(item => item === 'f) Reputación de la empresa').length / totalRespondents, motivation.filter(item => item === 'g) Oportunidades de crecimiento profesional').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const intEvaluationData = {
        labels: ['Buena', 'Regular','Malo'],
        datasets: [
        {
            label: 'Opiniones sobre Entrevistas Laborales',
            data: [intEvaluation.filter(item => item === 'a) Buena').length / totalRespondents, intEvaluation.filter(item => item === 'b) Regular').length / totalRespondents, intEvaluation.filter(item => item === 'c) Mala').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const referProcessData = {
        labels: ['Muchas', 'Tal vez','Ninguna'],
        datasets: [
        {
            label: 'Posibilidades de recomendación de vacantes',
            data: [referProcess.filter(item => item === 'a) Muchas').length / totalRespondents, referProcess.filter(item => item === 'b) Tal vez lo haga').length / totalRespondents, referProcess.filter(item => item === 'c) Ninguna').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const clearInformationData = {
        labels: ['Buena', 'Mala'],
        datasets: [
        {
            label: 'Claridad de remuneración',
            data: [clearInformation.filter(item => item === 'a) Si').length / totalRespondents, clearInformation.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const clearScheduleData = {
        labels: ['Buena', 'Mala'],
        datasets: [
        {
            label: 'Claridad de horarios',
            data: [clearSchedule.filter(item => item === 'a) Si').length / totalRespondents, clearSchedule.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const answerQuestionsData = {
        labels: ['Buena', 'Mala'],
        datasets: [
        {
            label: 'Satisfacción con Respuestas del Reclutador',
            data: [answerQuestions.filter(item => item === 'a) Si').length / totalRespondents, answerQuestions.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const clearTrainingData = {
        labels: ['Muy clara', 'Mas o menos clara','Nada clara'],
        datasets: [
        {
            label: 'Claridad de la capacitación',
            data: [clearTraining.filter(item => item === 'a) Si').length / totalRespondents, clearTraining.filter(item => item === 'b) Mas o menos').length / totalRespondents, clearTraining.filter(item => item === 'c) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const completeTrainingData = {
        labels: ['Muy completa', 'Mas o menos completa','Incompleta'],
        datasets: [
        {
            label: 'Cobertura de conocimientos y habilidades en la capacitación',
            data: [completeTraining.filter(item => item === 'a) Si').length / totalRespondents, completeTraining.filter(item => item === 'b) Mas o menos').length / totalRespondents, completeTraining.filter(item => item === 'c) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trainerAbilitiesData = {
        labels: ['Buena', 'Regular','Mala'],
        datasets: [
        {
            label: 'Atención y Eficacia de los Instructores',
            data: [trainerAbilities.filter(item => item === 'a) Si').length / totalRespondents, trainerAbilities.filter(item => item === 'b) Mas o menos').length / totalRespondents, trainerAbilities.filter(item => item === 'c) No').length / totalRespondents ],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const timeTrainingData = {
        labels: ['Suficiente', 'Insuficiente'],
        datasets: [
        {
            label: 'Percepción de tiempo y apoyo en capacitación',
            data: [timeTraining.filter(item => item === 'a) Si').length / totalRespondents, timeTraining.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const applyKnowledgeData = {
        labels: ['a) Muy facil', 'b) Regular','c) Muy dificil'],
        datasets: [
        {
            label: 'Adaptabilidad a la Capacitación',
            data: [applyKnowledge.filter(item => item === 'a) Muy facil').length / totalRespondents, applyKnowledge.filter(item => item === 'b) Regular').length / totalRespondents, applyKnowledge.filter(item => item === 'c) Muy dificil').length / totalRespondents,],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trainingDurationData = {
        labels: ['Muy clara', 'Mas o menos clara','Nada clara'],
        datasets: [
        {
            label: 'Percepción sobre duración de la capacitación',
            data: [trainingDuration.filter(item => item === 'a) Si').length / totalRespondents, trainingDuration.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const ableToWorkData = {
        labels: ['Buena', 'Mala'],
        datasets: [
        {
            label: 'Confianza en tareas post-capacitación',
            data: [ableToWork.filter(item => item === 'a) Si').length / totalRespondents, ableToWork.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const cultureData = {
        labels: ['Bueno','Malo'],
        datasets: [
        {
            label: 'Impacto del Onboarding en la Comprensión Empresarial',
            data: [culture.filter(item => item === 'a) Si').length / totalRespondents, culture.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const antiqueData = {
        labels: ['1 mes','2 meses','3 meses','Mas de 6 meses', 'De 1 a 3 años', 'Mas de 3 años'],
        datasets: [
        {
            label: 'Antiguedad de empleado',
            data: [antique.filter(item => item === 'a) 1 mes').length / totalRespondents, antique.filter(item => item === 'b) 2 meses').length / totalRespondents, antique.filter(item => item === 'c) 3 meses').length / totalRespondents, antique.filter(item => item === 'd) Mas de 6 meses').length / totalRespondents, antique.filter(item => item === 'e) De 1 a 3 años').length / totalRespondents, antique.filter(item => item === 'f) Más de 3 años').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const promotedValuesData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Se promueven los valores Colektia en el día a día',
            data: [promotedValues.filter(item => item === 'a) Si').length / totalRespondents, promotedValues.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const safeEnvironmentData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'El ambiente laboral es profesional y respetuoso',
            data: [safeEnvironment.filter(item => item === 'a) Si').length / totalRespondents, safeEnvironment.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const communicationData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Es efectiva la comunicación entre el equipo y los supervisores',
            data: [communication.filter(item => item === 'a) Si').length / totalRespondents, communication.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const teamWorkData = {
        labels: ['Buena', 'Regular','Malo'],
        datasets: [
        {
            label: 'Percepción de colaboración de equipos de trabajo',
            data: [teamWork.filter(item => item === 'a) Buena').length / totalRespondents, teamWork.filter(item => item === 'b) Regular').length / totalRespondents, teamWork.filter(item => item === 'c) Mala').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const satisfyData = {
        labels: ['Satisfechos', 'Insatisfechos'],
        datasets: [
        {
            label: 'Valoración de salario y beneficios laborales',
            data: [satisfy.filter(item => item === 'a) Si').length / totalRespondents, satisfy.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const trainData = {
        labels: ['a) Si', 'b) No'],
        datasets: [
        {
            label: 'Entrenamiento para Mejorar en el Trabajo',
            data: [train.filter(item => item === 'a) Si').length / totalRespondents, train.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const toolsData = {
        labels: ['Satisfechos', 'Insatisfechos'],
        datasets: [
        {
            label: 'Opinión sobre Infraestructura Laboral',
            data: [tools.filter(item => item === 'a) Si').length / totalRespondents, tools.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const ownGrownData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Percepción de Crecimiento',
            data: [ownGrown.filter(item => item === 'a) Si').length / totalRespondents, ownGrown.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const jobDetailsData = {
        labels: ['Bueno', 'Regular','Malo'],
        datasets: [
        {
            label: 'Claridad en las características del puesto',
            data: [jobDetails.filter(item => item === 'a) Todas').length / totalRespondents, jobDetails.filter(item => item === 'b) Algunas').length / totalRespondents, jobDetails.filter(item => item === 'c) Ninguna').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };

    const fullInfoData = {
        labels: ['Buena', 'Regular', 'Mala'],
        datasets: [
        {
            label: 'Opinión sobre Calidad de Capacitación',
            data: [fullInfo.filter(item => item === 'a) Mucho').length / totalRespondents, fullInfo.filter(item => item === 'b) Mas o menos').length / totalRespondents, fullInfo.filter(item => item === 'c) Nada').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const fullToolsData = {
        labels: ['Buena', 'Regular', 'Mala'],
        datasets: [
        {
            label: 'Opinion sobre infraestructura',
            data: [fullTools.filter(item => item === 'a) Si').length / totalRespondents, fullTools.filter(item => item === 'b) Mas o menos').length / totalRespondents, fullTools.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const rightProfileData = {
        labels: ['Bueno', 'Malo'],
        datasets: [
        {
            label: 'Aprovechamiento de habilidades en el puesto',
            data: [rightProfile.filter(item => item === 'a) Si').length / totalRespondents, rightProfile.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const cultCkData = {
        labels: ['Bueno', 'Regular','Malo'],
        datasets: [
        {
            label: 'Percepción de ambiente laboral',
            data: [cultCk.filter(item => item === 'a) Buena').length / totalRespondents, cultCk.filter(item => item === 'b) Regular').length / totalRespondents, cultCk.filter(item => item === 'c) Mala').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const referCkData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Recomiendan a colektia',
            data: [referCk.filter(item => item === 'a) Si').length / totalRespondents, referCk.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const enoughFeedbackData = {
        labels: ['Bueno', 'Malo'],
        datasets: [
        {
            label: 'Percepción del feedback en el periodo de prueba',
            data: [enoughFeedback.filter(item => item === 'a) Si').length / totalRespondents, enoughFeedback.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const problemData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Percepción de Crecimiento',
            data: [problem.filter(item => item === 'a) Si').length / totalRespondents, problem.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const requestData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Percepción de Crecimiento',
            data: [request.filter(item => item === 'a) Si').length / totalRespondents, request.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
            borderWidth: 1,
        },
        ],
    };
    const trashData = {
        labels: ['Si', 'No'],
        datasets: [
        {
            label: 'Percepción de Crecimiento',
            data: [trash.filter(item => item === 'a) Si').length / totalRespondents, trash.filter(item => item === 'b) No').length / totalRespondents],
            backgroundColor: 'rgba(255,255,255, 0.8)',
            borderColor: 'rgba(255,255,255, 1)',
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
                labels: {
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: window.innerWidth * 0.010
                    }
                }
            },
            title: {
                display: false
            }
        },
        scales: {
            x: {
            ticks: {
                color: 'rgb(255, 255, 255)',
                font: {
                size: window.innerWidth * 0.009
                }
            }
            },
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function(value) {
                        return (value * 100).toFixed(0) + '%';
                    }
                }
            }
        }
    };

    const CommentWindow = ({title, name , comments})=>{
        return(
            <table style={{ width: '90%', borderCollapse: 'collapse' }}>
                <thead className='table-Header'>
                    <tr>
                        <td>Nombre</td>
                        <td>{title}</td>
                    </tr>
                </thead>
                <tbody>
                    {name.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>{row}</td>
                            <td style={{ padding: '8px', border: '1px solid #fff' }}>
                            {comments[rowIndex] && comments[rowIndex].trim() !== '' 
                                ? comments[rowIndex] 
                                : ''}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }

    const renderGraph=()=>{
        if(selectedOption==='employees'){
            return(
                <>
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
                    <CommentWindow title='Comentarios sobre la experiencia de salida' name={newName} comments={newSalida}/>
                    <CommentWindow title='Opiniones para mejorar la retención' name={newName} comments={newActions} />
                    <CommentWindow title='Cambios deseados en Colektia' name={newName} comments={newChanges} />
                    <CommentWindow title='Detalles de incidentes' name={newName} comments={newEvent} />
{/*                     <CommentWindow title='Errores en nómina según empleados' name={newName} comments={newPayroll} /> */}
{/*                     <CommentWindow title='Sugerencias y opiniones adicionales' name={newName} comments={newChanges} /> */}
                </>
                
            )
        } else if(selectedOption==='recruit'){
            return(
                <>
                    <div className="Graphs">
                        <div className="Recomendation-component">
                            <Bar data={sourcingData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={recruitTimeData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={revalutationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={motivationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={intEvaluationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={referProcessData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={clearInformationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={clearScheduleData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={answerQuestionsData} options={options} />
                        </div>
                    </div>
                    <CommentWindow title='Comentarios adicionales' name={newName} comments={quit}/>

                </>
            )
        } else if(selectedOption==='trainingCk'){
            return(
                <>
                    <div className="Graphs">
                        <div className="Recomendation-component">
                            <Bar data={clearTrainingData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={completeTrainingData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={trainerAbilitiesData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={timeTrainingData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={applyKnowledgeData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={trainingDurationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={ableToWorkData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={cultureData} options={options} />
                        </div>

                    </div>
                    <CommentWindow title='Comentarios adicionales' name={newName} comments={insight}/>

                </>
            )
        } else if(selectedOption==='envi'){
            return(
                <>
                    <div className="Graphs">
                        <div className="Recomendation-component">
                            <Bar data={antiqueData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={promotedValuesData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={safeEnvironmentData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={communicationData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={teamWorkData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={satisfyData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={trainData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={toolsData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={ownGrownData} options={options} />
                        </div>

                    </div>
                    <CommentWindow title='Comentarios adicionales' name={newName} comments={quit}/>

                </>
            )
        } else if(selectedOption==='rejecting'){
            return(
                <>
                    <div className="Graphs">
                        <div className="Recomendation-component">
                            <Bar data={jobDetailsData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={fullInfoData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={fullToolsData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={rightProfileData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={cultCkData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={referCkData} options={options} />
                        </div>
                        <div className="Recomendation-component">
                            <Bar data={enoughFeedbackData} options={options} />
                        </div>
                    </div>
                    <CommentWindow title='Factores que afectaron el desempeño en el periodo de prueba' name={newName} comments={problem}/>
                    <CommentWindow title='Sugerencias para facilitar la adaptación' name={newName} comments={request}/>
                    <CommentWindow title='Conflictos laborales en el trabajo' name={newName} comments={trash}/>
                </>
            )
        }

    }
    const dashTitle=()=>{
        if(selectedOption==='employees'){
            return(
                <div>
                    <h2 className='center-Text'>Factores de deserción en el trabajo</h2>
                    <h3 className='center-Text'>La intención de este dashboard es identificar áreas de mejora en el ambiente laboral y en la gestión de talento.</h3>
                </div>
            )
        } else if(selectedOption==='recruit'){
            return(
                <div>
                    <h2 className='center-Text'>Calidad de reclutamiento</h2>
                    <h3 className='center-Text'>La intención de este dashboard es obtener retroalimentación sobre el proceso de reclutamiento y seleción.</h3>
                </div>
            )
        } else if(selectedOption==='trainingCk'){
            return(
                <div>
                    <h2 className='center-Text'>Calidad de Onboarding y entrenamiento</h2>
                    <h3 className='center-Text'>La intención de este dashboard es obtener retroalimentación sobre el proceso de Onboarding y entrenamiento.</h3>
                </div>
            )
        } else if(selectedOption==='rejecting'){
            return(
                <div>
                    <h2 className='center-Text'>Desvinculaciones</h2>
                    <h3 className='center-Text'>La intención de este dashboard es brindar información acerca de los motivos por los cuales los colaboradores consideran que no se adaptaron a su puerto.</h3>
                </div>
            )
        } else if(selectedOption==='envi'){
            return(
                <div>
                    <h2 className='center-Text'>Ambiente laboral</h2>
                    <h3 className='center-Text'>La intención de este dashboard es brindar información acerca del ambiente laboral.</h3>
                </div>
            )
        }
    }

    return (
        <div className='container'>
            <div className="Header-container">
                <h1>Talento Colektia</h1>
                <h2>¡Bienvenido!</h2>
            </div>
            <Menu />
            <section className="Dashboard-container">
                <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
                    <option value="Selecciona el dashboard que quieras ver:" className="hidden-text">Selecciona el dashboard que quieras ver:</option>
                    <option value="recruit" >Reclutamiento</option>
                    <option value="trainingCk">Capacitación y onboarding</option>
                    <option value="envi">Ambiente laboral</option>
                    <option value="employees">Salida</option>
                    <option value="rejecting">Desvinculaciones</option>
                </select>
            </section>
            {dashTitle()}
            {renderGraph()}
        </div>
    )
}

export default Home;