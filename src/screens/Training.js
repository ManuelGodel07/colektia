import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { trainSet } from "../assets/trainQuestions";
import '../styles/training.css'

const Training = () => {
const [name, setName] = useState('');
const [questions, setQuestions] = useState(trainSet);
const [selectedValues, setSelectedValues] = useState({});
const [insight, setInsight] = useState("");


const handleChange = (event, questionName) => {
    const target = event.target;
    const newValue = event.target.getAttribute('data-value2');
    setSelectedValues((prevValues) => ({
    ...prevValues,
    [questionName]: newValue,
    }));

    const nextState = questions.map((question) => {
    if (question.name !== target.name) {
        return question;
    }

    return {
        ...question,
        options: question.options.map((opt) => {
        const checked = opt.radioValue === target.value;
        return {
            ...opt,
            selected: checked,
        };
        }),
        currentAnswer: target.value,
    };
    });
    setQuestions(nextState);
};

const handleInputText = (event,actualizador) => {
    const newValue = event.target.value;
    setInsight(newValue);
    actualizador((prevValues) => ({
        ...prevValues,
        'insight': newValue,
    }));
};

const handleName =(e)=>{
    const myName = e.target.value;
    setName(myName)
    setSelectedValues((prevValues) => ({
        ...prevValues,
        'Name': myName,
    }));
}

const saveInfo= async()=>{
    const clavesEsperadas = ['1', '2','3','4','5','6', '7', '8', 'insight','Name'];
    const clavesFaltantes = clavesEsperadas.filter(clave => 
    !selectedValues.hasOwnProperty(clave) || selectedValues[clave] === undefined || selectedValues[clave] === ''
    );
    if (!name) {
        alert("Te falta escribir tu nombre");
        return;
    } else if (!insight){
        alert("Te falta escribir tu comentario adicional");
    } else if (clavesFaltantes.length > 0) {
        alert(`Faltan las siguientes respuestas: ${clavesFaltantes.join(', ')}`);
    } else {
        try {
            await addDoc(collection(db,'trainingCk'),{
            ...selectedValues
            }) 
            const resetQuestions = questions.map(question => ({
                ...question,
                options: question.options.map(option => ({
                    ...option,
                    selected: false
                }))
            }));
            setQuestions(resetQuestions);
            setSelectedValues({});
            setInsight('');
            setName('');
            alert('Gracias por tu feedback');
        } catch (error) {
            alert('Se presento el siguiente error: ', error);
        }
    }
}

return (
    <div className="main">
        <div className="Header-container">
            <h1>Encuesta de satisfacción del proceso de onboarding y capacitación</h1>
            <h2>¡Tu opinión cuenta! Ayúdanos a mejorar.</h2>
            <h3>Responde nuestra encuesta de satisfacción y ayúdanos a identificar áreas de mejora en la empresa</h3>
        </div>
        <section>
            <label>Escribe tu nombre completo:
                <input type="text" value={name} onChange={(event)=>handleName(event)}/>
            </label>
            {questions.map((question, idx) => (
                <div key={`group-${idx}`}>
                    <h3>
                        {idx + 1}. {question.questionText}
                    </h3>
                    {question.options.map((option, idx) => {
                    return (
                        <div key={`option-${idx}`}>
                        <input
                            type="radio"
                            name={question.name}
                            value={option.radioValue}
                            data-value2={option.choice}
                            checked={option.selected}
                            onChange={(event) => handleChange(event, question.name)} 
                        />
                        {option.choice}
                        </div>
                    );
                })}
            </div>
            ))}
            <div>
                <h3>9. Comentarios adicionales:</h3>
                <textarea
                value={insight}
                onChange={(event) => handleInputText(event, setSelectedValues)}
                rows="5"
                cols="80"
                placeholder="Escribe aquí..."
                />
            </div>
            <div>
            <button className="sendInfo" onClick={saveInfo} >Enviar</button>
            </div>
        </section>
    </div>
);
}
export default Training;