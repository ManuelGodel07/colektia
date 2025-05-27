import React, { useState } from "react";
import TrainingDash from "./TrainingDash";
import TrainingMenu from "./TrainingMenu";
import '../styles/capture.css'

const Capture =()=>{
        const [coworkerName, setCoworkerName] = useState('');
        const [questionComprehesion, setQuestionComprehesion] = useState('');
        const [wordRespect, setWordRespect] = useState('');
        const  [inputValue, setInputValue] = useState('');
        const usuario = "Manuel Ruiz";

        const newInput =()=> {
                return(
                        <div className="card-container">
                                <div className="card-header" />
                                <img
                                        src="https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/ImageProfile%2Fyo.jpg?alt=media&token=a1efb988-9857-4f5f-a2c1-ca8bea6c0115"
                                        alt="usuario"
                                        className="profile-img"
                                />
                                <h2 className="name">{usuario}</h2>
                                <p className="position">Reclutador</p>
                                <p className="company">People team</p>
                                <div className="contact-icons">
                                        <div className="icon-box">
                                        <i className="fas fa-phone" />
                                        <p>Calendario</p>
                                        </div>
                                        <div className="icon-box">
                                        <i className="fab fa-whatsapp" />
                                        <p>Optiwave</p>
                                        </div>
                                        <div className="icon-box">
                                        <i className="fas fa-envelope" />
                                        <p>Correo</p>
                                        </div>
                                </div>
                        </div>              
                )
        }

        const messages=()=> {
                return(
                        <div className="msg-container">
                                <p>Kpi 1</p>
                                <p>Kpi 2</p>
                                <p>Kpi 3</p>
                                <p>Kpi 4</p>
                                <p>Kpi 5</p>
                        </div>
                )
        }

        const handleLogOut=()=>{
                alert("Cerrando sesión")
        }

        return(
                <div className="mainScreen">
                        <div className="menu">
                                <TrainingMenu />
                                <button onClick={handleLogOut}>Cerrar sesión</button>
                        </div>
                        <section className="main">
                                <div>
                                        <p style={{ textAlign: 'center', fontSize:'1.2rem',fontWeight:'bold' }}>Buen dia {usuario}</p>
                                        <p style={{ textAlign: 'center' }}>Bienvenido a tu espacio de trabajo en colektia</p>
                                </div>
                                <div className="cardPresentationMain">
                                        {newInput()}
                                        {messages()}
                                </div>
                        </section>

                </div>
        )
}
export default Capture;


