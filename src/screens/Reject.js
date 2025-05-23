import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { questionsSet } from "../assets/reject";
import '../styles/reject.css'

const Reject = () => {
const [name, setName] = useState('');
const [questions, setQuestions] = useState(questionsSet);
const [selectedValues, setSelectedValues] = useState({});
const [salida, setSalida] = useState("");
const [trash, setTrash] = useState("");
const [request, setRequest] = useState("");

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
    setTrash(newValue);
    actualizador((prevValues) => ({
    ...prevValues,
    'Trash': newValue,
    }));
};
const handleInputText1 = (event,actualizador) => {
    const newValue = event.target.value;
    setRequest(newValue);
    actualizador((prevValues) => ({
    ...prevValues,
    'Request': newValue,
    }));
};
const handleInputText2 = (event,actualizador) => {
    const newValue = event.target.value;
    setSalida(newValue);
    actualizador((prevValues) => ({
    ...prevValues,
    'Problem': newValue,
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
    const clavesEsperadas = ['1','2','3','4','5','6', '7'];
    const clavesFaltantes = clavesEsperadas.filter(clave => 
    !selectedValues.hasOwnProperty(clave) || selectedValues[clave] === undefined || selectedValues[clave] === '');

    if (!name) {
        alert("Te falta escribir tu nombre");
        return;
    } else if (!trash){
        alert("Te falta responder la pregunta 8");
    } else if (!request){
        alert("Te falta responder la pregunta 9");
    } else if (!salida){
        alert("Te falta responder la pregunta 10");
    }else if (clavesFaltantes.length > 0 ) {
        alert(`Faltan las siguientes respuestas: ${clavesFaltantes.join(', ')}`);
    } else{
        try {
            await addDoc(collection(db,'rejecting'),{
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
            setTrash('');
            setRequest('');
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
                <h3>8. ¿Hubo alguna circunstancia que te impidiera desempeñarte al máximo durante tu periodo de prueba?</h3>
                <textarea
                value={trash.Trash}
                onChange={(event) => handleInputText(event, setSelectedValues)}
                rows="5"
                cols="80"
                placeholder="Escribe aquí..."
                />
            </div>
            <div>
                <h3>9. ¿Qué podríamos haber hecho diferente para mejorar tu adaptación al puesto?</h3>
                <textarea
                value={request.Request}
                onChange={(event) => handleInputText1(event, setSelectedValues)}
                rows="5"
                cols="80"
                placeholder="Escribe aquí..."
                />
            </div>
            <div>
                <h3>10. ¿Tuviste algún conflicto o situación incómoda con otros colaboradores o supervisores durante tu periodo de prueba?</h3>
                <textarea
                value={salida.Problem}
                onChange={(event) => handleInputText2(event, setSelectedValues)}
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

export default Reject;