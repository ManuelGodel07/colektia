import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Quit from "./screens/Quit";
import Home from "./screens/Home";
import Recruitment from "./screens/Recruitment";
import Training from "./screens/Training";
import Reject from './screens/Reject';
import Environment from './screens/Environment';

export default function App() {

  return (
    <div className="App-main">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/Recruitment' element={<Recruitment />}/>
          <Route path='/Training' element={<Training />}/>
          <Route path='/Environment' element={<Environment />}/>
          <Route path='/Reject' element={<Reject />}/>
          <Route path="/Quit" element={<Quit />}/>
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};