import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { data } from "../assets/envi";
import '../styles/recruit-Styles.css'

const Environment = () => {
const [name, setName] = useState('');
const [questions, setQuestions] = useState(data);
const [selectedValues, setSelectedValues] = useState({});
const [salida, setSalida] = useState("");

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
    setSalida(newValue);
    actualizador((prevValues) => ({
        ...prevValues,
        'Salida': newValue,
    }));
};

const handleName =(e)=>{
    const myName = e.target.value;
    setName(myName);
    setSelectedValues((prevValues) => ({
        ...prevValues,
        'Name': myName,
    }));
}

const saveInfo= async()=>{
    const clavesEsperadas = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const clavesFaltantes = clavesEsperadas.filter(clave => 
        !selectedValues.hasOwnProperty(clave) || selectedValues[clave] === undefined || selectedValues[clave] === ''
    );
    if (!name) {
        alert("Te falta escribir tu nombre");
        return;
    } else if (!salida){
        alert("Te falta escribir tu comentario adicional");
    }
    else if (clavesFaltantes.length > 0 ) {
        alert(`Faltan las siguientes respuestas: ${clavesFaltantes.join(', ')}`);
    } else {
        try {
            await addDoc(collection(db,'envi'),{
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
            setSalida('');
            setName('');
            alert('Gracias por tu feedback');
        } catch (error) {
            alert('Se presento el sig. error: ', error);
        }
    }
}

return (
    <div className="main">
        <div className="Header-container">
            <h1 >Encuesta de satisfacción del proceso de reclutamiento</h1>
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
                <h3>Comentarios adicionales:</h3>
                <textarea
                value={salida}
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

export default Environment;