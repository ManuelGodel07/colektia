import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { data } from "../assets/data";
import '../App.css'

export default function Quit() {
const [name, setName] = useState('');
const [questions, setQuestions] = useState(data);
const [selectedValues, setSelectedValues] = useState({});
const [selectedOption, setSelectedOption] = useState("");
const [salida, setSalida] = useState("");
const [actions, setActions] = useState('');
const [change,setChange] = useState('');

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
const handleInputText2 = (event,actualizador) => {
    const newValue = event.target.value;
    actualizador((prevValues) => ({
    ...prevValues,
    'Actions': newValue,
    }));
};
const handleInputText3 = (event,actualizador) => {
    const newValue = event.target.value;
    actualizador((prevValues) => ({
    ...prevValues,
    'Change': newValue,
    }));
};
const handleInputText4 = (event,actualizador) => {
    const newValue = event.target.value;
    actualizador((prevValues) => ({
    ...prevValues,
    'Payroll': newValue,
    }));
};
const handleInputText5 = (event,actualizador) => {
    const newValue = event.target.value;
    actualizador((prevValues) => ({
    ...prevValues,
    'Comments': newValue,
    }));
};
const handleInputText6 = (event,actualizador) => {
    const newValue = event.target.value;
    actualizador((prevValues) => ({
    ...prevValues,
    'Event': newValue,
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

const handleSelectChange = (event,questionName) => {
    setSelectedOption(event.target.value);

    const newValue = event.target.value;
    setSelectedValues((prevValues) => ({
        ...prevValues,
        [questionName]: newValue,
    }));

};

const renderBasedOnOption = () => {
    if (selectedOption === questions[0].options[0].choice) {
    return (
        <div>
        <h3>
            2. {questions[1].questionText}
        </h3>
        {questions[1].options.map((option, idx) => {
            return (
            <div key={`option-${idx}`}>
                <input
                type="radio"
                name={questions[1].name}
                value={option.radioValue}
                data-value2={option.choice}
                checked={option.selected}
                onChange={(event) => handleChange(event, questions[1].name)} 
                />
                {option.choice}
            </div>
            );
        })}
        </div>
    );
    } else if(selectedOption === questions[0].options[1].choice){
    return (
        <div>
        <h3>
            2. {questions[2].questionText}
        </h3>
        {questions[2].options.map((option, idx) => {
            return (
            <div key={`option-${idx}`}>
                <input
                type="radio"
                name={questions[2].name}
                value={option.radioValue}
                data-value2={option.choice}
                checked={option.selected}
                onChange={(event) => handleChange(event, questions[2].name)} 
                />
                {option.choice}
            </div>
            );
        })}
        </div>
    );
    } else if(selectedOption === questions[0].options[2].choice){
    return (
        <div>
        <h3>
            2. {questions[3].questionText}
        </h3>
        {questions[3].options.map((option, idx) => {
            return (
            <div key={`option-${idx}`}>
                <input
                type="radio"
                name={questions[3].name}
                value={option.radioValue}
                data-value2={option.choice}
                checked={option.selected}
                onChange={(event) => handleChange(event, questions[3].name)} 
                />
                {option.choice}
            </div>
            );
        })}
        </div>
    );
    } else if(selectedOption === questions[0].options[3].choice){
    return (
        <div>
        <h3>
            2. {questions[4].questionText}
        </h3>
        {questions[4].options.map((option, idx) => {
            return (
            <div key={`option-${idx}`}>
                <input
                type="radio"
                name={questions[4].name}
                value={option.radioValue}
                data-value2={option.choice}
                checked={option.selected}
                onChange={(event) => handleChange(event, questions[3].name)} 
                />
                {option.choice}
            </div>
            );
        })}
        </div>
    );
    }
};

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
        <h1 >Encuesta de salida</h1>
        <h2>¡Tu opinión cuenta! Ayúdanos a mejorar.</h2>
        <h3>Responde nuestra encuesta de salida y ayúdanos a identificar áreas de mejora en la empresa</h3>
    </div>
    <section>
        <label>Escribe tu nombre completo:
        <input type="text" value={name} onChange={(event)=>handleName(event)}/>
        </label>
        <div className="Starting-test">
        <h3 htmlFor="dropdown" >1. {questions[0].questionText}</h3>
        <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
            <option value="">Selecciona una opción</option>
            <option value={questions[0].options[0].choice}>{questions[0].options[0].choice}</option>
            <option value={questions[0].options[1].choice}>{questions[0].options[1].choice}</option>
            <option value={questions[0].options[2].choice}>{questions[0].options[2].choice}</option>
            <option value={questions[0].options[3].choice}>{questions[0].options[3].choice}</option>
        </select>
        {renderBasedOnOption()}
        </div>

        {questions.slice(5).map((question, idx) => (
        <div key={`group-${idx}`}>
            <h3>
            {idx + 3}. {question.questionText}
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
            <h3>Nos puedes platicar mas sobre tu salida</h3>
            <textarea
            value={salida.Salida}
            onChange={(event) => handleInputText(event, setSelectedValues)}
            rows="5"
            cols="80"
            placeholder="Escribe aquí..."
            />
        </div>
        <div>
            <h3>¿Que podriamos haber hecho para que te quedarás más tiempo con nosotros?</h3>
            <textarea
            value={actions.Actions}
            onChange={(event) => handleInputText2(event, setSelectedValues)}
            rows="5"
            cols="80"
            placeholder="Escribe aquí..."
            />
        </div>
        <div>
            <h3>Si hubieras tenido la oportunidad de cambiar algo en Colektia ¿Qué seria?</h3>
            <textarea
            value={change.Change}
            onChange={(event) => handleInputText3(event, setSelectedValues)}
            rows="5"
            cols="80"
            placeholder="Escribe aquí..."
            />
        </div>
        <div>
            <h3>¿Cual fue el error de nómina que tuviste?</h3>
            <textarea
            value={change.Change}
            onChange={(event) => handleInputText4(event, setSelectedValues)}
            rows="5"
            cols="80"
            placeholder="Escribe aquí..."
            />
        </div>
        <div>
            <h3>¿Algo adicional que quisieras compartir?</h3>
            <textarea
            value={change.Change}
            onChange={(event) => handleInputText5(event, setSelectedValues)}
            rows="5"
            cols="80"
            placeholder="Escribe aquí..."
            />
        </div>
        <div>
            <h3>Basado en el evento que presenciaste, favor de describir los hechos y nombres de personas involucradas</h3>
            <textarea
            value={change.Change}
            onChange={(event) => handleInputText6(event, setSelectedValues)}
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
};