import React from "react";
import Bossmenu from "./Bossmenu";

const Dashboard =()=>{
        const usuario = "Manuel Ruiz";

        const newInput =()=> {
                return(
                        <div className="card-container">
                                <div className="card-header" />
                                <img src="https://firebasestorage.googleapis.com/v0/b/fire117-7b888.appspot.com/o/ImageProfile%2FManuelRuiz.jpg?alt=media&token=8c3953d2-a351-4567-9ab4-db0b5e0527ee"
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
                                <table>
                                        <thead>
                                                <tr>
                                                        <th>KPI´S TRAINING</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                        <td>Tasa de Participación en Programas de Capacitación</td><td>8</td>
                                                </tr>
                                                <tr>
                                                        <td>Tasa de Finalización de Cursos</td><td>8</td>
                                                </tr>
                                                <tr>
                                                        <td>Satisfacción de onboarding</td><td>8</td>
                                                </tr>
                                                <tr>
                                                        <td>Retención del Conocimiento</td><td>8</td>
                                                </tr>
                                                <tr>
                                                        <td>Impacto en el Desempeño Laboral</td><td>8</td>
                                                </tr>
                                                <tr>
                                                        <td>Tasa de Promoción Interna</td><td>8</td>
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                )
        }

        const handleLogOut=()=>{
                alert("Cerrando sesión")
        }

        return(
                <div className="mainScreen">
                        <div className="menu">
                                <Bossmenu />
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
export default Dashboard;