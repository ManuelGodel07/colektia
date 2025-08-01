import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Quit from "./screens/Quit";
import Home from "./screens/Home";
import Recruitment from "./screens/Recruitment";
import Training from "./screens/Training";
import Reject from './screens/Reject';
import Environment from './screens/Environment';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Capture from './screens/Capture';
import TrainingDash from './screens/TrainingDash';
import Skills from './screens/Skills';
import CandidateProfile from './screens/CandidateProfile';
import DashBoss from './screens/DashBoss';
import TrDash from './screens/TrDash';
import RecruitCatcher from './screens/RecruitCatcher';
import Sender from './screens/Sender';

function App() {
  const user = "";

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={user ? <Navigate to={user.rol === "jefe" ? "/dashboard" : "/Capture"} /> : <Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Capture' element={<Capture />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Recruitment' element={<Recruitment />} />
          <Route path='/Training' element={<Training />} />
          <Route path='/DashBoss' element={<DashBoss />} />
          <Route path='/CandidateProfile' element={<CandidateProfile />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/TrDash' element={<TrDash />} />
          <Route path='/Sender' element={<Sender />} />
          <Route path='/RecruitCatcher' element={<RecruitCatcher />} />
          <Route path='/Environment' element={<Environment />} />
          <Route path='/Reject' element={<Reject />} />
          <Route path="/Quit" element={<Quit />} />
          <Route path="/TrainingDash" element={<TrainingDash />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;