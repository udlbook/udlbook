import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import "./styles/App.css";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/udlbook/" element={<Home />} />
            </Routes>
        </Router>
    );
}
