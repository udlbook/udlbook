import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages';




function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/udlbook/" element ={<Home/>} />      
      </Routes>
      
    </Router>
  );
}

export default App;
