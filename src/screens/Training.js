import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { trainSet } from "../assets/trainQuestions";


const Training = () => {
const [name, setName] = useState('');
const [questions, setQuestions] = useState(trainSet);
const [selectedValues, setSelectedValues] = useState({});
const [selectedOption, setSelectedOption] = useState("");
const [salida, setSalida] = useState("");


const handleChange = (event, questionName) => {
    const target = event.target;
    const newValue = event.target.getAttribute('data-value2');
    console.log('new:', newValue)
    const selectedQuestion = questions.find((question) => question.name === target.name);

    const selectedOption = selectedQuestion.options.find((opt) => opt.radioValue === target.value);

    setSelectedValues((prevValues) => ({
    ...prevValues,
    [questionName]: newValue,
    }));
    console.log(`Pregunta: ${questionName}, Valor seleccionado: ${selectedOption}`);
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
    actualizador((prevValues) => ({
    ...prevValues,
    'Salida': newValue,
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
    const clavesEsperadas = [ '3','4','5','6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];

    const clavesFaltantes = clavesEsperadas.filter(clave => 
    !selectedValues.hasOwnProperty(clave) || selectedValues[clave] === undefined || selectedValues[clave] === ''
    );

    if (clavesFaltantes.length > 0) {
    console.log(selectedValues);
    alert(`Faltan las siguientes respuestas: ${clavesFaltantes.join(', ')}`);
    } else {
    console.log(selectedValues);
        try {
        await addDoc(collection(db,'employees'),{
        ...selectedValues
        })
        console.log('-',selectedValues)
        setSelectedValues({})
        } catch (error) {
            console.log(error)
        }
    alert('Todas las respuestas están presentes.');
    }
}

return (
    <div className="App-main">
    <div className="Header-container">
        <h1 >Encuesta de satisfacción</h1>
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
            <h3>8. ¿Qué partes de la capacitación encontraste más útiles y cuáles menos relevantes?</h3>
            <textarea
            value={salida.Salida}
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