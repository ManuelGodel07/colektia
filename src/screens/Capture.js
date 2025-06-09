import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrainingMenu from "./TrainingMenu";
import '../styles/capture.css'

const Capture =()=>{
        const [user, setUser] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
        setUser(JSON.parse(userData));
        }
        }, []);

        const newInput =()=> {
                return(
                        <div className="card-container">
                                <div className="card-header" />
                                <img src={user.img}
                                alt="usuario"
                                className="profile-img"
                                />
                                <h2 className="name">{user.nombre}</h2>
                                <p className="position">{user.puesto}</p>
                                <p className="company">{user.area} team</p>
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
                localStorage.removeItem("user");
                navigate("/Login");   
        }

        if (!user) return <p>Cargando datos del usuario...</p>;
        return(
                <div className="mainScreen">
                        <div className="menu">
                                <TrainingMenu />
                                <button onClick={handleLogOut}>Cerrar sesión</button>
                        </div>
                        <section className="main">
                                <div>
                                        <p style={{ textAlign: 'center', fontSize:'1.2rem',fontWeight:'bold' }}>Buen dia {user.nombre}</p>
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