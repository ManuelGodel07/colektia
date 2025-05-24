import React, { useState } from "react";

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
                <div className="main">
                        <p>Hola {usuario}</p>

                        {newInput()}
                        {newInput()}
                        {newInput()}
                        {newInput()}
                        {newInput()}

                </div>
        )
}
export default Capture;