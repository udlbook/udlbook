import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";

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
