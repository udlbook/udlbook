import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import "./styles/App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/udlbook/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
