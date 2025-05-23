import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Quit from "./screens/Quit";
import Home from "./screens/Home";
import Recruitment from "./screens/Recruitment";
import Training from "./screens/Training";
import Reject from './screens/Reject';
import Environment from './screens/Environment';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Capture from './screens/Capture';
import Menu from './screens/Menu';

function App() {
  const user ="";

  return (
    <div className="App-main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to={user.rol === "jefe" ? "/dashboard" : "/Capture"} /> : <Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Capture' element={<Capture />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Recruitment' element={<Recruitment />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/Environment' element={<Environment />} />
          <Route path='/Reject' element={<Reject />} />
          <Route path="/Quit" element={<Quit />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;