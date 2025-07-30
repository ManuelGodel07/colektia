import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/training-menu.css'


const TrainingMenu = () => {
  return (
    <nav className='navigation'>
      {/* <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Sender'>Sender</NavLink> */}
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/RecruitCatcher'>Recruiter</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/TrainingDash'>Tarjetas</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/TrDash'>Dashboard</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Recruitment'>Encuesta de reclutamiento</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Training'>Encuesta de onboarding</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Environment'>Encuesta de seguimiento</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Skills'>Skills</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/CandidateProfile'>Perfil de nuevos ingresos</NavLink>
    </nav>
  )
}

export default TrainingMenu;