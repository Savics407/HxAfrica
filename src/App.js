// import logo from './logo.svg';
import './App.css';
import Login from './assets/Login';
import Auth from './assets/Signup';
import Dashboard from './assets/Dashboard'
import Details from './assets/Investment_Details'
import { Routes, Route, Link} from 'react-router-dom'
import Processing from './assets/ProcessingBvn';
import Investment from './assets/Investment';
import Ongoing from './assets/Ongoing';
import Completed from './assets/Completed';
import Mine from './assets/Mine';
import Relisted from './assets/Relisted';
import Token from './assets/Token';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Auth />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/token" element={<Token />} />
          <Route path="/details" element={<Details />} />
          <Route path="/bvn" element={<Processing />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/investments/ongoing" element={<Ongoing />} />
          <Route path="/investments/completed" element={<Completed />} />
          <Route path="/investments/relisted-investment" element={<Relisted />} />
          <Route path="/investments/my-investment" element={<Mine />} />
        </Routes> 
      </div>
  );
}


export default App;
