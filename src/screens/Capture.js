import React, { useState } from "react";
import TrainingDash from "./TrainingDash";
import TrainingMenu from "./TrainingMenu";
import '../styles/capture.css'

const Capture =()=>{
        const [coworkerName, setCoworkerName] = useState('');
        const [questionComprehesion, setQuestionComprehesion] = useState('');
        const [wordRespect, setWordRespect] = useState('');
        const  [inputValue, setInputValue] = useState('');
        const usuario = "manuel";

        const newInput =()=> {

                return(
                        <div className="input-group">
                                <label htmlFor="infoInput">Info personalizada</label>
                                <input
                                id="infoInput"
                                type="text"
                                placeholder="Escribe aquí..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                />
                        </div>                   
                )
        }

        return(
                <div>
                        <div>
                                <TrainingMenu />
                                <div>
                                        <p>Cerrar sesión</p>
                                </div>
                        </div>
                        <section className="main">
                                <p>Hola {usuario}</p>

                                {newInput()}


                        </section>

                </div>
        )
}
export default Capture;


