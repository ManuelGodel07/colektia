import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/training-menu.css'


const TrainingMenu = () => {
return (
    <nav className='navigation'>
        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Home'>Encuentas ciclo de vida</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/TrainingDash'>Dashboard</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Skills'>Skills</NavLink>
        <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/CandidateProfile'>Perfil de nuevos ingresos</NavLink>
    </nav>
)
}

export default TrainingMenu;