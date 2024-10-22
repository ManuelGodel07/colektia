import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <nav className='navigation'>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Quit'>Encuesta de salida</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Recruitment'>Encuesta de satisfacción (Reclutamiento)</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Training'>Encuesta de satisfacción (Capacitación)</NavLink>
      <NavLink className={({ isActive }) => `${isActive ? 'active-link' : ''} linkMenu`} to='/Home'>Dashboard</NavLink>
    </nav>
  )
}

export default Menu;