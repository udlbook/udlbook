import Index from "@/pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/udlbook" element={<Index />} />
            </Routes>
        </Router>
    );
}
