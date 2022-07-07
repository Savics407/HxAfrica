// import logo from './logo.svg';
import './App.css';
import Login from './assets/Login';
import Auth from './assets/Signup';
import Dashboard from './assets/Dashboard'
import Details from './assets/Investment_Details'
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
        </Routes> 
      </div>
  );
}


export default App;
