import {
  Routes,
  Route,
} from "react-router-dom";
import { Watched } from "./components/Watched";
import Add from "./components/Add";
import './App.css';
import './styles/login.css';
import Login from './components/Login';
import { Home } from './components/Home';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/Watched" element={<Watched/>} />
      <Route exact path="/Add" element={<Add/>} />
    </Routes>
  );
}

export default App;
