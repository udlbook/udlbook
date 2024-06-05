import { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InstructorsSection from "../components/Instructors";
import MediaSection from "../components/Media";
import MoreSection from "../components/More";
import Navbar from "../components/NavBar";
import NotebookSection from "../components/Notebooks";
import Sidebar from "../components/Sidebar";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <NotebookSection />
            <InstructorsSection />
            <MediaSection />
            <MoreSection />
            <Footer />
        </>
    );
}
